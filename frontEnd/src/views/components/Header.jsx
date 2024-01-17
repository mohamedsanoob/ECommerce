import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);


    const handleShowProfile = () => {
        setShowProfile(prev => !prev)
    }

    return (
        <div>
            <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
                <div className='flex items-center h-full justify-between'>
                    <Link to={'/'}>
                        <div className='h-4'>
                            <HiOutlineUserCircle />
                        </div>
                    </Link>

                    <div className='flex items-center gap-4 md:gap-7'>
                        <nav className='flex gap-4 text-base md:gap-8 md:text-lg'>
                            <Link to={''}>Home</Link>
                            <Link to={'menu'}>Menu</Link>
                            <Link to={'about'}>About</Link>
                            <Link to={'contact'}>Contact</Link>
                        </nav>
                        <div className='text-2xl text-slate-600 relative'>
                            <FaShoppingCart />
                            <div className='absolute -right-1 -top-1 text-white bg-red-400 text-sm rounded-full h-4 w-4 text-center'>0</div>
                        </div>
                        <div className='text-slate-600 cursor-pointer' onClick={handleShowProfile}>
                            <div className='text-3xl'>
                                <HiOutlineUserCircle />
                            </div>
                            {showProfile && (
                                <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                                    <Link to={'add-product'} className='whitespace-nowrap cursor-pointer'>Add Product</Link>
                                    <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

// https://www.youtube.com/watch?v=JFCQLhSMjtM

export default Header