import React, { useRef } from 'react'
import Heading from '../commonComponents/Heading.jsx'
import Timer from '../commonComponents/Timer.jsx'
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import ProductSkeleton from '../../helpers/ProductSkeleton.jsx';

const ProductCommonLayout = ({
    ProductCard=()=> <ProductSkeleton/>,
    TimeStamp= false,
    IsArrowsTrue= false,
    heading= "Today's",
    description= "Flash Sales",
    timeOffer= 0,
    perItemShow = 4,
    componentData= [],
}) => {

  // 👇 Slider settings (from react-slick)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: perItemShow,
        slidesToScroll: 4,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const sliderRef = useRef(null)

      // 👇 Handlers for Next/Prev buttons

      const Next = ()=>{
        sliderRef.current.slickNext()
      }
      const Prev = ()=>{
        sliderRef.current.slickPrev()
      }
    
  return (
    <div className='mt-[70px] mb-[50px]'>
        <div className='container'>
          {/* 👇 Heading + Timer + Arrows section */}
        <div className='flex items-end gap-x-24 mb-[30px]'>
        <Heading title={heading} description={description}/>
        {TimeStamp && <Timer timeOffer={timeOffer}/>}
        {IsArrowsTrue && <div className='flex gap-x-2 ml-auto'>         
            <h1 onClick={Prev} className='cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white'>
                <span className='text-lg'><GrFormPreviousLink /></span>
            </h1>
            <h1 onClick={Next} className='cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white'>
                <span className='text-lg'><GrFormNextLink /></span>
            </h1>
        </div>}
        </div>
        {/* 👇 Slider with Product Cards */}
        <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
          {
            componentData?.map((item,index)=>(              
                <ProductCard itemData= {item ? item : {}} key={index}/>            
            ))
          }
      </Slider>
    </div>
        </div>
    </div>
  )
}

export default ProductCommonLayout