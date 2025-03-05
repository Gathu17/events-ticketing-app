import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import EventCard from '@/Components/Home/EventCard';

export default function Welcome({ auth }) {
  return (
    <GuestLayout auth={auth}>
      <Head title="Welcome" />

      <div>
        <div className='flex m-0'>
          <img
            src="/assets/hike.jpg"
            alt=""
            className='w-[60%] h-[450px]'
          />
          <form action="" className='w-[40%] px-[30px]'>
            <h1 className='text-[45px]'>Backyard Ultra: Nairobi</h1>
            <h3 className='my-3 tsxt-sm'>16 - 17th March</h3>
            <button type="submit" className='border py-3 px-10 my-3'>
              Register
            </button>
          </form>
        </div>

        <div className='flex justify-center py-3 bg-[var(--light-blue)]'>
          <select name="" id="" className='mx-6 px-[12%]'>
            <option value="0">Select Sport</option>
          </select>
          <select name="" id="" className='mx-6 px-[12%]'>
            <option value="0">Select Location</option>
          </select>
          <button type="submit" className='border px-[80px] py-1 mx-6 bg-[var(--light-green)] text-white'>Search</button>
        </div>
      </div>

      <div id="events-catalogue">
        <h1 className='text-[35px] text-center text-[var(--ocean-green)]'>Upcoming Events</h1>
        <div className='px-8 flex flex-wrap justify-center'>
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
