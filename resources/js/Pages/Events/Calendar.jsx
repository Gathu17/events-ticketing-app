import MonthBox from '@/Components/Events/MonthBox';
import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

function Calendar({ auth }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <Guest auth={auth}>
      <div className='px-9'>
        <div className="flex justify-between items-center">
          <h1 className='text-[35px]'>Event Calendar</h1>
          <a href="/events/new">
            <button className='px-6 py-2 bg-[var(--light-green)] text-white'>New</button>
          </a>
        </div>

        <div className='flex justify-left my-3 border bg-white'>
          <div>
            <p className='px-4 py-2 bg-[var(--ocean-green)] text-gray-100'>2024</p>
          </div>
          <div>
            <p className='px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer'>2023</p>
          </div>
          <div>
            <p className='px-4 py-2'>2022</p>
          </div>
          <div>
            <p className='px-4 py-2'>2021</p>
          </div>
          <div>
            <p className='px-4 py-2'>2020</p>
          </div>
          <div>
            <p className='px-4 py-2'>2019</p>
          </div>
        </div>

        <div className='mt-6 px-3'>
          {
            (months.map((month, ind) => {
              return (
                <MonthBox
                  key={month}
                  month={month}
                  index={ind}
                />
              )
            }))
          }
        </div>
      </div>
    </Guest>
  )
}

export default Calendar