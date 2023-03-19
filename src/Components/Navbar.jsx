import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [activeNav, setActiveNav] = useState(false)

    const navClick = () => {
        setNav(prevState => !prevState)
    }

    const scrollfunc = () => {
        if (window.scrollY > 0) {
            setActiveNav(true)
        } else {
            setActiveNav(false)
        }
    }

    window.addEventListener('scroll', scrollfunc)

    return (
        <nav className={`bg-white flex items-center justify-between md:block fixed top-0 left-0 right-0 px-8 py-8 md:px-10 lg:px-20 z-10 ${activeNav ? 'shadow shadow-gray-400' : ''}`}>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-black'>ESTATE</h1>
                <ul className='hidden md:flex items-center gap-8'>
                    <li className='md:text-lg lg:text-xl'><Link to='/'>Home</Link></li>
                    <li className='md:text-lg lg:text-xl'>Services</li>
                    <li className='md:text-lg lg:text-xl'>Home Variations</li>
                </ul>
                <button className='hidden md:block bg-blue-400 p-3 text-base rounded-md md:text-lg lg:text-xl button'>Login/Sign up</button>
            </div>
            <FiMenu className='md:hidden cursor-pointer text-3xl' onClick={navClick} />

            {nav && (
                <div className='flex flex-col gap-3 items-start justify-start absolute left-0 top-full bg-blue-400 backdrop-blur-lg bg-opacity-25 w-60 h-96 px-4 py-6 swing-in-top-fwd'>
                    <ul className='block'>
                        <li className='pb-6 text-sm'>Home</li>
                        <li className='pb-6 text-sm'>Services</li>
                        <li className='pb-6 text-sm'>Home Variations</li>
                    </ul>
                    <button className='bg-blue-400 p-3 text-sm rounded-md cursor-pointer'>Login/Sign up</button>
                </div>
            )}
        </nav>
    )
}

export default Navbar