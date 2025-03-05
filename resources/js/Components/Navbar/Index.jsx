import React from 'react'
import ApplicationLogo from '@/Components/common/ApplicationLogo';
import { Link } from '@inertiajs/react';
import TextInput from '../common/TextInput'

function Navbar() {
  return (
    <div className='flex items-left'>
      <div className="mx-3 border bg-gray-900 h-[40px] w-[40px] p-0">
        <Link href="/" className=''>
          <ApplicationLogo className="w-10 h-10 fill-current text-gray-500" />
        </Link>
      </div>

      <div className='px-3'>
        <TextInput 
          type='search'
          placeholder='Search by event name or organiser'
          className='w-[20em]'
        />
      </div>

      <Link
        href='/events/calendar'
        className='p-2'
      >
        Events
      </Link>
      <Link
        href='/ratings'
        className='p-2'
      >
        Ratings
      </Link>
      <Link
        href='/help'
        className='p-2'
      >
        Help
      </Link>
    </div>
  )
}

export default Navbar