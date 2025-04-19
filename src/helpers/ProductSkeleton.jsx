import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className='w-[95%] animate-pulse'>
      <div className='relative bg-white_f5f5f5 px-3 pt-3 pb-12 flex flex-col items-center'>
        {/* Top badge and heart */}
        <div className='flex items-start justify-between w-full'>
          <div className='bg-gray-300 rounded w-14 h-8'></div>
          <div className='w-[30px] h-[30px] rounded-full bg-gray-300'></div>
        </div>

        {/* Image & eye icon */}
        <div className='flex justify-between w-full mt-2'>
          <div className='w-[172px] h-[152px] bg-gray-300 rounded-md ms-7'></div>
          <div className='w-[30px] h-[30px] rounded-full bg-gray-300'></div>
        </div>

        {/* Add to cart */}
        <div className='absolute left-0 bottom-0 w-full h-10 bg-gray-300'></div>
      </div>

      {/* Title */}
      <div className='h-5 bg-gray-300 mt-3 rounded w-3/4'></div>

      {/* Price */}
      <div className='flex gap-x-3 mt-2'>
        <div className='h-5 bg-gray-300 w-16 rounded'></div>
        <div className='h-5 bg-gray-200 w-12 rounded'></div>
      </div>

      {/* Stars */}
      <div className='flex items-center gap-x-3 mt-2'>
        <div className='flex gap-x-1'>
          {[...new Array(5)].map((_, i) => (
            <div key={i} className='w-4 h-4 bg-gray-300 rounded'></div>
          ))}
        </div>
        <div className='h-4 bg-gray-300 w-8 rounded'></div>
      </div>
    </div>
  )
}

export default ProductSkeleton