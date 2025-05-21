import React from 'react'
import ProductCommonLayout from "../../commonComponents/ProductCommonLayout.jsx"
import ProductCard from '../../commonComponents/ProductCard.jsx'
import {useGetBestSellingProductQuery} from "../../../features/Apis/productApis.js"

const BestSelling = () => {
    const {data,error,isLoading} = useGetBestSellingProductQuery()
    
  return (
    <div className='container border-t-[1.5px] border-gray-300'>
        <ProductCommonLayout
            ProductCard = {ProductCard}
            heading = "This Month"
            description = "Best Selling Products"
            componentData={data?.products} // Placeholder data array (10 items)
            isloading={isLoading}
            isButtonTrue = {true}
        />
    </div>
  )
}

export default BestSelling