// import React, { useEffect, useRef, useState } from 'react';
// import { BsCart3 } from 'react-icons/bs';
// import { CiHeart, CiSearch } from 'react-icons/ci';
// import { FaRegStar, FaUser } from 'react-icons/fa';
// import { FiShoppingBag } from 'react-icons/fi';
// import { LuUser } from 'react-icons/lu';
// import { RiLogoutBoxLine } from 'react-icons/ri';
// import { RxCrossCircled } from 'react-icons/rx';
// import { NavLink } from "react-router-dom";
// const navItem = [{
//   id: 1,
//   item: "Home",
// },
// {
//   id: 2,
//   item: "Contact",
// },
// {
//   id: 3,
//   item: "About",
// },
// {
//   id: 4,
//   item: "Sign up",
// },
// ]

// const Navbar = () => {

//   const [account, setAccount] = useState(false);

//   const handleAccount = ()=>{
//     setAccount(!account)
//   }


//   return (
//     <div className='pt-10 pb-4 border-b-[1px] border-b-text_black'>
//         <div className="container">
//             <div className='flex items-center justify-between'>
//               <div>
//                   <h1 className='text-[24px] font-bold text-black cursor-pointer hover:text-black_363738'>EXCLUSIVE</h1>
//               </div>
//               <div>
//                 <ul className='flex items-center gap-x-[48px]'>
//                   {navItem?.map((nav)=>(
//                     <li key={nav.id} className='menuUnderline'>
//                       <NavLink
//                         to={`/${nav.item}`}
//                         className={({ isPending, isActive }) =>
//                             isPending ? "text-black text-[16px] font-normal font-poppins" : isActive ? "text-green-700 text-[16px] font-normal font-poppins" : "text-black text-[16px] font-normal font-poppins"
//                         }
//                       >
//                         {nav.item}
//                       </NavLink>
//                       </li>
//                   ))}
                  
//                   </ul>
//               </div>
//               <div className='basis-1/3 flex items-center justify-between relative'>
//                 <div>
//                 <input type="text" className='py-2 ps-3 pe-9 bg-white_f5f5f5 text-sm' placeholder='What are you looking for?'/>
//                 <span className='absolute top-1/2 -translate-y-1/2 right-[53%]'><CiSearch /></span>
//                 </div>
//                 <div className='flex items-center gap-x-5'>
//                   <span className='text-black text-2xl cursor-pointer'>
//                   <CiHeart />
//                   </span>
//                   <span className='text-black text-xl amount cursor-pointer'>
//                   <BsCart3 />
//                   </span>
//                   <span className='text-white text-base bg-red_db4444 p-2 rounded-full cursor-pointer' onClick={handleAccount}>
//                   <FaUser />
//                   </span>
//                   {account && (
//                     <div className='absolute top-[100%] z-30 right-0 bg-[#00000060] w-[280px] py-5 flex flex-col gap-y-5'>
//                     <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
//                       <span className='text-2xl'>
//                       <LuUser/>
//                       </span>
//                       <h3 className='text-md font-normal font-poppins'>Manage My Account</h3>
//                     </div>
//                     <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
//                     <span className='text-2xl'>
//                     <FiShoppingBag />
//                     </span>
//                       <h3 className='text-md font-normal font-poppins'>My Order</h3>
//                     </div>
//                     <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
//                     <span className='text-2xl'>
//                     <RxCrossCircled />
//                     </span>
//                       <h3 className='text-md font-normal font-poppins'>My Cancellations</h3>
//                     </div>
//                     <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
//                     <span className='text-2xl'>
//                     <FaRegStar />
//                     </span>
//                       <h3 className='text-md font-normal font-poppins'>My Reviews</h3>
//                     </div>
//                     <div className='flex items-center text-white gap-x-3 cursor-pointer hover:bg-white_f5f5f5 hover:text-black hover:py-2 transition-all pl-5'>
//                     <span className='text-2xl'>
//                     <RiLogoutBoxLine />
//                     </span>
//                       <h3 className='text-md font-normal font-poppins'>Logout</h3>
//                     </div>
//                   </div>
//                   )}
                  
