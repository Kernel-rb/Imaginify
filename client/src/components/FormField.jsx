import React from 'react'

function FormField({ label, placeholder, type, name, value, handleChange, isSupriseMe, handleSupriseMe}) {
  return (
    <div>
    <div className='flex items-center gap-2 mb-2'>
      <label 
      htmlFor={name}
      className='block text-sm font-medium tetx-gray-900'
      >
        {label}
      </label>
      {isSupriseMe && (
        <button
        type='button'
        className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
        onClick={handleSupriseMe}
        >
          Surprise Me
        </button>
      )}
    </div>
    <input
    type={type}
    id={name}
    name={name} 
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    required
    className='
    bg-gray-50
    border
    border-gray-300
    text-gray-900
    text-sm
    rounded-lg
    focus:ring-[#4649ff]
    focus:border-[#4649ff]
    outline-none
    block
    w-full
    p-3
    '
    />
    </div>
  )
}

export default FormField