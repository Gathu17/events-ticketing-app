import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

function Ratings({ auth }) {
  return (
    <Guest auth={auth}>
      <div className='px-9'>
        <div className="flex justify-between">
          <h1 className='text-[35px]'>Event Ratings</h1>
          <h3 className='text-[16px]'>77101 Ratings and counting</h3>
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
          <div className='flex justify-between'>
            <div className='bg-white px-4 py-2 rounded-sm'>Feb 28</div>
            <div className='w-[90%] px-3 py-2'>
              <Link href="/" className='text-blue-600 hover:underline'>Event name</Link>
            </div>
            <p className='text-blue-600'>8.1</p>
          </div>
        </div>
      </div>
    </Guest>
  )
}

export default Ratings