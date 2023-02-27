import React, { useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { addProduct } from '../redux/cartRedux';
import { userRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery  from "@mui/material/useMediaQuery";
import { ShoppingCartOutlined, 
  FavoriteBorderRounded } from "@mui/icons-material";
import { Button, Rating, Typography, Divider } from "@mui/material";
import "@fontsource/roboto";


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  font-size: 14px;
  cursor: pointer;
  color: black;
  width: 30px;
  height: 30px;
  background: lavender;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px){
    top: 1px;
  }
`;

const H4 = styled.p`
  color: #8f8f8f;
  font-size: 1.5rem;
  word-wrap: break-word;
  text-decoration: none;

`;
const Img = styled.img`
    width: 100%;
    text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  @media screen and (max-width: 600px){
    position: relative;
  }
`;

const alertStyles = {
  position: "fixed",
  width: "70%",
};

const wrapperStyles = (match) => {
  return {
    display: "flex",
    flexDirection: "column",
    ...!match && {position: "relative"},
    maxWidth: "350px"
   }
};

const buttonStyles = (match) => {
  return {
    ...match && {width: "100%"},
    ...match && {textAlign: "left" },
    marginTop: "15px",
    textAlign: "center",
    background: "#1A1C1F",
    '&:hover': {
      background: "coral"
    }
   }
};

const Product = ({item}) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  const userId = localStorage.getItem("userId");;
  const [cartMessage, setCartMessage] = useState(false);
  const quantity = 1;
  const productId = item._id;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(addProduct({...item,quantity}));

    const sendToCart = async () => {
      try {
          const res = await userRequest.post(`/carts/${userId}`, {productId, quantity});
        if(res){
          setCartMessage(true);

          setTimeout(() => {
            setCartMessage(false);
          }, 2000);
        } 
      } catch (err) {}
    }
    sendToCart();
 };

  return (
    <Container>
        <Link to={`/product/${item._id}`} style={{textDecoration: "none", color: "#FFF"}}><Img src={item.img} alt="" /></Link>
        <Typography component="div" sx={wrapperStyles(matchSM)}>
         {cartMessage ? <Alert severity='success' 
         sx={{alertStyles}}>Added to cart successfully</Alert> : <H4>{item.title}</H4>}
          <Typography component="p" variant="h4">${item.price}</Typography>
          <MenuItem>
            <Rating name='simple-controlled' defaultValue={4} />
          </MenuItem>
          <Divider />
          <div>
            <Button variant='contained'
            sx={buttonStyles(matchSM)}
            endIcon={<ShoppingCartOutlined />}
            onClick={handleClick}
            >Add to Cart</Button>
            <Menu>
              <FavoriteBorderRounded />
            </Menu>
          </div>
        </Typography>
    </Container>
  )
}

export default Product