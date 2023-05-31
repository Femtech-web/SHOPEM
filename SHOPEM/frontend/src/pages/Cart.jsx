import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from '../redux/cartRedux';
import { mobile2 } from '../responsive';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Advert from '../components/Advert';
import { Typography, Divider } from "@mui/material";
import { Add, Remove, CloseSharp } from "@mui/icons-material";
import styled from "styled-components";
import CartLoader from '../components/CartLoader';
import { SkeletonSole } from '../components/CartLoader';


const Container = styled.div`
    margin-top: 5%;
    font-family: "roboto";
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 3%;
    margin-bottom: 2%;
    ${mobile2({padding: "3% 5% 3% 3%"})}
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 0 3%;
`;

const RowContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 2% 0;
`;

const Img = styled.img`
    width: 15%;
    ${mobile2({width: "50%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const IconContainer = styled.span`
    padding: 5px 3px;
    background: lavender;
`;

const CheckoutContainer = styled.div`
    display: flex;
    font-family: "roboto";
    justify-content: space-between;
    align-items: center;
    padding: 2% 5%;
    ${mobile2({flexDirection: "column"})}
`;

const CheckoutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 0;
`;

const ButtonCart = styled.a`
    padding: 10px 10px;
    color: white;
    background: #1A1C1F;
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    width: 100%;
    &:hover {
      background: coral;
    };
`;

const ShippingButton = styled.a`
    padding: 10px 10px;
    color: black;
    border: 1px solid rgba(0,0,0,0.5);
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    &:hover {
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
    };
    ${mobile2({marginBottom: "10%"})}
`;

const CheckoutBox = styled.div`
    min-width: 250px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 10px;
`;

const Nocart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const headingStyles = {
    textAlign: "center",
    marginBottom: "20px"
};

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
                    {<Img src={product.img} alt="" /> || <SkeletonSole /> }
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