import React from 'react'
import musicImg from "../../../assets/banner/musicimg.png"

const SecondBanner = () => {
  return (
    <div className='mt-[50px] mb-[50px]'>
        <div className="container overflow-hidden">
            <div className='flex px-10 py-20 bg-black'>
              <div className='w-1/2 flex flex-col items-start justify-center gap-y-8'>
                <h4 className='font-poppins text-base text-button_00ff66 font-semibold'>Categories</h4>
                <h2 className='font-inter text-5xl text-text_white leading-[60px] font-semibold'>Enhance Your Music Experience</h2>
                <div className="flex items-center gap-x-5">
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>23</p>
                        <p className='text-black font-normal text-xs'>Hours</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>23</p>
                        <p className='text-black font-normal text-xs'>Hours</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>23</p>
                        <p className='text-black font-normal text-xs'>Hours</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>23</p>
                        <p className='text-black font-normal text-xs'>Hours</p>
                    </div>
                </div>
                <button className='bg-button_00ff66 px-10 py-2 text-base font-poppins rounded-md hover:opacity-75 text-text_white font-medium'>Buy Now</button>
              </div>
              <div className='w-1/2 flex items-center imgShadow'>
              <img src={musicImg} alt={musicImg} /></div>
            </div>
        </div>
    </div>
  )
}

export default SecondBanner