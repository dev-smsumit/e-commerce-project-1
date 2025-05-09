import React from 'react';
import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'; // Reusable product section layout
import ProductCard from '../../commonComponents/ProductCard.jsx'; // Individual product card component

const FlashSale = () => {
  return (
    <div className='container'>
      
      {/* Flash Sale section with bottom border */}
      <div className='flex flex-col items-center border-b-[1px] border-b-text_black pb-4 mb-6'>

        {/* Product layout with timer and arrows enabled */}
        <ProductCommonLayout 
          ProductCard={ProductCard}
          TimeStamp={true}           // Show countdown timer
          IsArrowsTrue={true}        // Show carousel arrows
          heading="Today's"          // Section heading
          description="Flash Sales" // Section description
          timeOffer={1}              // Custom prop, likely for countdown logic
          componentData={[...new Array(10)]} // Placeholder data array (10 items)
        />

        {/* View All Products button */}
        <div className='mb-10'>
          <button className='px-11 py-3 bg-red_db4444 rounded text-md text-text_white font-medium hover:opacity-75'>
            View All Products
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default FlashSale;
