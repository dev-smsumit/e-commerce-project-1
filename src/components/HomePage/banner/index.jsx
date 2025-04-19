import React, { useState } from 'react';
import { category } from '../../../../Data/Data'; // Importing category data
import { IoIosArrowForward } from 'react-icons/io'; // Icon for nested categories
import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
import Slider from "react-slick"; // Importing react-slick slider component
import banner from "../../../assets/banner/banner.png"; // Importing banner image

const Banner = () => {
  // State to keep track of current slide index
  const [currentSlide, setCurrentslide] = useState(0)

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false, 

    // Custom dot container styling
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center", columnGap: "5px" }}> 
          {dots} 
        </ul>
      </div>
    ),

    // Custom dot design based on current slide
    customPaging: i => (
      i === currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#db4444",
            border: "2px #fff solid",
            cursor: "pointer"
          }}
        />
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            opacity: "50%",
            cursor: "pointer"
          }}
        />
      )
    ),

    // Update the current slide index
    afterChange: currentSlide => {
      setCurrentslide(currentSlide)
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='flex justify-between items-start'>
          
          {/* Sidebar with category list */}
          <div className='w-[30%] border-r-[1px] border-text_black'>
            <ul className='pt-8'>
              {category?.map((item, index) => (
                <div 
                  className='flex items-center justify-between hover:bg-gray-300 transition-all' 
                  key={item.id}
                >
                  <li className='font-poppins hover:px-4 transition-all text-md text-black font-normal py-2 cursor-pointer'>
                    {item.category}
                  </li>

                  {/* Show arrow if subCategory exists */}
                  {item.subCategory && (
                    <span className='pr-7'>
                      <IoIosArrowForward />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>

          {/* Main banner section with slider */}
          <div className='w-[70%] h-[344px] pl-11 pt-10'>
            <div className="slider-container">
              <Slider {...settings}>
                {[...new Array(10)].map((item, index) => (
                  <div key={index}>
                    <img 
                      src={banner} 
                      alt="Banner Slide" 
                      className='w-full h-full object-cover' 
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
