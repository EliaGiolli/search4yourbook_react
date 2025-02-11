import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // this is a fuction that prevents contant re-rendering of the component
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='w-full bg-amber-700 border-b-2 border-b-yellow-300'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link to="/" className='text-white font-bold uppercase border-2 rounded-full border-amber-600 p-2
                        hover:bg-amber-300 hover:text-black hover:p-3'>
                        BOOKSEARCH
                    </Link>

                    {/* Hamburger button */}
                    <button 
                        className='md:hidden'
                        onClick={handleToggle}
                    >
                        <div className='space-y-2'>
                            <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
                            <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
                        </div>
                    </button>

                    {/* Menu Desktop */}
                    <div className='hidden md:flex space-x-4'>
                        <NavLink to="/about" className='text-white border-2 rounded-full border-amber-600 p-2
                            hover:bg-amber-300 hover:text-black hover:p-3'>
                            About
                        </NavLink>
                        <NavLink to="/" className='text-white border-2 rounded-full border-amber-600 p-2
                            hover:bg-amber-300 hover:text-black hover:p-3'>
                            Book Search
                        </NavLink>
                        <NavLink to="/contacts" className='text-white border-2 rounded-full border-amber-600 p-2
                            hover:bg-amber-300 hover:text-black hover:p-3'>
                            Contacts
                        </NavLink>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className={`
                    md:hidden 
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                    overflow-hidden
                `}>
                    <div className='py-2 space-y-2'>
                        <NavLink to="/about" className='block text-white hover:bg-amber-600 px-3 py-2 rounded-md'>
                            About
                        </NavLink>
                        <NavLink to="/" className='block text-white hover:bg-amber-600 px-3 py-2 rounded-md'>
                            Book Search
                        </NavLink>
                        <NavLink to="/contacts" className='block text-white hover:bg-amber-600 px-3 py-2 rounded-md'>
                            Contacts
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar