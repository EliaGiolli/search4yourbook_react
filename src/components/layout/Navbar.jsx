import React from 'react'
import { Link, NavLink } from 'react-router'


function Navbar() {
    

  return (
    <div className='w-full max-h-16 bg-amber-700 border-b-2 border-b-yellow-300 flex justify-around items-center p-4'>
        <Link to="/"className='text-white font-bold uppercase border-2 rounded-full border-amber-600 p-2
            hover:bg-amber-300 hover:text-black hover:p-3'>BOOKSEARCH</Link>
        <div className='h-5 flex justify-center items-center text-center gap-4 p-4'>
            <NavLink to="/about" className='text-white border-2 rounded-full border-amber-600 p-2
                 hover:bg-amber-300 hover:text-black hover:p-3'>About</NavLink>
            <NavLink to="/" className='text-white border-2 rounded-full border-amber-600 p-2'>Book Search</NavLink>
            <NavLink to="/contacts" className='text-white border-2 rounded-full border-amber-600 p-2
                hover:bg-amber-300 hover:text-black hover:p-3'>Contacts</NavLink>
        </div>
    </div>
  )
}

export default Navbar