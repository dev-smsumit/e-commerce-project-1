import React from 'react'
import ProductCommonLayout from "../../commonComponents/ProductCommonLayout.jsx"
import ProductCard from '../../commonComponents/ProductCard.jsx'
import { useGetBestSellingProductQuery } from "../../../features/Apis/productApis.js"

const BestSelling = () => {
  const { data, error, isLoading } = useGetBestSellingProductQuery()

  return (
    // <div className='container border-t-[1.5px] border-gray-300'>
    //     <ProductCommonLayout
    //         ProductCard = {ProductCard}
    //         heading = "This Month"
    //         description = "Best Selling Products"
    //         componentData={data?.products} // Placeholder data array (10 items)
    //         isloading={isLoading}
    //         isButtonTrue = {true}
    //     />
    // </div>

    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">

        {/* Section container with border */}
        <div className="flex flex-col items-center border-b border-gray-300 pb-6 sm:pb-8 md:pb-10 mb-8 sm:mb-10">

          {/* Product carousel with heading, timer, arrows */}
          <ProductCommonLayout
            ProductCard={ProductCard}
            heading="This Month"
            description="Best Selling Products"
            isButtonTrue={true}
            componentData={data?.products || []}
            isLoading={isLoading}
          />

        </div>
      </div>
    </div>
  )
}

export default BestSelling