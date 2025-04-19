import React from 'react'

const Header = () => {
  return (
    <div className='bg-black py-3'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <div></div>
          <div>
            <h2 className='text-white font-poppins text-sm font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
          </div>
          <div>
            <select name="" id="" className='bg-transparent text-white font-poppins text-sm font-normal'>
              <option value="#" className='custom_option'>English</option>
              <option value="#" className='custom_option'>Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header