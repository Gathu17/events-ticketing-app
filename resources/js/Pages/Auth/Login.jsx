import { useEffect } from "react";
import Checkbox from "@/Components/common/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/common/InputError";
import InputLabel from "@/Components/common/InputLabel";
import PrimaryButton from "@/Components/common/PrimaryButton";
import TextInput from "@/Components/common/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout className="flex justify-center">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="w-[90%] max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl md:text-[48px] text-gray-500 mt-5">
                        Sign In
                    </h1>
                    {/* <p className="text-[13px] text-gray-500">We ask you to do this once not every time you register. Please make sure your details are accurate.</p> */}
                    {/* <p className="text-[13px]">When you create your account you agree to our Terms of Service and Privacy Policy.</p> */}
                    <div className="py-4 md:py-6"></div>
                </div>

                <form onSubmit={submit} className="mt-4 md:mt-6">
                    <div>
                        {/* <InputLabel htmlFor="email" value="Email" /> */}

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Email address"
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        {/* <InputLabel htmlFor="password" value="Password" /> */}

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton
                            className="w-full sm:w-auto"
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
