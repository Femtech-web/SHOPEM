import React from 'react'
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    <Navbar />
    <Showcase />
    <Brands />
    <Categories />
    <Products />
    <Footer />
    </>
  )
}

export default Home