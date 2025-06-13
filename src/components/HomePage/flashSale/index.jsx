// import React from 'react';
// import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'; // Reusable product section layout
// import ProductCard from '../../commonComponents/ProductCard.jsx'; // Individual product card component
// import { useGetAllProductQuery } from '../../../features/Apis/productApis.js';

// const FlashSale = () => {
//   const { data, error, isLoading } = useGetAllProductQuery()

//   return (
//     <div className='container'>
      
//       {/* Flash Sale section with bottom border */}
//       <div className='flex flex-col items-center border-b-[1.5px] border-b-gray-300 pb-4 mb-6'>

//         {/* Product layout with timer and arrows enabled */}
//         <ProductCommonLayout 
//           ProductCard={ProductCard}
//           TimeStamp={true}           // Show countdown timer
//           IsArrowsTrue={true}        // Show carousel arrows
//           heading="Today's"          // Section heading
//           description="Flash Sales" // Section description
//           timeOffer={1}              // Custom prop, likely for countdown logic
//           componentData={data?.products} // Placeholder data array (10 items)
//           isloading={isLoading}
//         />

//         {/* View All Products button */}
//         <div className='mb-10 mt-10'>
//           <button className='px-11 py-3 bg-red_db4444 rounded text-md text-text_white font-medium hover:opacity-75'>
//             View All Products
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default FlashSale;


import React from 'react';
import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'; // Reusable layout
import ProductCard from '../../commonComponents/ProductCard.jsx'; // Card
import { useGetAllProductQuery } from '../../../features/Apis/productApis.js';

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">

        {/* Section container with border */}
        <div className="flex flex-col items-center border-b border-gray-300 pb-6 sm:pb-8 md:pb-10 mb-8 sm:mb-10">
          
          {/* Product carousel with heading, timer, arrows */}
          <ProductCommonLayout 
            ProductCard={ProductCard}
            TimeStamp={true}
            IsArrowsTrue={true}
            heading="Today's"
            description="Flash Sales"
            timeOffer={1}
            componentData={data?.products || []}
            isLoading={isLoading}
          />

          {/* View All Products Button */}
          <div className="mt-8 sm:mt-10 mb-8 w-full flex justify-center">
            <button className="px-6 sm:px-10 py-2.5 sm:py-3 bg-red_db4444 text-white rounded-md text-sm sm:text-base font-medium hover:opacity-80 transition">
              View All Products
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlashSale;

