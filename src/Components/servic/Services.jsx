import React from 'react'
import './ser.css'

// icons 
import { SiNasa, SiTesla } from "react-icons/si";
import { FaGoogle, FaApple, FaInstagram, FaFacebook, FaAmazon } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";



export default function Services() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quidem.</p>

        {/* company logo  */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <SiNasa size={60} />
          <FaGoogle size={60} />
          <SiTesla size={60} />
          <GrAndroid size={60} />
          <FaApple size={60} />
          <IoCodeSlash size={60} />
          <FaInstagram size={60} />
          <FaFacebook size={60} />
          <FaAmazon size={60} />
        </div>
      </div>
      {/* services card  */}
      <div className='mt-40 md:w1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-3'>Manage your antire community in  single  system</h2>
        <p className='text-neutralGrey'>Lorem ipsum dolor sit amet.</p>
        <div className='flex items-center justify-center mt-20 gap-10  cardsd'>
          <div className='flip'>
            <div class="front" style={{backgroundImage:'url(https://img.freepik.com/premium-photo/business-people-meeting_53876-21725.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais)'}}>
              <h1 class="text-shadow">Memberiship Organiztaion</h1>
            </div>
            <div class="back">
              <h2>Memberiship Organiztaion</h2>
              <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
            </div>
          </div>
          <div class="flip">
            <div class="front" style={{backgroundImage:'url(https://insideclimatenews.org/wp-content/uploads/2023/11/GettyImages-1224912055-1-scaled.jpg)'}}>
              <h1 class="text-shadow">National Associations</h1>
            </div>
            <div class="back">
              <h2>National Associations</h2>
              <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
            </div>
          </div>
          <div class="flip">
            <div class="front" style={{backgroundImage:' url(https://storage.googleapis.com/joblist-content/hero-images/49-Careers-in-Marketing-How-To-Make-A-Career-Change-in-2022.png)'}}>
              <h1 class="text-shadow">Clubs And groups</h1>
            </div>
            <div class="back">
              <h2>Clubs And group</h2>
              <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
