// import React from 'react';
// import { CiHeart } from 'react-icons/ci'; // Wishlist icon
// import gamepad from '../../assets/products/gamepad.png'; // Product image
// import { IoEyeOutline } from 'react-icons/io5'; // View details icon
// import { FaStar } from 'react-icons/fa'; // Star rating icon
// import Star from './Star';

// const ProductCard = ({itemData}) => {
  
//   return (
//     <div className='w-[95%]'>

//       {/* Card container with hover effects */}
//       <div className='relative bg-white_f5f5f5 px-3 pt-3 pb-12 flex flex-col items-center cursor-pointer group'>

//         {/* Discount badge and wishlist icon */}
//         <div className='flex items-start justify-between w-full'>
//           {itemData.discountPercentage && 
//                       <span className='inline-block bg-red_db4444 text-text_white px-3 py-2 text-sm font-normal rounded'>-{itemData? itemData.discountPercentage : 0}%</span> 
//           }
//           <span className='flex items-center justify-center w-[30px] h-[30px] rounded-full bg-text_white text-xl hover:bg-red_db4444 hover:text-text_white cursor-pointer mb-1'>
//             <CiHeart />
//           </span>
//         </div>

//         {/* Product image and view icon */}
//         <div className='flex justify-between w-full'>
//           <div className='w-[172px] h-[152px] flex-1 ps-7'>
//             <img src={itemData? itemData.thumbnail : gamepad} alt={gamepad} className='w-full h-full object-contain' />
//           </div>
//           <span className='flex items-center justify-center w-[30px] h-[30px] rounded-full bg-text_white text-xl hover:bg-red_db4444 hover:text-text_white cursor-pointer'>
//             <IoEyeOutline />
//           </span>
//         </div>

//         {/* Add to Cart button (visible on hover) */}
//         <div className='absolute left-0 bottom-0 w-full h-10 bg-black text-text_white flex justify-center items-center opacity-0 group-hover:opacity-100'>
//           <h3>Add To Cart</h3>
//         </div>
//       </div>

//       {/* Product name */}
//       <div>
//         <h1 className='font-medium font-poppins text-lg mt-3 cursor-pointer w-full truncate overflow-hidden'>{itemData? itemData.title : "HAVIT HV-G92 Gamepad"}</h1>

//         {/* Price section */}
//         <div className='flex gap-x-2 cursor-pointer'>
//           <span className='text-red_db4444 font-medium text-lg'>${itemData? (itemData?.price-itemData.price*(itemData?.discountPercentage/100)).toFixed(2) : 0}</span>
//           <span className='text-text_black opacity-85 font-medium font-poppins text-lg line-through'>${itemData? itemData.price : 0}</span>
//         </div>

//         {/* Star rating and total reviews */}
//         <div className='flex items-center gap-x-2 cursor-pointer'>
//           <div className='flex gap-x-1 text-yellow-500'>
//             <Star rating={itemData && itemData.rating}/>
//           </div>
//           <h3>{`(${itemData?.reviews?.length})`}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React from 'react';
import { CiHeart } from 'react-icons/ci'; // Wishlist icon
import gamepad from '../../assets/products/gamepad.png'; // Fallback image
import { IoEyeOutline } from 'react-icons/io5'; // View icon
import Star from './Star';

const ProductCard = ({ itemData }) => {
  const discount = itemData?.discountPercentage || 0;
  const price = itemData?.price || 0;
  const discountedPrice = (price - price * (discount / 100)).toFixed(2);
  const image = itemData?.thumbnail || gamepad;

  return (
    <div className="w-full max-w-sm mx-auto sm:w-[90%] md:w-[95%]">
      {/* Card Container */}
      <div className="relative bg-white_f5f5f5 px-4 pt-4 pb-14 flex flex-col items-center cursor-pointer group transition-shadow hover:shadow-md rounded">
        
        {/* Top Bar: Discount + Wishlist */}
        <div className="flex items-start justify-between w-full">
          {discount > 0 && (
            <span className="inline-block bg-red_db4444 text-white px-3 py-1 text-xs sm:text-sm rounded font-medium">
              -{discount}%
            </span>
          )}
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-xl hover:bg-red_db4444 hover:text-white transition cursor-pointer">
            <CiHeart />
          </span>
        </div>

        {/* Product Image + Eye Icon */}
        <div className="flex justify-between w-full items-center mt-2">
          <div className="w-full h-[140px] sm:h-[160px] md:h-[172px] flex items-center justify-center">
            <img
              src={image}
              alt={itemData?.title || "product"}
              className="max-h-full object-contain"
            />
          </div>
          <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-xl hover:bg-red_db4444 hover:text-white transition cursor-pointer">
            <IoEyeOutline />
          </span>
        </div>

        {/* Add to Cart Hover Button */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-black text-white text-sm sm:text-base flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <h3>Add To Cart</h3>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3 px-1">
        <h1 className="font-poppins text-sm sm:text-base md:text-lg font-medium line-clamp-1">
          {itemData?.title || "HAVIT HV-G92 Gamepad"}
        </h1>

        {/* Price */}
        <div className="flex gap-x-2 mt-1 items-center">
          <span className="text-red_db4444 font-semibold text-sm sm:text-base">
            ${discountedPrice}
          </span>
          <span className="text-gray-500 line-through text-sm sm:text-base">
            ${price}
          </span>
        </div>

        {/* Star Rating + Reviews */}
        <div className="flex items-center gap-x-2 mt-1 text-sm text-gray-600">
          <div className="flex gap-x-1 text-yellow-500">
            <Star rating={itemData?.rating || 0} />
          </div>
          <h3>{`(${itemData?.reviews?.length || 0})`}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

