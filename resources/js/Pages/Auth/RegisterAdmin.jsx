import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/common/InputError';
import InputLabel from '@/Components/common/InputLabel';
import PrimaryButton from '@/Components/common/PrimaryButton';
import TextInput from '@/Components/common/TextInput';
import { Head, Link, useForm, router } from '@inertiajs/react';
import fetchData from '@/Tools/fetchData';
import Select from '@/Components/common/Select';

function RegisterAdmin({ auth }) {
    const { data, setData, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = async (e) => {
        e.preventDefault();

        const fetchedData = await fetchData('/auth/register_admin', 'post', data, true, '/');
        // router.visit('/');
    };

    return (
        <GuestLayout auth={auth} className="flex justify-center items-center">
          <Head title="Register Admin" />

          {/* <div>

          </div> */}

          <div>
            <div className="text-center">
              <h1 className="text-[48px] text-gray-500">Create an Admin's Account</h1>
              <p className="text-[13px] text-gray-500">We ask you to do this once not every time you register. Please make sure your details are accurate.</p>
              {/* <p className="text-[13px]">When you create your account you agree to our Terms of Service and Privacy Policy.</p> */}
              <div className="py-6"></div>
            </div>
            <form onSubmit={submit}>
                <div>
                    {/* <InputLabel htmlFor="name" value="Name" /> */}

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        placeholder="Name"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="email" value="Email" /> */}

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        placeholder="Email: We will send you confirmation receipts here"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="email" value="Email" /> */}

                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phone_number"
                        value={data.phone_number}
                        className="mt-1 block w-full"
                        autoComplete="phone_number"
                        onChange={(e) => setData('phone_number', e.target.value)}
                        required
                        placeholder="Phone Number: To fill in your tickets start with country code"
                        title="Start with country code e.g +254..."
                    />

                    <InputError message={errors.phone_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="password" value="Password" /> */}

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        placeholder="Password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="password_confirmation" value="Confirm Password" /> */}

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                        placeholder="Confirm Password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
          </div>

        </GuestLayout>
    );
}

export default RegisterAdmin;