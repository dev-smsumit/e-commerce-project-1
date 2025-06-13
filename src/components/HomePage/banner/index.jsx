import React, { useState } from 'react';
import { category } from '../../../../Data/Data';
import { IoIosArrowForward } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
  const [currentSlide, setCurrentslide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
        <ul className="flex justify-center gap-1 m-0">{dots}</ul>
      </div>
    ),
    customPaging: i =>
      i === currentSlide ? (
        <div className="w-5 h-5 rounded-full bg-primary border-2 border-white cursor-pointer" />
      ) : (
        <div className="w-5 h-5 rounded-full bg-white opacity-50 cursor-pointer" />
      ),
    afterChange: current => setCurrentslide(current)
  };

  return (
    <div className="w-full bg-white relative z-30">
      <div className="container mx-auto px-4 relative">

        {/* Mobile: Top bar with Hamburger */}
        <div className="flex justify-between items-center pt-4 md:hidden relative">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Floating Dropdown for Mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-b shadow-md z-50 mt-2">
              <ul className="py-4">
                {category?.map(item => (
                  <div key={item.id} className="flex items-center justify-between px-4 hover:bg-gray-200 transition-all">
                    <li className="font-poppins text-md text-black font-normal py-2 cursor-pointer">
                      {item.category}
                    </li>
                    {item.subCategory && (
                      <span className="pr-2">
                        <IoIosArrowForward />
                      </span>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop + Layout Section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Sidebar for Desktop */}
          <div className="hidden md:block w-[30%] border-r border-text_black">
            <ul className="pt-8">
              {category?.map(item => (
                <div key={item.id} className="flex items-center justify-between hover:bg-gray-200 transition-all">
                  <li className="font-poppins hover:px-4 transition-all text-md text-black font-normal py-2 cursor-pointer">
                    {item.category}
                  </li>
                  {item.subCategory && (
                    <span className="pr-7">
                      <IoIosArrowForward />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>

          {/* Slider Section */}
          <div className="w-full md:w-[70%] h-auto md:h-[344px] md:pl-11 pt-6 md:pt-10">
            <Slider {...settings}>
              {[...new Array(10)].map((_, index) => (
                <div key={index}>
                  <img
                    src={banner}
                    alt="Banner Slide"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;





// import React, { useState } from 'react';
// import { category } from '../../../../Data/Data'; // Importing category data
// import { IoIosArrowForward } from 'react-icons/io'; // Icon for nested categories
// import "slick-carousel/slick/slick.css"; // Importing slick carousel CSS
// import Slider from "react-slick"; // Importing react-slick slider component
// import banner from "../../../assets/banner/banner.png"; // Importing banner image

// const Banner = () => {
//   // State to keep track of current slide index
//   const [currentSlide, setCurrentslide] = useState(0)

//   // Slider settings for react-slick
//   const settings = {
//     dots: true,
//     infinite: true, 
//     speed: 500, 
//     slidesToShow: 1, 
//     slidesToScroll: 1,
//     arrows: false, 

//     // Custom dot container styling
//     appendDots: dots => (
//       <div
//         style={{
//           position: "absolute",
//           bottom: "5%",
//           left: "50%",
//           transform: "translateX(-50%)"
//         }}
//       >
//         <ul style={{ margin: "0px", display: "flex", justifyContent: "center", columnGap: "5px" }}> 
//           {dots} 
//         </ul>
//       </div>
//     ),

//     // Custom dot design based on current slide
//     customPaging: i => (
//       i === currentSlide ? (
//         <div
//           style={{
//             width: "20px",
//             height: "20px",
//             borderRadius: "50%",
//             backgroundColor: "#db4444",
//             border: "2px #fff solid",
//             cursor: "pointer"
//           }}
//         />
//       ) : (
//         <div
//           style={{
//             width: "20px",
//             height: "20px",
//             borderRadius: "50%",
//             backgroundColor: "#fff",
//             opacity: "50%",
//             cursor: "pointer"
//           }}
//         />
//       )
//     ),

//     // Update the current slide index
//     afterChange: currentSlide => {
//       setCurrentslide(currentSlide)
//     }
//   };

//   return (
//     <div>
//       <div className='container'>
//         <div className='flex justify-between items-start'>
          
//           {/* Sidebar with category list */}
//           <div className='w-[30%] border-r-[1px] border-text_black'>
//             <ul className='pt-8'>
//               {category?.map((item, index) => (
//                 <div 
//                   className='flex items-center justify-between hover:bg-gray-300 transition-all' 
//                   key={item.id}
//                 >
//                   <li className='font-poppins hover:px-4 transition-all text-md text-black font-normal py-2 cursor-pointer'>
//                     {item.category}
//                   </li>

//                   {/* Show arrow if subCategory exists */}
//                   {item.subCategory && (
//                     <span className='pr-7'>
//                       <IoIosArrowForward />
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </ul>
//           </div>

//           {/* Main banner section with slider */}
//           <div className='w-[70%] h-[344px] pl-11 pt-10'>
//             <div className="slider-container">
//               <Slider {...settings}>
//                 {[...new Array(10)].map((item, index) => (
//                   <div key={index}>
//                     <img 
//                       src={banner} 
//                       alt="Banner Slide" 
//                       className='w-full h-full object-cover' 
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Banner
