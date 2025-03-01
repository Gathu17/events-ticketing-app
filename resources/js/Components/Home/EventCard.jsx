import React from 'react'
import CategoryElem from './CategoryElem'

function EventCard() {
  return (
    <div
      className='m-3 sm:w-[290px] sm:h-[375px] md:w-[375px] md:h-[400px] lg:w-[375px] lg:h-[400px] shadow-sm bg-white'
    >
      <div>
        <img src="/assets/mountain.jpg" alt="" className='h-[200px]'/>
      </div>
      <div className='p-4'>
        <div className="flex ">
          <div className='flex block'>
          	<img src="/assets/location.svg" alt="" className='pr-1'/>
            <p className='text-[14px]'>Mt.Kenya, Nyeri</p>
          </div>
          <div className='flex ml-4'>
          	<img src="/assets/time.svg" alt="" className='pr-1'/> 
						<p className='text-[14px]'>17.03.2024</p>
					</div>
        </div>

				<h2 className='my-4 text-[22px]'>Kilimambogo Circumnavigation</h2>

				<div className='my-4'>
					<CategoryElem category={'Running'}/>
				</div>

				<div className='flex justify-start'>
					<div 
						id="sold-out-banner"
						className="mr-4 bg-red-500 text-white px-2"
					>
						<p>SOLD OUT</p>
					</div>
					<div id="new-date-banner" className='mr-4 bg-green-500 text-white px-2'>
						<p>NEW DATE</p>
					</div>
				</div>
      </div>
    </div>
  )
}

export default EventCard