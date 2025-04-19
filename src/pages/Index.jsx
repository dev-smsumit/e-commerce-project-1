import React from 'react';
import Header from '../components/rootLayout/header';
import Navbar from '../components/rootLayout/navbar/Index';
import Banner from '../components/HomePage/banner';
import FlashSale from '../components/HomePage/flashSale';
import Category from '../components/HomePage/category';

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <FlashSale/>
        <Category/>
    </div>
  )
}

export default Homepage