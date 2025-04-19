import React from 'react'
import { CiHeart } from 'react-icons/ci'
import gamepad from '../../assets/products/gamepad.png'
import { IoEyeOutline } from 'react-icons/io5'
import { FaStar } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <div className='w-[95%]'>
        <div className='relative bg-white_f5f5f5 px-3 pt-3 pb-12 flex flex-col items-center cursor-pointer group'>
            <div className='flex items-start justify-between w-full'>
                <span className='inline-block bg-red_db4444 text-text_white px-3 py-2 text-sm font-normal rounded'>-40%</span>
                <span className='flex items-center justify-center w-[30px] h-[30px] rounded-full bg-text_white text-xl hover:bg-red_db4444 hover:text-text_white cursor-pointer mb-1'>
                <CiHeart />
                </span>
            </div>
            <div className='flex justify-between w-full'>
                <div className='w-[172px] h-[152px] flex-1 ps-7'>
                    <img src={gamepad} alt={gamepad} className='w-full h-full object-contain'/>
                </div>
                <span className='flex items-center justify-center w-[30px] h-[30px] rounded-full bg-text_white text-xl hover:bg-red_db4444 hover:text-text_white cursor-pointer'>
                    <IoEyeOutline />
                </span>
            </div>
            <div className='absolute left-0 bottom-0 w-full h-10 bg-black text-text_white flex justify-center items-center opacity-0 group-hover:opacity-100'>
                <h3>Add To Cart</h3>
            </div>
        </div>

        <div>
            <h1 className='font-medium text-lg mt-3 cursor-pointer'>HAVIT HV-G92 Gamepad</h1>
            <div className='flex gap-x-2 cursor-pointer'>
                <span className='text-red_db4444 font-medium text-lg'>$120</span>
                <span className='text-text_black opacity-85 font-medium text-lg line-through'>$160</span>
            </div>
            <div className='flex items-center gap-x-2 cursor-pointer'>
                <div className='flex gap-x-1 text-yellow-500'>
                    {[...new Array(5)].map((_,index)=>(
                        <span>
                            <FaStar />
                        </span>
                    ))}
                </div>
                <h3>{`(${[...new Array(5)]?.length})`}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProductCard