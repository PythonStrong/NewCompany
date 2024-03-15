import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-scroll'

// icon 
import { FaXmark, FaBars } from 'react-icons/fa6'

export default function Navbar() {
    const [isMenuOpen, SetIsMenuOpen] = useState(false)
    const [isSticky, setIsStciky] = useState(false)

    const toggle = () => {
        SetIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handelscroll = () => {
            if (window.scrollY > 100) {
                setIsStciky(true)
            }
            else {
                setIsStciky(false)
            }
        }
        window.addEventListener('scroll', handelscroll)

        return () => {
            window.addEventListener('scroll', handelscroll)
        }
    })
    const navItems = [
        { link: "Home", path: 'home' },
        { link: "Service", path: 'service' },
        { link: "About", path: 'about' },
        { link: "Product", path: 'product' },
        { link: "FAQ", path: 'faq' }
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-gray-200 duration-300" : ""}`}>
                <div className='flex items-center justify-between text-base gap-8'>
                    <a href="" className='text-2xl font-semibold'><img src='https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' alt="" className='w-12 inline-block items-center' /><span className='text-[#263238]'>Company</span></a>

                    <ul className='md:flex space-x-12 hidden cursor-pointer'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary  hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralIDGrey'>Sign up</button>
                    </div>

                    {/* mobile menu  */}
                    <div className='md:hidden'>
                        <button className='text-neutralIDGrey focus:outline:none focus:text-gray-500' onClick={toggle}>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* mobile menu dev  */}
            <div className={`space-y-4 px-4 mt-16 py-10 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block py-2 text-[24px]  text-white hover:text-gray-900 duration-500 cursor-pointer first:font-medium'>{link}</Link>)
                }
            </div>
        </header>
    )
}
