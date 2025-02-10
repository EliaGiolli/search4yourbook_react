import React from 'react'


function Navbar() {
    

  return (
    <div className='w-full max-h-16 bg-amber-700 border-b-2 border-b-yellow-300 flex justify-around items-center p-4'>
        <p className='text-white border-2 rounded-full border-amber-600 p-2
            hover:bg-amber-300 hover:text-black hover:p-3'>Home</p>
        <div className='h-5 flex justify-center items-center text-center gap-4 p-4'>
            <a href="#" className='text-white border-2 rounded-full border-amber-600 p-2
                 hover:bg-amber-300 hover:text-black hover:p-3'>About</a>
            <a href="#" className='text-white border-2 rounded-full border-amber-600 p-2'>Book Search</a>
            <a href="#" className='text-white border-2 rounded-full border-amber-600 p-2
                hover:bg-amber-300 hover:text-black hover:p-3'>Contacts</a>
        </div>
    </div>
  )
}

export default Navbar