import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import { animateScroll as scroll } from 'react-scroll';
import Showcase from "../components/Showcase/Showcase";
import Brands from "../components/Brands/Brands";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";


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