import React from 'react'
import { ath, tes } from '../assets'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { FaGoogle, FaApple, FaInstagram, FaFacebook, FaAmazon } from "react-icons/fa";


export default function Products() {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:ml-28  mx-auto flex flex-col md:flex-row justify-between items-center gap-20'>
                    <div>
                        <img src="https://www.qqtube.com/themes/xtreme/img/site/service-home/spotify-01.png" width={2000} alt="" />
                    </div>
                    <div className='md:2-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-4 md:-4/5'>Lorem ipsum dolor sit  amet consecteturelit.</h2>
                        <p className='md: text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asperiores reprehenderit deleniti fugiat ipsa cumque minima nihil rerum necessitatibus tempore! Fuga porro aliquid vitae, ratione repellat voluptatum laboriosam tenetur voluptatibus, eum consequuntur nihil dicta, accusantium maxime quas quo provident possimus est impedit.</p>
                        <button className='primary'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 max-w-screen-4xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={tes} width={400} alt="" />
                    </div>
                    {/* stats  */}
                    <div className='md:w-2/3 mx-auto'>
                        <div className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod illo iusto odit nulla, doloremque eligendi voluptas possimus harum vitae. Similique minima ipsum nulla. Et impedit quia facilis dignissimos odit nobis labore, aspernatur debitis obcaecati maxime sed voluptas officia error. Magni ipsa, similique cumque quis reprehenderit expedita deleniti tempora voluptates?</div>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Hydra Coder</h5>
                        <p className='text-base text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <FaGoogle size={40}/>
                                <FaApple size={40}/>
                                <FaInstagram size={40}/>
                                <FaFacebook size={40}/>
                                <FaAmazon size={40}/>
                                <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all Customers</a>
                                    <HiArrowNarrowRight className='inline-block ml-2'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
