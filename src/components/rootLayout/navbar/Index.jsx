import React, { useEffect, useRef, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaRegStar, FaUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { LuUser } from 'react-icons/lu';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { NavLink } from "react-router-dom";
const navItem = [{
  id: 1,
  item: "Home",
},
{
  id: 2,
  item: "Contact",
},
{
  id: 3,
  item: "About",
},
{
  id: 4,
  item: "Sign up",
},
]

const Navbar = () => {

  const [account, setAccount] = useState(false);

  const handleAccount = ()=>{
    setAccount(!account)
  }


  return (
    <div className='pt-10 pb-4 border-b-[1px] border-b-text_black'>
        <div className="container">
            <div className='flex items-center justify-between'>
              <div>
                  <h1 className='text-[24px] font-bold text-black cursor-pointer hover:text-black_363738'>EXCLUSIVE</h1>
              </div>
              <div>
                <ul className='flex items-center gap-x-[48px]'>
                  {navItem?.map((nav)=>(
                    <li key={nav.id} className='menuUnderline'>
                      <NavLink
                        to={`/${nav.item}`}
                        className={({ isPending, isActive }) =>
                            isPending ? "text-black text-[16px] font-normal font-poppins" : isActive ? "text-green-700 text-[16px] font-normal font-poppins" : "text-black text-[16px] font-normal font-poppins"
                        }
                      >
                        {nav.item}
                      </NavLink>
                      </li>
                  ))}
                  
                  </ul>
              </div>
              <div className='basis-1/3 flex items-center justify-between relative'>
                <div>
                <input type="text" className='py-2 ps-3 pe-9 bg-white_f5f5f5 text-sm' placeholder='What are you looking for?'/>
                <span className='absolute top-1/2 -translate-y-1/2 right-[53%]'><CiSearch /></span>
                </div>
                <div className='flex items-center gap-x-5'>
                  <span className='text-black text-2xl cursor-pointer'>
                  <CiHeart />
                  </span>
                  <span className='text-black text-xl amount cursor-pointer'>
                  <BsCart3 />
                  </span>
                  <span className='text-white text-base bg-red_db4444 p-2 rounded-full cursor-pointer' onClick={handleAccount}>
                  <FaUser />
                  </span>
                  {account && (
                    <div className='absolute top-[100%] z-30 right-0 bg-[#00000060] w-[280px] py-5 flex flex-col gap-y-5'>
                    <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
                      <span className='text-2xl'>
                      <LuUser/>
                      </span>
                      <h3 className='text-md font-normal font-poppins'>Manage My Account</h3>
                    </div>
                    <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
                    <span className='text-2xl'>
                    <FiShoppingBag />
                    </span>
                      <h3 className='text-md font-normal font-poppins'>My Order</h3>
                    </div>
                    <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
                    <span className='text-2xl'>
                    <RxCrossCircled />
                    </span>
                      <h3 className='text-md font-normal font-poppins'>My Cancellations</h3>
                    </div>
                    <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
                    <span className='text-2xl'>
                    <FaRegStar />
                    </span>
                      <h3 className='text-md font-normal font-poppins'>My Reviews</h3>
                    </div>
                    <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
                    <span className='text-2xl'>
                    <RiLogoutBoxLine />
                    </span>
                      <h3 className='text-md font-normal font-poppins'>Logout</h3>
                    </div>
                  </div>
                  )}
                  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar