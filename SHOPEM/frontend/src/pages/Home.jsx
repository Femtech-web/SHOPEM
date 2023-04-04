import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import { animateScroll as scroll } from 'react-scroll';
import Showcase from "../components/Showcase";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Home = () => {
  useEffect(() => {
      scroll.scrollToTop({
        smooth: true
      })
  })

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