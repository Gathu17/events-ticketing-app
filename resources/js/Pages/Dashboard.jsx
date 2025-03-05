import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard({ auth, events }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[var(--light-green)] to-[var(--dark-green)] py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Discover Amazing Events
                            </h1>
                            <p className="text-green-50 text-lg max-w-2xl mx-auto">
                                Find and join the most exciting events happening around you
                            </p>
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    {/* Filters and Search */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center space-x-4 w-full sm:w-auto">
                                <select className="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option>All Categories</option>
                                    <option>Music</option>
                                    <option>Sports</option>
                                    <option>Arts</option>
                                </select>
                                <select className="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option>This Month</option>
                                    <option>Next Month</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                            <div className="relative w-full sm:w-64">
                                <input
                                    type="search"
                                    placeholder="Search events..."
                                    className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 pr-10 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]"
                                />
                                <svg
                                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events?.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {event.image_url ? (
                                    <div className="aspect-[16/9] w-full overflow-hidden relative group-hover:opacity-90 transition-opacity">
                                        <img
                                            src={event.image_url}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                    </div>
                                ) : (
                                    <div className="aspect-[16/9] w-full bg-gradient-to-br from-[var(--light-green)] to-[var(--dark-green)] opacity-80"></div>
                                )}

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--light-green)] text-white">
                                            {new Date(event.date).toLocaleDateString()}
                                        </span>
                                        <span className="text-sm font-semibold text-[var(--dark-green)] dark:text-green-400">
                                            {event.time}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--light-green)] transition-colors">
                                        {event.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                className="w-5 h-5 text-[var(--light-green)]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {event.location}
                                            </span>
                                        </div>

                                        <button className="inline-flex items-center px-4 py-2 bg-[var(--light-green)] hover:bg-[var(--dark-green)] text-white text-sm font-medium rounded-md transition-all duration-300 hover:shadow-lg">
                                            View Details
                                            <svg
                                                className="ml-2 h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {events?.length === 0 && (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                                <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                No Events Found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Check back later for upcoming events!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
