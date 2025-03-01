import React from 'react'

function Select({ id = '', name = '', value = '', className, onChange, required, placeholder, children }) {
  return (
    <select
      name={name}
      id={id}
      value={value}
      className={
        `border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ${className}`
      }
      onChange={onChange}
      required={required}
    >
      <option value="">{placeholder}</option>
      {children}
    </select>
  )
}

export default Select