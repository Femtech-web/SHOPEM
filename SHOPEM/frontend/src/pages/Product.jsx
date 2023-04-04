import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Spinner from "../elements/Spinner/Spinner";
import Navbar from '../components/Navbar';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest, userRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';
import { Alert } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { mobile2 } from "../responsive"
import { Typography, FormControl,
    MenuItem, Select,
    InputLabel } from '@mui/material';

const ProductContainer = styled.div`
  display: flex;
  ${mobile2({flexDirection: "column"})}
`;

const Img = styled.img`
  width: 50%;
  ${mobile2({width: "100%"})}
`;

const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 5% 0 0 5%;
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
    padding: 15px 25px;
    background: coral;
    color: white;
    margin-top:   10px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    width: 150px;
    &:hover {
      background: black;
    }
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 0;
  justify-content: space-between;
  ${mobile2({ width: "100%" })}
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
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const alertStyles = {
  position: "fixed",
  width: "70%",
};

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
                        size="small">
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