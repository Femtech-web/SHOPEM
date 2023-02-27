import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ContactPayment from "./pages/payment/ContactPayment";
import Cancel from "./pages/payment/Cancel";
import Success from "./pages/payment/Success";


function App() {
 const user = useSelector(state => state.user.currentUser);


  return (
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

export default App;
