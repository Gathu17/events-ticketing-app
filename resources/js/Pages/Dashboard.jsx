import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard({ auth, events }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                {/* Hero Section with animated gradient */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[var(--light-green)] via-[var(--ocean-green)] to-[var(--dark-green)]">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 animate-gradient"></div>
                        <div className="absolute inset-0 bg-grid-white/[0.2]"></div>
                    </div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                                Welcome to Your Dashboard
                            </h1>
                            <p className="text-green-50 text-lg max-w-2xl mx-auto">
                                Discover and manage your events. Create unforgettable experiences.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 backdrop-blur-sm">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upcoming Events</h2>
                                        <p className="text-3xl font-bold text-[var(--ocean-green)]">{events?.length || 0}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 backdrop-blur-sm">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Participants</h2>
                                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">124</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 backdrop-blur-sm">
                                <div className="flex items-center">
                                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Success Rate</h2>
                                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">98%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Filters and Search */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center space-x-4 w-full sm:w-auto">
                                <select className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option>All Categories</option>
                                    <option>Music</option>
                                    <option>Sports</option>
                                    <option>Arts</option>
                                </select>
                                <select className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option>This Month</option>
                                    <option>Next Month</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                            <div className="relative w-full sm:w-64">
                                <input
                                    type="search"
                                    placeholder="Search events..."
                                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 pr-10 text-sm focus:ring-[var(--light-green)] focus:border-[var(--light-green)]"
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
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-[1.02]"
                            >
                                {event.image_url ? (
                                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                                        <img
                                            src={event.image_url}
                                            alt={event.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                ) : (
                                    <div className="aspect-[16/9] w-full bg-gradient-to-br from-[var(--light-green)] to-[var(--dark-green)] group-hover:from-[var(--ocean-green)] group-hover:to-[var(--dark-green)] transition-all duration-500"></div>
                                )}

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--light-green)] to-[var(--ocean-green)] text-white">
                                            {new Date(event.date).toLocaleDateString()}
                                        </span>
                                        <span className="text-sm font-semibold text-[var(--ocean-green)] dark:text-green-400">
                                            {event.time}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--ocean-green)] transition-colors">
                                        {event.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                className="w-5 h-5 text-[var(--ocean-green)]"
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

                                        <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[var(--light-green)] to-[var(--ocean-green)] hover:from-[var(--ocean-green)] hover:to-[var(--dark-green)] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
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
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 mb-4">
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
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                No Events Found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Check back later for upcoming events!
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Add these styles to your CSS */}
            <style>{`
                .bg-grid-white {
                    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-gradient {
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                }
            `}</style>
        </AuthenticatedLayout>
    );
}
