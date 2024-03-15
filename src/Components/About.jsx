import React from 'react'
import { ath } from '../assets'
import { GoPeople } from "react-icons/go";
import { FaHandPointer } from "react-icons/fa";
import { RiShakeHandsLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";

export default function About() {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:ml-28  mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src="https://mertcomert.com/images/Frame.svg" width={2000} alt="" />
                    </div>
                    <div className='md:2-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-4 md:-4/5'>Lorem ipsum dolor sit  amet consecteturelit.</h2>
                        <p className='md: text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asperiores reprehenderit deleniti fugiat ipsa cumque minima nihil rerum necessitatibus tempore! Fuga porro aliquid vitae, ratione repellat voluptatum laboriosam tenetur voluptatibus, eum consequuntur nihil dicta, accusantium maxime quas quo provident possimus est impedit.</p>
                        <button className='primary'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 max-w-screen-4xl mx-auto bg-neutralSilver py-32'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-4 md:-2/3'>Lorem ipsum dolor sit  <br /> <span className='text-brandPrimary'> amet consectetur </span></h2>
                        <p className='md: text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </div>
                    {/* stats  */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12' >
                        {/* 1 */}
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <GoPeople size={40} />
                                <div>
                                    <h4 className='text-2xl text-neutralIDGrey font-semibold'>2,245.341</h4>
                                    <p>Memebrs</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <FaHandPointer size={40} />
                                <div>
                                    <h4 className='text-2xl text-neutralIDGrey font-semibold'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <RiShakeHandsLine size={40} />
                                <div>
                                    <h4 className='text-2xl text-neutralIDGrey font-semibold'>828,867</h4>
                                    <p>Event booking</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <CiCreditCard1 size={40} />
                                <div>
                                    <h4 className='text-2xl text-neutralIDGrey font-semibold'>1,926,436</h4>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
