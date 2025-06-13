// import React from 'react'

// const Header = () => {
//   return (
//     <div className='bg-black py-3'>
//       <div className="container">
//         <div className='flex justify-between items-center'>
//           <div></div>
//           <div>
//             <h2 className='text-white font-poppins text-sm font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
//           </div>
//           <div>
//             <select name="" id="" className='bg-transparent text-white font-poppins text-sm font-normal'>
//               <option value="#" className='custom_option'>English</option>
//               <option value="#" className='custom_option'>Bengali</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header


import React from 'react';

const Header = () => {
  return (
    <div className='bg-black py-3 text-center md:text-left'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row items-center justify-between gap-2'>

          {/* Empty div for spacing or future use */}
          <div className='hidden md:block'></div>

          {/* Center text message */}
          <div className='w-full md:w-auto'>
            <h2 className='text-white font-poppins text-sm font-normal text-center md:text-left'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h2>
          </div>

          {/* Language dropdown */}
          <div className='w-full md:w-auto text-center md:text-right'>
            <select
              name="language"
              id="language"
              className='bg-transparent text-white font-poppins text-sm font-normal border-none outline-none'
            >
              <option value="#" className='text-black'>English</option>
              <option value="#" className='text-black'>Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
