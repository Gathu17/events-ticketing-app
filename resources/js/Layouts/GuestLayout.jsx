import Navbar from "@/Components/Navbar/Index";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Guest({
    auth = {},
    children,
    className = "w-full px-4 sm:px-6 py-4 bg-gray-100 dark:bg-gray-800 overflow-hidden",
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="sm:pt-0 bg-white dark:bg-gray-900 w-[100vw]">
            <header className="relative w-[100vw]">
                <div className="flex justify-between items-center w-full px-4 sm:px-6 py-2">
                    <Navbar />

                    {/* Desktop Navigation */}
                    <div className="hidden sm:block bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="text-end">
                            {auth.user ? (
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={route("dashboard")}
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        {auth.user.first_name}
                                    </Link>

                                    <Link
                                        href={route("logout")}
                                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Sign out
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={route("login")}
                                        className="font-semibold text-white hover:text-[var(--blue)] hover:bg-gray-100 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm px-3 py-2 bg-[var(--blue)]"
                                    >
                                        Sign in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="font-semibold text-white hover:text-[var(--light-green)] hover:bg-gray-100 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm px-3 py-2 bg-[var(--light-green)]"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="sm:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg z-50">
                        <div className="px-4 py-3 space-y-3">
                            {auth.user ? (
                                <>
                                    <Link
                                        href={route("dashboard")}
                                        className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        {auth.user.first_name}
                                    </Link>
                                    <Link
                                        href={route("logout")}
                                        className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    >
                                        Sign out
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="block w-full text-center font-semibold text-white hover:bg-blue-600 focus:outline-none px-3 py-2 bg-[var(--blue)]"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="block w-full text-center font-semibold text-white hover:bg-green-600 focus:outline-none px-3 py-2 bg-[var(--light-green)]"
                                    >
                                        Create Account
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </header>

            <div className={className}>{children}</div>
        </div>
    );
}
