import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Blog() {
    const blog = [
        { id: 1, title: "Creating Streamlind SafeGuard Procress with onRen ", image: "https://info.brightpattern.com/hubfs/agentempowerment.jpg" },
        { id: 2, title: "What are you  Streamlind SafeGuard Procress with onRen ", image: "https://www.couponmoto.com/top-10/wp-content/uploads/2023/09/Best-Laptop-For-Digital-Marketing.png" },
        { id: 3, title: "Revamping the Membershop MOdel with Procress with onRen ", image: "https://businessblog.trivago.com/wp-content/uploads/2017/11/laptop-2557572_1920.jpg" }
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralIDGrey font-semibold mb-4 md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p className='md:3/4 text-sm text-neutralGrey mb-8 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dicta vero, ducimus magnam facere, modi ratione rerum ipsum id necessitatibus eos molestias? Ab tenetur provident sapiente voluptates nulla dicta laudantium.</p>
            </div>
            {/* all blogs  */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blog.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300 bg-cover w-[400px] h-[280px] rounded-lg' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all Customers</a>
                                <HiArrowNarrowRight className='inline-block ml-2' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
