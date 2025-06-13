import React from 'react'

const Heading = ({ title, description }) => {
  return (
    // <div className='flex flex-col items-start gap-y-6'>
    //     <div className='flex items-center gap-x-4'>
    //         <span className='w-[20px] h-[40px] bg-red_db4444 rounded block'></span>
    //         <span className='font-semibold text-red_db4444 font-poppins'> {title ? title : "Today's"}</span>
    //     </div>
    //     <div>
    //       <h1 className='text-[30px] font-semibold font-inter text-black'>{description ? description : "Flash sales"}</h1>
    //     </div>
    // </div>

    <div className='flex flex-col items-start gap-y-4 sm:gap-y-6'>
      {/* Title indicator with red bar and text */}
      <div className='flex items-center gap-x-3 sm:gap-x-4'>
        <span className='w-[16px] h-[32px] sm:w-[20px] sm:h-[40px] bg-red_db4444 rounded block'></span>
        <span className='font-medium sm:font-semibold text-red_db4444 font-poppins text-sm sm:text-base'>
          {title ? title : "Today's"}
        </span>
      </div>

      {/* Section heading */}
      <div>
        <h1 className='text-xl sm:text-3xl font-semibold font-inter text-black leading-tight'>
          {description ? description : "Flash sales"}
        </h1>
      </div>
    </div>

  )
}

export default Heading