import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React,{useState,useEffect} from 'react'
import {getRatings} from '../../Api/rating'
import {getEvents} from '../../Api/event'

function Ratings({ auth }) {
  const [year, setYear] = useState('2024')
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const data = await getEvents(); 
     
        setEvents(data.response);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchRatings();
  },[])
  useEffect(() =>{
    const newEvents =  events && filterByYear(events)
    console.log(newEvents);
    setFilteredEvents(newEvents)
    console.log(filteredEvents);
  },[])
  function filterByYear(events) {
     events.filter((evt) => {
       const date = new Date(evt.date)
       const year = date.getFullYear()
       return year == Number(year)
     })
  }
  return (
    <Guest auth={auth}>
      <div className='px-9'>
        <div className="flex justify-between">
          <h1 className='text-[35px]'>Event Ratings</h1>
          <h3 className='text-[16px]'>77101 Ratings and counting</h3>
        </div>

        <div className='flex justify-left my-3 border bg-white'>
          <div>
            <p className={`px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer ${year == 2024 && 'bg-[var(--ocean-green)]  text-gray-100'}`} onClick={() => setYear('2024')}>2024</p>
          </div>
          <div>
            <p className={`px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer ${year == 2023 && 'bg-[var(--ocean-green)]  text-gray-100'}`} onClick={() => setYear('2023')}>2023</p>
          </div>
          <div>
            <p className={`px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer ${year == 2022 && 'bg-[var(--ocean-green)]  text-gray-100'}`} onClick={() => setYear('2022')}>2022</p>
          </div>
          <div>
            <p className={`px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer ${year == 2021 && 'bg-[var(--ocean-green)]  text-gray-100'}`} onClick={() => setYear('2021')}>2021</p>
          </div>
          <div>
            <p className={`px-4 py-2 hover:text-[var(--orange)] hover:underline hover:cursor-pointer ${year == 2020 && 'bg-[var(--ocean-green)]  text-gray-100'}`} onClick={() => setYear('2020')}>2020</p>
          </div>
        </div>
        {
         events.map((rating,idx) => {
            return (
              <div className='mt-6 px-3' key={idx}>
                <div className='flex justify-between'>
                  <div className='bg-white px-4 py-2 rounded-sm'>Feb 28</div>
                  <div className='w-[90%] px-3 py-2'>
                    <Link href="/ratings/show" className='text-blue-600 hover:underline'>Event name</Link>
                  </div>
                  <p className='text-blue-600'>8.1</p>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </Guest>
  )
}

export default Ratings