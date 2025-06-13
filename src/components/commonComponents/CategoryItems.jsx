import React from 'react'

const CategoryItems = ({ itemData }) => {

  return (
    // <div className='w-[95%] h-32 border-[1px] border-text_black flex justify-center items-center cursor-pointer hover:bg-red_db4444 group'>
    //   <div className='flex flex-col items-center gap-y-3'>
    //   <span className='text-5xl group-hover:text-text_white'>{itemData.img}</span>
    //   <h1 className='group-hover:text-text_white'>{itemData.Name}</h1>
    //   </div>
    // </div>


    <div className='w-full sm:w-[95%] h-32 border border-text_black flex justify-center items-center cursor-pointer hover:bg-red_db4444 transition-colors group'>
      <div className='flex flex-col items-center gap-y-2 text-center px-2'>
        <span className='text-3xl sm:text-4xl md:text-5xl group-hover:text-text_white'>
          {itemData.img}
        </span>
        <h1 className='text-sm sm:text-base font-medium group-hover:text-text_white'>
          {itemData.Name}
        </h1>
      </div>
    </div>

  )
}

export default CategoryItems