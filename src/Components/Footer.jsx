import React from 'react'
import { ath, logo } from '../assets'
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='px-4 lg:px-14 max-w-screen-4xl mx-auto bg-[#080829] text-white py-16 flex ic justify-between'>
            <div className='flex items-center flex-col gap-10 '>
                <div className='flex items-center gap-2'>
                <img src={logo} width={100} alt="" />
                <h3>NexCent</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.</p>
             <div className='flex items-center gap-4'>
             <FaGoogle size={30} />
                <FaApple size={30} />
                <FaInstagram size={30} />
                <FaFacebook size={30} />
             </div>
            </div>
            <div className='flex items-center justify-center gap-24 '>
                <div className='flex flex-col hide'>
                    <h3>Company</h3>
                    <h5>About us</h5>
                    <h5>Blog</h5>
                    <h5>Contact us</h5>
                    <h5>Pricing</h5>
                    <h5>Testing</h5>
                </div>
                <div className='flex flex-col jc hide'>
                    <h3>Support</h3>
                    <h5>About us</h5>
                    <h5>Blog</h5>
                    <h5>Contact us</h5>
                    <h5>Pricing</h5>
                    <h5>Testing</h5>
                </div>
                <div>
                    <h2>Stay up to data</h2>
                    <input type="text" className='rounded-[10px] text-black' placeholder='You email address'/>
                </div>
            </div>
        </div>
    )
}
