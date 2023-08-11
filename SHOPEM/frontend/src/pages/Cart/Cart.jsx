import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Divider } from "@mui/material";
import { Add, Remove, CloseSharp } from "@mui/icons-material";

import { deleteProduct, updateProduct } from '../../redux/cartRedux';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Advert from '../../components/Advert/Advert';
import CartLoader from '../../components/CartLoader/CartLoader';
import { SkeletonSole } from '../../components/CartLoader/CartLoader';

import { Container, TitleContainer, ProductContainer, RowContainer, Img, 
IconContainer, AmountContainer, Amount, CheckoutContainer, CheckoutRow, 
CheckoutBox, ButtonCart, ShippingButton, MenuItem, Nocart, headingStyles } from './style';


const Cart = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const fetchedProducts = useSelector(state => state.cart.products);
  const [cartProducts, setCartProducts] = useState(fetchedProducts);
  const cartTotal = useSelector(state => state.cart.total);  

  const handleQuantity = (Type, indProduct) => {
  if(Type === 'dec'){
    const updatedProduct = cartProducts.find(p => p._id === indProduct._id);
    const updatedProduct2 = {...updatedProduct};
    if(indProduct.quantity > 1 && updatedProduct2){
        updatedProduct2.quantity -= 1;
    };
    const updatedProducts = fetchedProducts.map((item) => {
        if(item?._id === updatedProduct2?._id){
            item = updatedProduct2;
            return item;
        } else {
            return item;
        }
    });

    setCartProducts(updatedProducts);
    if(updatedProduct2.quantity > 0 ){dispatch(updateProduct({product:updatedProducts }))};
  } else{
    const updatedProduct = cartProducts.find(p => p._id === indProduct._id);
    const updatedProduct2 = {...updatedProduct};
    if(updatedProduct2){
        updatedProduct2.quantity += 1;
    }
    const updatedProducts = fetchedProducts.map((item) => {
        if(item._id === updatedProduct2._id){
            item = updatedProduct2;
            return item;
        } else {
            return item;
        }
    });

    setCartProducts(updatedProducts);
    dispatch(updateProduct({product: updatedProducts }));
  }
 };

 const handleClick = (product) => {
    dispatch(deleteProduct(product));
    setCartProducts(fetchedProducts); 
 }

    useEffect(() => {
        scroll.scrollToTop({
          smooth: true
        })
    })
 

  return (
    <>
      <Navbar cart={true}/>
      <Advert cart={true}/>
      <Container>
        {fetchedProducts.length <= 0 ? <Nocart>
        <Typography variant='h5' sx={headingStyles}>No Products in Cart</Typography>
        <Link to="/"><ShippingButton>Goto Shop</ShippingButton></Link>
        </Nocart> : 
        <>
        <TitleContainer>
            <Typography variant='h6'>Products</Typography>
            <Typography variant='h6' pl={!matchSM ? 14 : 12}>Quantity</Typography>
            <Typography variant='h6'>Price</Typography>
        </TitleContainer>
        <ProductContainer>
            {fetchedProducts ? fetchedProducts.map((product) => {
                return  <>
                <Divider />
                <RowContainer>
                    {<Img src={product.img} alt={product.title} /> || <SkeletonSole /> }
                    <MenuItem><CloseSharp onClick={() =>  handleClick(product)}/></MenuItem>
                    <AmountContainer>
                    <IconContainer><Remove onClick={() => handleQuantity('dec', product)} /></IconContainer>
                        <Amount>{product.quantity}</Amount>
                        <IconContainer><Add onClick={() => handleQuantity('inc', product)} /></IconContainer>
                    </AmountContainer>
                        <Typography variant={matchSM ? "subtitle1" : 'h5'}>${parseInt(product.price * product.quantity)}</Typography>
                </RowContainer>
                <Divider />
            </>
            }) :  <CartLoader />}
        </ProductContainer> </>}
     </Container>
     {fetchedProducts.length <= 0 ? <> <div></div></> : <><CheckoutContainer>
        <Link to="/"><ShippingButton>Continue Shopping</ShippingButton></Link>
        <CheckoutBox>
        <CheckoutRow> 
            <Typography variant='h6'>Subtotal</Typography> 
            <Typography variant='h6'>${parseInt(cartTotal)}</Typography>
        </CheckoutRow>
        <CheckoutRow>
            <Typography variant='h6'>Shipping Fee</Typography> 
            <Typography variant='h6'>$0</Typography></CheckoutRow>
        <CheckoutRow></CheckoutRow>
        <CheckoutRow>
            <Typography variant='h6'>Coupon</Typography> 
            <Typography variant='h6'>No</Typography></CheckoutRow>
        <CheckoutRow style={{paddingTop: "10%", fontWeight: "800"}}>
            <Typography variant='h5'>TOTAL</Typography>
            <Typography variant='h5'>${parseInt(cartTotal)}</Typography></CheckoutRow>
        <Link to='/ContactPayment'><ButtonCart>Checkout</ButtonCart></Link> 
        </CheckoutBox>
     </CheckoutContainer></>} 
     <Footer />
    </>
  )
}

export default Cart;