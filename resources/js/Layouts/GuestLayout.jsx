import Navbar from '@/Components/Navbar/Index';
import { Link } from '@inertiajs/react';

export default function Guest({
  auth = {},
  children,
  className = "w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 overflow-hidden"
}) {
    return (
        <div className="sm:pt-0 bg-white dark:bg-gray-900">
            <header className="flex justify-between w-full py-2">
              <Navbar/>
              
              <div className="bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white my-auto mr-4">
                <div className="text-end w-full">
                  {auth.user ? (
                    <div className="">
                      <Link
                        href={route('dashboard')}
                        className="px-2"
                      >
                        { auth.user.first_name }
                      </Link>

                      <Link
                        href={route('logout')}
                        className='px-2'
                      >
                        Sign out
                      </Link>
                    </div>
                  ) : (
                    <div className="">
                      <Link
                        href={route('login')}
                        className="font-semibold text-white hover:text-[var(--blue)] hover:bg-gray-100 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm px-3 py-2 bg-[var(--blue)]"
                      >
                        Sign in
                      </Link>

                      <Link
                        href={route('register')}
                        className="ms-4 font-semibold text-white hover:text-[var(--light-green)] hover:bg-gray-100 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm px-3 py-2 bg-[var(--light-green)]"
                      >
                        Create Account
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className={className}>
              {children}
            </div>
        </div>
    );
}
