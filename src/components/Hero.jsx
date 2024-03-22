import React from "react";
import heroImage from "/src/images/heroImg.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative w-full lg:h-[600px]">
      <div className="bg-[#E3E7EA] h-[444px] lg:block hidden "></div>
      <div className="lg:absolute top-20 w-full lg:flex">
        <div className="lg:w-[612px] w-full lg:h-[520px] bg-gray-700">
          <img
            src={heroImage}
            alt="Facial Treatment Image"
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
          <button className="bg-[#2C343B] inline-flex items-center justify-center w-[264px] h-[56px] text-white my-10 space-x-2">
            <p className="text-18px self-center">Book now</p>{" "}
            <FaLongArrowAltRight className="self-center pt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
