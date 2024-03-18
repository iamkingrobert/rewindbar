import React from 'react'
import heroImg from '../images/heroImg.png'

function Hero() {
  return (
    <div className="relative w-full">
        <div className="bg-[#E3E7EA] h-[444px]"></div>
        <div className="absolute top-20 w-full flex flex-wrap">

          <div className="w-[612px] h-[520px] bg-gray-200">
            <img src={heroImg} alt="heroImg" className="objectFit-cover"/>
          </div>

          <div className="w-[672px] h-[520px] bg-white p-24">
            <p className='text-[40px]'>Lift, Sculpt & Enhance Your Natural Beauty</p>
            <p className='text-[24px] text-[#708894] mt-3'>Whether you’re looking to restore lost volume with dermal fillers or enhance your beauty with lip fillers, we've got it all covered.</p>
            <button className="bg-[#2C343B] w-[264px] h-[56px] text-white my-10">Book now</button>
          </div>
        </div>

      </div>
  )
}

export default Hero