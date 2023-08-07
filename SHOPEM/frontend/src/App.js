import React, { useEffect, useState } from "react";
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./elements/Spinner/Spinner";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ContactPayment from "./pages/payment/ContactPayment";
import Cancel from "./pages/payment/Cancel";
import Success from "./pages/payment/Success";


function App() {
 const user = useSelector(state => state.user.currentUser);
 const [loading, setLoading] = useState(true);
 
 const Release = () => {
  setLoading(false)
 }

 useEffect(() => {
  setTimeout(Release, 10000)
 })
 
 let app = <Spinner />

 if(!loading){

   app = (
     <>
  <Router basename='/'>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/Register" element={<Register />}/>
      <Route exact path="/Login" element={user ? <Navigate to="/" /> : <Login />}/>
      <Route exact path="/products/:category" element={<ProductList />}/>
      <Route exact path="/product/:id" element={<Product />}/>
      <Route exact path="/cart" element={<Cart />}/>
      <Route exact path="/ContactPayment" element={<ContactPayment />}/>
      <Route  path="/Success" element={<Success />}/>
      <Route  path="/Cancel" element={<Cancel />}/>
    </Routes>
  </Router>
  </>
  )
}
  return <>{app}</>
}

export default App;