//                 </div>
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaRegStar, FaUser } from 'react-icons/fa';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { LuUser } from 'react-icons/lu';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RxCrossCircled } from 'react-icons/rx';
import { NavLink } from "react-router-dom";

const navItem = [
  { id: 1, item: "Home" },
  { id: 2, item: "Contact" },
  { id: 3, item: "About" },
  { id: 4, item: "Sign up" }
];

const Navbar = () => {
  const [account, setAccount] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };

  return (
    <div className='pt-6 pb-4 border-b border-text_black bg-white z-50 relative'>
      <div className="container mx-auto px-4 relative">
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <h1 className='text-2xl font-bold text-black cursor-pointer hover:text-black_363738'>
            EXCLUSIVE
          </h1>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-x-10'>
            {navItem.map(nav => (
              <li key={nav.id} className='menuUnderline'>
                <NavLink
                  to={`/${nav.item}`}
                  className={({ isPending, isActive }) =>
                    isPending
                      ? "text-black text-base font-normal font-poppins"
                      : isActive
                      ? "text-green-700 text-base font-normal font-poppins"
                      : "text-black text-base font-normal font-poppins"
                  }
                >
                  {nav.item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className='md:hidden'>
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Search & Icons */}
          <div className='hidden md:flex basis-1/3 items-center justify-between relative'>
            <div className='relative w-full max-w-[250px]'>
              <input
                type="text"
                className='py-2 pl-3 pr-9 w-full bg-white_f5f5f5 text-sm rounded'
                placeholder='What are you looking for?'
              />
              <span className='absolute top-1/2 -translate-y-1/2 right-3 text-lg'>
                <CiSearch />
              </span>
            </div>
            <div className='flex items-center gap-x-4'>
              <CiHeart className='text-black text-2xl cursor-pointer' />
              <BsCart3 className='text-black text-xl cursor-pointer' />
              <span
                className='text-white text-base bg-red_db4444 p-2 rounded-full cursor-pointer'
                onClick={handleAccount}
              >
                <FaUser />
              </span>

              {/* Account Dropdown */}
              {account && (
                <div className='absolute top-full right-0 mt-2 bg-[#000000cc] w-72 py-5 flex flex-col gap-y-5 z-50'>
                  {[{ icon: <LuUser />, label: "Manage My Account" },
                    { icon: <FiShoppingBag />, label: "My Order" },
                    { icon: <RxCrossCircled />, label: "My Cancellations" },
                    { icon: <FaRegStar />, label: "My Reviews" },
                    { icon: <RiLogoutBoxLine />, label: "Logout" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-x-3 text-white hover:bg-white_f5f5f5 hover:text-black py-2 transition-all pl-5 cursor-pointer'
                    >
                      <span className='text-2xl'>{item.icon}</span>
                      <h3 className='text-md font-normal font-poppins'>{item.label}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu - Floating */}
        {mobileMenu && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 px-4 py-6'>
            <ul className='flex flex-col gap-y-4'>
              {navItem.map(nav => (
                <li key={nav.id}>
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "text-black text-base font-normal font-poppins"
                        : isActive
                        ? "text-green-700 text-base font-normal font-poppins"
                        : "text-black text-base font-normal font-poppins"
                    }
                    onClick={() => setMobileMenu(false)}
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className='mt-4 flex items-center gap-x-2'>
              <input
                type="text"
                className='py-2 px-3 w-full bg-white_f5f5f5 text-sm rounded'
                placeholder='What are you looking for?'
              />
              <CiSearch className='text-xl text-black' />
            </div>

            {/* Mobile Icons */}
            <div className='mt-4 flex items-center gap-x-5'>
              <CiHeart className='text-black text-2xl cursor-pointer' />
              <BsCart3 className='text-black text-xl cursor-pointer' />
              <span
                className='text-white text-base bg-red_db4444 p-2 rounded-full cursor-pointer'
                onClick={handleAccount}
              >
                <FaUser />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

