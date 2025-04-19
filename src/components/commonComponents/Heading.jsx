import React from 'react'

const Heading = ({title, description}) => {
  return (
    <div className='flex flex-col items-start gap-y-6'>
        <div className='flex items-center gap-x-4'>
            <span className='w-[20px] h-[40px] bg-red_db4444 rounded block'></span>
            <span className='font-semibold text-red_db4444 font-poppins'> {title ? title : "Today's"}</span>
        </div>
        <div>
          <h1 className='text-[30px] font-semibold text-black'>{description ? description : "Flash sales"}</h1>
        </div>
    </div>
  )
}

export default Heading