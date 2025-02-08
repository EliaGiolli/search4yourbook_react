import React from 'react'

function searchBookDiv() {
  return (
    <div className='bg-orange-600 h-auto w-1/2 mx-auto p-4 flex flex-col justify-evenly items text-center mt-5
      rounded-lg shadow-md shadow-slate-800'>
      <h1 className='md:text-xl lg:text-2xl md:text-wrap uppercase font-bold text-white'>Search for your fantasy book!</h1>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-center text-center sm:p-3 md:p-2 lg:p-2 mt-3'>
        <input type="text" className='flex-1 sm:p-0 md:p-0 lg:p-1 border-2 border-double border-black ' />
        <button className='text-black md:p-2 lg:p-1 rounded-md bg-yellow-300 mt-2 lg:mt-0 lg:ml-1'>Click me!</button>
      </div>
    </div>
  )
}

export default searchBookDiv