// import React, { useRef } from 'react'
// import Heading from '../commonComponents/Heading.jsx'
// import Timer from '../commonComponents/Timer.jsx'
// import Slider from "react-slick";
// import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
// import ProductSkeleton from '../../helpers/ProductSkeleton.jsx';

// const ProductCommonLayout = ({
//   ProductCard = () => <ProductSkeleton />,
//   TimeStamp = false,
//   IsArrowsTrue = false,
//   heading = "Today's",
//   description = "Flash Sales",
//   timeOffer = 0,
//   perItemShow = 4,
//   componentData = [],
//   isLoading = false,
//   isButtonTrue = false,
//   rows = 1,
// }) => {

//   // 👇 Slider settings (from react-slick)

//   var settings = {
//     dots: false,
//     rows: rows,
//     infinite: false,
//     speed: 500,
//     slidesToShow: perItemShow,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     // nextArrow: <SampleNextArrow />,
//     // prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   const sliderRef = useRef(null)

//   // 👇 Handlers for Next/Prev buttons

//   const Next = () => {
//     sliderRef.current.slickNext()
//   }
//   const Prev = () => {
//     sliderRef.current.slickPrev()
//   }

//   return (
//     <div className='mt-[70px]'>
//       <div className='container'>
//         {/* 👇 Heading + Timer + Arrows section */}
//         <div className='flex items-end gap-x-24 mb-[30px]'>
//           <Heading title={heading} description={description} />
//           {TimeStamp && <Timer timeOffer={timeOffer} />}
//           {IsArrowsTrue && <div className='flex gap-x-2 ml-auto'>
//             <h1 onClick={Prev} className='cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white'>
//               <span className='text-lg'><GrFormPreviousLink /></span>
//             </h1>
//             <h1 onClick={Next} className='cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white'>
//               <span className='text-lg'><GrFormNextLink /></span>
//             </h1>
//           </div>}
//           {isButtonTrue && <div className='flex ml-auto'><button className='bg-red_db4444 px-10 py-2 text-base font-poppins rounded-md hover:opacity-75 text-text_white font-medium'>View All</button></div>}
//         </div>
//         {/* 👇 Slider with Product Cards */}
//         <div className="slider-container">
//           <Slider ref={sliderRef} {...settings}>
//             {isLoading ?
//               [...new Array(10)]?.map((_, index) => (
//                 <div key={index}>
//                   <ProductSkeleton />
//                 </div>
//               )) :
//               componentData?.map((item, index) => (
//                 <div key={item.key}>
//                   <ProductCard itemData={item ? item : {}} />
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCommonLayout


import React, { useRef } from 'react'
import Heading from '../commonComponents/Heading.jsx'
import Timer from '../commonComponents/Timer.jsx'
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import ProductSkeleton from '../../helpers/ProductSkeleton.jsx';

const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  TimeStamp = false,
  IsArrowsTrue = false,
  heading = "Today's",
  description = "Flash Sales",
  timeOffer = 0,
  perItemShow = 4,
  componentData = [],
  isLoading = false,
  isButtonTrue = false,
  rows = 1,
}) => {

  const settings = {
    dots: false,
    rows: rows,
    infinite: false,
    speed: 500,
    slidesToShow: perItemShow,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const Next = () => {
    sliderRef.current.slickNext();
  };
  const Prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="mt-[30px] lg:mt-[70px] w-full">
      <div className="container mx-auto px-4 lg:px-4">
        {/* 👇 Heading + Timer + Arrows section */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-6 justify-between mb-[30px]">
          <div className="flex flex-col sm:flex-row sm:items-end gap-x-6">
            <Heading title={heading} description={description} />
            {TimeStamp && <Timer timeOffer={timeOffer} />}
          </div>

          {/* 👇 Arrows */}
          {IsArrowsTrue && (
            <div className="flex gap-x-2 ml-auto">
              <button
                onClick={Prev}
                className="cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white transition"
              >
                <GrFormPreviousLink className="text-lg" />
              </button>
              <button
                onClick={Next}
                className="cursor-pointer p-2 rounded-full bg-white_f5f5f5 hover:bg-red_db4444 hover:text-text_white transition"
              >
                <GrFormNextLink className="text-lg" />
              </button>
            </div>
          )}

          {/* 👇 View All Button */}
          {isButtonTrue && (
            <div className="ml-auto sm:ml-0">
              <button className="bg-red_db4444 px-6 sm:px-10 py-2 text-sm sm:text-base font-poppins rounded-md hover:opacity-75 text-text_white font-medium">
                View All
              </button>
            </div>
          )}
        </div>

        {/* 👇 Product Slider */}
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(10)].map((_, index) => (
                  <div key={index}>
                    <ProductSkeleton />
                  </div>
                ))
              : componentData?.map((item, index) => (
                  <div key={item.key || index}>
                    <ProductCard itemData={item || {}} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
