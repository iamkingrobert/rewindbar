import React from "react";
import Model from "/src/images/Model.jpg";
export default function InfoSection() {
  return (
    <>
      <div className="relative mt-[220px]">
        <div className="lg:absolute top-[30px] w-full lg:flex space-x-[100px] justify-center">
          <div className="w-[456px] h-[96px] -ml-[200px]">
            <h3 className="text-[36px] font-normal leading-[48px] text-[#2C343B]">
              Welcome back a vibrant, youthful look effortlessly
            </h3>
          </div>

          <div className="self-start items-center lg:w-[611px] lg:h-[323px]">
            <p className="text-[20px] leading-[32px] text-[#2C343B]">
              As we go through life, our face may start to lose a bit of its pep
              and plumpness and leave us looking tired and sunken. This happens
              because our bodies slow down on producing collagen and elastin,
              the stuff that keeps our skin looking full and lively.
            </p>
          </div>
        </div>

        <div className="lg:absolute top-[180px] w-full lg:flex space-x-[100px]">
          <div className="bg-[#F79A6E] lg:w-[611px] lg:h-[323px]">
            <p className="text-[20px] font-light leading-[32px] p-[80px] text-white">
              With the help of dermal fillers, you have the power to rejuvenate
              your appearance. Say goodbye to drawn features and welcome back
              the vibrant, youthful look of plump cheeks, smooth skin, and ooh
              la la lips!
            </p>
          </div>

          <div className="w-[552px] h-[120px] -left-[200px] my-3">
            <p className="leading-[40px] text-[#708894] lg:text-[24px]">
              So get ready to pucker up and look your very best, so you can
              reclaim your confidence and let your inner radiance shine true.
            </p>
          </div>
        </div>
      </div>
      <div className="top-[500px] relative">
        <img
          src={Model}
          alt="Model"
          className="lg:w-full lg:h-[550px] object-cover"
        />
      </div>

      <div className="relative mt-[420px]">
        <div className="lg:absolute top-[180px] w-full lg:flex space-x-[100px] justify-center">
          <div className="lg:w-[411px] lg:h-[323px]">
            <p className="text-[36px] font-light leading-[48px] text-[#2c343b]">
              Sculpt, tighten, and redefine your beauty with dermal fillers
            </p>
          </div>

          <div className="w-[552px] h-[120px] my-3">
            <p className="leading-[32px] text-[#2c343b] lg:text-[20px]">
              Are you exhausted from spending endless hours perfecting your
              makeup, trying to conceal eye bags or achieve plumper lips? Do you
              wish there was an easier way to wipe away your insecurities?
            </p>

            <p className="leading-[32px] text-[#2c343b] lg:text-[20px] mt-3">
              With the lasting effect of dermal fillers, you can confidently
              face the world, even without makeup. So say goodbye to the hassle
              of makeup contouring tricks that require you to dish out lots of
              money on multiple shades of foundations, concealers, applicators,
              and so on.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
