import React from 'react';
import Header from '../components/rootLayout/header';
import Navbar from '../components/rootLayout/navbar/Index';
import Banner from '../components/HomePage/banner';
import FlashSale from '../components/HomePage/flashSale';
import Category from '../components/HomePage/category';
import BestSelling from '../components/HomePage/bestselling';
import SecondBanner from '../components/HomePage/secondBanner';
import ExploreProduct from '../components/HomePage/ExploreProduct';
import NewArrival from '../components/HomePage/NewArrival';
import CustomerService from '../components/HomePage/CustomerService';
import Footer from '../components/rootLayout/Footer';

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Banner/>
        <FlashSale/>
        <Category/>
        <BestSelling/>
        <SecondBanner timeOffer={5}/>
        <ExploreProduct/>
        <NewArrival/>
        <CustomerService/>
        <Footer/>
    </div>
  )
}

export default Homepage