import React from 'react';
import { Typography } from '@mui/material';
import ImageLoader from '../ImageLoader';
import { Link } from "react-router-dom";
import "@fontsource/roboto/700.css";
import { CategoryWrapper, AllContainer, Container, H2, Text, Button, Overlay, Img, wrapperStyles } from './style';


const Categories = () => {
  return (
    <CategoryWrapper>
      <Typography component="h3"
        sx={wrapperStyles}
        >Categories</Typography>
      <AllContainer>
        <Container>
          {<>
              <Img src="/image/man3.jpg" alt="" /> 
              <Text>
                <H2>MEN</H2>
                <Link to={'/products/men'}><Button>Shop Now</Button></Link>
              </Text>
              <Overlay></Overlay>
            </> 
          || <ImageLoader /> }
        </Container>
        <Container>
          {<>
            <Img src="/image/woman4.jpg" alt="" /> 
            <Text>
              <H2>WOMEN</H2>
              <Link to={'/products/women'}><Button>Shop Now</Button></Link>
            </Text>
            <Overlay></Overlay>

          </> 
          || <ImageLoader /> }
        </Container>
        <Container>
        {<>
          <Img src="/image/woman3.jpg" alt="" /> 
          <Text>
          <H2>UNISEX</H2>
          <Link to={'/products/unisex'}><Button>Shop Now</Button></Link>
          </Text>
          <Overlay></Overlay>
        </> 
        || <ImageLoader />}
        </Container>
      </AllContainer>
    </CategoryWrapper>
  )
}

export default Categories