import React from 'react'
import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'
import ProductCard from '../../commonComponents/ProductCard.jsx'
import { useGetAllProductQuery } from '../../../features/Apis/productApis.js';

const ExploreProduct = () => {
    const { data, error, isLoading } = useGetAllProductQuery()
  return (
    <div className='container'>
        <div className='flex flex-col items-center border-b-[1.5px] border-b-gray-300 pb-4 mb-6'>
        <div>
            <ProductCommonLayout
            heading='Our Products'
            description='Explore Our Products'
            IsArrowsTrue={true}
            ProductCard={ProductCard}
            componentData={data?.products}
            rows={2}
            isLoading={isLoading}
        />
        </div>
        {/* View All Products button */}
        <div className='mb-10 mt-10'>
          <button className='px-11 py-3 bg-red_db4444 rounded text-md text-text_white font-medium hover:opacity-75'>
            View All Products
          </button>
        </div>
    </div>
    </div>
  )
}

export default ExploreProduct