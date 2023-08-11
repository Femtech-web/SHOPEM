import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import Spinner from "../../elements/Spinner/Spinner";
import Navbar from '../../components/Navbar/Navbar';
import Advert from '../../components/Advert/Advert';
import Footer from '../../components/Footer/Footer';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest, userRequest } from '../../requestMethods';
import { useLocation } from 'react-router-dom';
import { Alert } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Typography, FormControl,
MenuItem, Select,
InputLabel } from '@mui/material';
import { ProductContainer, TextContainer, Img, Span, AddContainer,
ColorContainer, Color, SizeContainer, Button, AmountContainer, Amount, alertStyles } from './style';

const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState(false);
  const [choosedSize, setChoosedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
          const res = await publicRequest.get(`/products/find/${productId}`);

        setProduct(res.data);
      } catch (err){}
    }
    
    scroll.scrollToTop({
      smooth: true
    })

    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
  if(type === 'dec'){
    quantity > 1 && setQuantity(quantity - 1)
  } else{
    setQuantity(quantity + 1)
  }
 };

 const handleClick = (e) => {
    dispatch(addProduct({...product,quantity}));

    const sendToCart = async () => {
      try {
          const res = await userRequest.post(`/carts/${userId}`, {productId, quantity, choosedSize});
        if(res){
            return;
        } 
      } catch (err) {}
    }

    const message = () => {
      setCartMessage(true)
  
      setTimeout(() => {
        setCartMessage(false);
      }, 5000);
    }

    message()
    sendToCart();
 };

 let app = <Spinner />
 
  if(product){
    app = (
      <>
      <Navbar search={true} />
      <Advert />
      <ProductContainer>
        <Img src={product?.img}/>
        <TextContainer>
          <Typography variant='h4' mb={2}>{product?.title}</Typography>
          <Typography variant='subtitle1' sx={{fontSize: "1.2rem"}}>{product?.desc}</Typography>
          <Typography variant='h4' my={2}>${product?.price}</Typography>
          <ColorContainer>
            <Color><Typography variant='h5'>Color</Typography><Span color={product?.color}></Span></Color>
            <SizeContainer>
              <Typography variant='h5'>Size</Typography>
              <FormControl sx={{m: 1, 
                minWidth: "150px"}} 
                size="small"
              >
                <InputLabel id="Size-label">Size</InputLabel>
                <Select
                  id="Size-label"
                  name='size'
                  label="Size"
                  onChange={(e) => setChoosedSize(e.target.value)} 
                >
                  <MenuItem value={"SM"}>SM</MenuItem>
                  <MenuItem value={"MD"}>MD</MenuItem>
                  <MenuItem value={"LG"}>LG</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                  <MenuItem value={"XXL"}>XXL</MenuItem>
                </Select>
              </FormControl>
            </SizeContainer>
          </ColorContainer>
          <AddContainer>
            <Typography variant='h5'>Quantity</Typography>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
          </AddContainer>
          {cartMessage && <Alert severity='success' sx={{alertStyles}}>Added to cart successfully</Alert>}
          <Button onClick={handleClick}>Add to Cart</Button>
        </TextContainer>
      </ProductContainer>
      <Footer />
    </>
  )
}
return <>{app}</>
}

export default Product