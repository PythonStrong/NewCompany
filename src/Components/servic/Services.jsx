import React from 'react'
import './ser.css'

// icons 
import { SiNasa, SiTesla } from "react-icons/si";
import { FaGoogle, FaApple, FaInstagram, FaFacebook, FaAmazon } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';



export default function Services() {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quidem.</p>

        {/* company logo  */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <Marquee direction='left' autoFill pauseOnClick>
            <SiNasa size={60} style={{ width: '180px' }} />
            <FaGoogle size={60} style={{ width: '180px' }} />
            <SiTesla size={60} style={{ width: '180px' }} />
            <GrAndroid size={60} style={{ width: '180px' }} />
            <FaApple size={60} style={{ width: '180px' }} />
            <IoCodeSlash size={60} style={{ width: '180px' }} />
            <FaInstagram size={60} style={{ width: '180px' }} />
            <FaFacebook size={60} style={{ width: '180px' }} />
            <FaAmazon size={60} style={{ width: '180px' }} />
          </Marquee>
        </div>
      </div>
      {/* services card  */}
      <div className='mt-40 md:w1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralIDGrey font-semibold mb-3'>Manage your antire community in  single  system</h2>
        <p className='text-neutralGrey'>Lorem ipsum dolor sit amet.</p>
        <div className='flex items-center justify-center mt-20 gap-10  cardsd'>
          <div className='flip'>
            <div class="front" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/business-people-meeting_53876-21725.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais)' }}>
              <h1 class="text-shadow text-[20px] font-bold">Memberiship Organiztaion</h1>
            </div>
            <div class="back">
              <h2>Memberiship Organiztaion</h2>
              <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
            </div>
          </div>

          <div class="flip">
            <div class="front" style={{ backgroundImage: 'url(https://insideclimatenews.org/wp-content/uploads/2023/11/GettyImages-1224912055-1-scaled.jpg)' }}>
              <h1 class="text-shadow text-[20px] font-bold">National Associations</h1>
            </div>
            <div class="back">
              <h2>National Associations</h2>
              <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
            </div>
          </div>

          <div class="flip">
            <div class="front" style={{ backgroundImage: ' url(https://cdn.sanity.io/images/tlr8oxjg/production/1706e25eac3c20ab4bf5d2062264a288af29f496-1324x742.png?w=3840&q=80&fit=clip&auto=format)' }}>
              <h1 class="text-shadow text-[20px] font-bold">Clubs And groups</h1>
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
