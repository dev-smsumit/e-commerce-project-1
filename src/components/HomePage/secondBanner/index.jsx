import React, { useEffect, useState } from 'react'
import musicImg from "../../../assets/banner/musicimg.png"

const SecondBanner = ({timeOffer=1}) => {
      const [time, setTime] = useState(timeOffer*24*60*60*1000 || 0);
  
      useEffect(()=>{
          const worker = new Worker(new URL('../../../countDownWorker.js', import.meta.url))
  
          worker.postMessage(time);
          worker.onmessage = (e) =>{
              setTime(e.data);     
          }
      },[])
  
  // formate the countdown date
  const formateDate = (miliSeconds)=>{
      let total_second = parseInt(Math.floor(miliSeconds / 1000));
      let total_minutes = parseInt(Math.floor(total_second / 60));
      let total_hours = parseInt(Math.floor(total_minutes / 60));
      let days = parseInt(Math.floor(total_hours / 24));
      let seconds = parseInt(Math.floor(total_second % 60));
      let minutes = parseInt(Math.floor(total_minutes % 60));
      let hours = parseInt(Math.floor(total_hours % 60));
      return {days, hours, minutes, seconds};
  }
      
      const {days, hours, minutes, seconds} = formateDate(time);

  return (
    <div className='mt-[50px] mb-[50px]'>
        <div className="container overflow-hidden">
            <div className='flex px-10 py-20 bg-black'>
              <div className='w-1/2 flex flex-col items-start justify-center gap-y-8'>
                <h4 className='font-poppins text-base text-button_00ff66 font-semibold'>Categories</h4>
                <h2 className='font-inter text-5xl text-text_white leading-[60px] font-semibold'>Enhance Your Music Experience</h2>
                <div className="flex items-center gap-x-5">
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>{days}</p>
                        <p className='text-black font-normal text-xs'>Days</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>{hours}</p>
                        <p className='text-black font-normal text-xs'>Hours</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>{minutes}</p>
                        <p className='text-black font-normal text-xs'>Minutes</p>
                    </div>
                    <div className='bg-text_white w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <p className='text-black font-semibold text-base'>{seconds}</p>
                        <p className='text-black font-normal text-xs'>Seconds</p>
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