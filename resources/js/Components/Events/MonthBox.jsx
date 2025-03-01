import React from 'react'

function MonthBox({ month, index }) {
  return (
    <div
      key={month}
      className='p-4 my-3 bg-green-500/30 flex justify-between'
    >
      <div className=''>
        <p>{month}</p>
        <p>({ index } Events)</p>
      </div>

      <p className='text-[30px]'>+</p>
    </div>
  )
}

export default MonthBox