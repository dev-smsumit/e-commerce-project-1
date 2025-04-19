import React from 'react'

// Reusable layout component that displays product/category sections with slider support
import ProductCommonLayout from '../../commonComponents/ProductCommonLayout'

// Custom component for rendering individual category items
import CategoryItems from '../../commonComponents/CategoryItems'

// Icons for each category
import { AiOutlineCamera } from "react-icons/ai"
import { BsHeadphones, BsSmartwatch } from "react-icons/bs"
import { IoGameControllerOutline } from "react-icons/io5"
import { RiComputerLine } from "react-icons/ri"
import { VscDeviceMobile } from "react-icons/vsc"
import { IoMdFootball } from 'react-icons/io'

// Category data array with name and corresponding icon
const categoryBrowse = [
  {
      id: 1,
      Name: "Phones",
      img: <VscDeviceMobile />
  },{
      id: 2,
      Name: "Computers",
      img: <RiComputerLine />
  },{
      id: 3,
      Name: "Smartwatch",
      img: <BsSmartwatch />
  },{
      id: 4,
      Name: "Camera",
      img: <AiOutlineCamera />
  },{
      id: 5,
      Name: "Headphones",
      img: <BsHeadphones />
  },{
      id: 6,
      Name: "Gaming",
      img: <IoGameControllerOutline />
  },{
      id: 7,
      Name: "Sports",
      img: <IoMdFootball />
  },
]

// Main Category component to render the category section using ProductCommonLayout
const Category = () => {
  return (
    <div>
        <ProductCommonLayout
          heading={'Categories'} // Section heading
          description={'Browse By Category'} // Section description
          IsArrowsTrue={true} // Show navigation arrows
          ProductCard={CategoryItems} // Component used to render each category item
          perItemShow={6} // Number of items shown in the slider at once
          componentData={categoryBrowse} // Data for categories
        />
    </div>
  )
}

export default Category
