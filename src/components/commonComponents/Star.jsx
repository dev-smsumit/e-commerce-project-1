import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Star = ({rating = 2.5}) => {
    const stars = Array.from({length:5}, (_,index)=>{
        if(rating >= index+1){
            return <FaStar />
        } else if(rating>=index+0.5){
            return <FaStarHalfAlt/>
        } else {
            return <FaRegStar />
        }
    })
  return (
    <div className='flex items-center gap-x-1'>
        {stars}
    </div>
  )
}

export default Star