import { Carousel } from 'flowbite-react'
import React from 'react'
import { ath } from '../assets'

export default function Home() {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-4xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    {/* 1 */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src="https://www.chinaticket.online/assets/Illustration-a5f0019d.png" alt="" />
                        </div>
                        <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralIDGrey md:w-3/4 leading-snug'>Lorem ipsum dolor sit amet <span className='text-brandPrimary leading-snug'>consect adipisicing.</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iste.</p>
                        <button className='primary'>Register</button>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src="https://www.chinaticket.online/assets/Illustration-a5f0019d.png" alt="" />
                        </div>
                        <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralIDGrey md:w-3/4 leading-snug'>Lorem ipsum dolor sit amet <span className='text-brandPrimary leading-snug'>consect adipisicing.</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iste.</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralIDGrey transition-all duration-300 hover:translate-y-4'>Register</button>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src="https://www.chinaticket.online/assets/Illustration-a5f0019d.png" alt="" />
                        </div>
                        <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neutralIDGrey md:w-3/4 leading-snug'>Lorem ipsum dolor sit amet <span className='text-brandPrimary leading-snug'>consect adipisicing.</span></h1>
                        <p className='text-neutralGrey text-base mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iste.</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralIDGrey transition-all duration-300 hover:translate-y-4'>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}
