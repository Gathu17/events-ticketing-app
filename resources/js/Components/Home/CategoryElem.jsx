import React from 'react'

function CategoryElem({ category }) {
  return (
    <div className='border border-[var(--ocean-green)] rounded-xl px-4 text-[var(--ocean-green)] w-fit hover:bg-[var(--ocean-green)] hover:text-white'>
      <p>{ category }</p>
    </div>
  )
}

export default CategoryElem