import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import EventCard from "@/Components/Home/EventCard";

export default function Welcome({ auth }) {
    return (
        <GuestLayout auth={auth}>
            <Head title="Welcome" />

            {/* Hero Section */}
            <div className="relative">
                <div className="relative h-[600px] overflow-hidden">
                    <img
                        src="/assets/hike.jpg"
                        alt="Hero Event"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full md:w-1/2 px-8 md:px-16">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                Backyard Ultra: Nairobi
                            </h1>
                            <h3 className="text-xl md:text-2xl text-gray-200 mb-6">
                                16 - 17th March
                            </h3>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-[var(--light-green)] hover:bg-[var(--dark-green)] text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center"
                            >
                                Register Now
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Section */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                            <div className="w-full md:w-1/3">
                                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option value="0">Select Sport</option>
                                    <option value="1">Running</option>
                                    <option value="2">Cycling</option>
                                    <option value="3">Swimming</option>
                                    <option value="4">Hiking</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/3">
                                <select className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:ring-[var(--light-green)] focus:border-[var(--light-green)]">
                                    <option value="0">Select Location</option>
                                    <option value="1">Nairobi</option>
                                    <option value="2">Mombasa</option>
                                    <option value="3">Kisumu</option>
                                    <option value="4">Nakuru</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-[var(--light-green)] hover:bg-[var(--dark-green)] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
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
                                Search Events
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Catalogue Section */}
            <div className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ocean-green)] mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Discover and participate in the most exciting
                            sporting events across the country
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>

                    <div className="text-center mt-12">
                        <button className="inline-flex items-center px-6 py-3 border-2 border-[var(--ocean-green)] text-[var(--ocean-green)] hover:bg-[var(--ocean-green)] hover:text-white font-semibold rounded-lg transition-all duration-300">
                            View All Events
                            <svg
                                className="ml-2 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .bg-dots-darker {
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
        }
        @media (prefers-color-scheme: dark) {
          .dark\\:bg-dots-lighter {
            background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
          }
        }
      `}</style>
        </GuestLayout>
    );
}
