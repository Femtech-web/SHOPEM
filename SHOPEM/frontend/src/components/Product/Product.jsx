import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { addProduct } from '../../redux/cartRedux';
import { userRequest } from '../../requestMethods';
import { useDispatch } from 'react-redux';
import useMediaQuery  from "@mui/material/useMediaQuery";
import { ShoppingCartOutlined, 
FavoriteBorderRounded } from "@mui/icons-material";
import { Button, Rating, Typography, Divider } from "@mui/material";
import { MenuItem, Menu, Container, Img, H4, alertStyles,
buttonStyles, wrapperStyles } from './style';
import "@fontsource/roboto";


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
          return;
        } 
      } catch (err) {}
    }

    const message = () => {
      setCartMessage(true)
  
      setTimeout(() => {
        setCartMessage(false);
      }, 2000);
  
    }

    sendToCart();
    message();
 };

  return (
    <Container>
        <Link to={`/product/${item._id}`} style={{textDecoration: "none", color: "#FFF"}}>
        </Link>
        <Typography component="div" sx={wrapperStyles(matchSM)}>
         <Img src={item.img} alt={item.title} />
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