import React from 'react'
import facemark from '../images/facemark.png'
import checkicon from '../images/checkicon.png'
import structure from '../images/structure.png'

function InforSectionFour() {
  return (
    <div className='bg-[#E3E7EA] '>
        <div className='text-center lg:p-20 p-5 container mx-auto'>
            <p className='lg:text-[24px] text-[20px]'>Check out our full services price list and discover how easy it is to restore a <br /> youthful glow without blowing your budget.</p>
            <button className='bg-[#2C343B] p-4 lg:w-[264px] text-white my-4'>See our full price list</button>
        </div>
        <div className='w-full bg-red-400'>
            <img src={facemark} alt="" className='object-cover w-full'/>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 lg:p-20 container mx-auto'>
            <div className='text-center lg:text-start p-5 lg:p-0'>
                <p className='lg:text-[36px] text-[24px]'>How do dermal fillers  work?</p>
                <button className='bg-[#2C343B] p-4 lg:w-[264px] text-white lg:my-10 my-5'>See our full price list</button>
            </div>
            <div className='p-5'>
                <p>Dermal fillers are made from hyaluronic acid, a natural sugar that our body produces, dermal fillers can help bring back the bounce to how you look and feel. They're like a little boost of hydration and volume where you need it most, so you can perk up those facial areas and get that youthful fullness back in action.</p>

                <div className='my-5'>
                    <p className='font-bold'>Dermal fillers are very effective to:</p>
                    <ul>
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" /> Add volume to sagging skin or sunken features</li>
                        
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" /> Smooth out wrinkles and creases</li>
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" /> Even out skin texture by filling in lines</li>
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" /> Reshape and sculpt areas such the chin or jawline</li>
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" />Create symmetry and subtle enhancements that accentuate beautye</li>
                        <li className='flex text-[16px] items-center gap-x-5 pb-3 my-4 lg:w-[410px] border-b border-gray-300'><img src={checkicon} alt="" />Add volume and shape to lips to give it that extra oomph</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className='grid lg:grid-cols-2 lg:p-20 container mx-auto'>
            <div>
                <p className='lg:text-[36px] lg:w-[456px] text-[24px] text-center lg:text-start'>Dermal fillers are safe and effective to use on various facial areas</p> 
            </div>
            <div>
                <div className='my-5'>
                    <img src={structure} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InforSectionFour