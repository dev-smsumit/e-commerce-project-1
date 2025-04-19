import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Timer = ({timeOffer}) => {
    const [time, setTime] = useState(timeOffer*24*60*60*1000 || 0);

    useEffect(()=>{
        const worker = new Worker(new URL('../../countDownWorker.js', import.meta.url))

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
    <div className='flex items-center gap-x-3'>
        <div className='flex flex-col items-start'>
            <span className='font-medium text-[12px] text-black font-poppins'>Days</span>
            <div className='flex items-center gap-x-3'>
            <h1 className='font-bold text-black text-[32px] font-poppins'>
                {days < 10 ? `0${days}` : days}
                
                </h1>
            <span className='text-[30px] text-red_db4444'><BsThreeDotsVertical /></span>
            </div>
        </div>
        <div className='flex flex-col items-start'>
            <span className='font-medium text-[12px] text-black font-poppins'>Hours</span>
            <div className='flex items-center gap-x-3'>
            <h1 className='font-bold text-black text-[32px] font-poppins'>
                {hours}
                
                </h1>
            <span className='text-[30px] text-red_db4444'><BsThreeDotsVertical /></span>
            </div>
        </div>
        <div className='flex flex-col items-start'>
            <span className='font-medium text-[12px] text-black font-poppins'>Minutes</span>
            <div className='flex items-center gap-x-3'>
            <h1 className='font-bold text-black text-[32px] font-poppins'>
                {minutes}
                
                </h1>
            <span className='text-[30px] text-red_db4444'><BsThreeDotsVertical /></span>
            </div>
        </div>
        <div className='flex flex-col items-start'>
            <span className='font-medium text-[12px] text-black font-poppins'>Seconds</span>
            <div className='flex items-center gap-x-3'>
            <h1 className='font-bold text-black text-[32px] font-poppins'>
                {seconds}
                
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Timer