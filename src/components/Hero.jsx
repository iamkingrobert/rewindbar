import React from "react";
import heroImg from "/src/images/heroImg.png";
// import arrow from "/src/images/icon.png";

function Hero() {
  return (
    <div className="relative w-full ">
      <div className="bg-[#E3E7EA] h-[444px] lg:block hidden "></div>
      <div className="lg:absolute top-20 w-full lg:flex">
        <div className="lg:w-[612px] w-full lg:h-[520px] bg-gray-700">
          <img
            src={heroImg}
            alt="heroImg"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:w-[672px] md:h-[520px] bg-white lg:p-24 p-3 text-center lg:text-start">
          <p className="lg:text-[40px] text-[36px]">
            Lift, Sculpt & Enhance Your Natural Beauty
          </p>
          <p className="text-[24px] text-[#708894] mt-3">
            Whether you’re looking to restore lost volume with dermal fillers or
            enhance your beauty with lip fillers, we've got it all covered.
          </p>
          {/* <button className="bg-[#2C343B] inline-flex items-center justify-center  w-[264px] h-[56px] text-white  my-10">
            Book now <img src={arrow} className="ms-3" alt="" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
