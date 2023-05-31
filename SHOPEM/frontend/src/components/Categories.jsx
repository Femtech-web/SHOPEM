import React from 'react';
import styled from "styled-components";
import { Typography } from '@mui/material';
import ImageLoader from './ImageLoader';
import { Link } from "react-router-dom";
import {mobile2} from "../responsive";
import "@fontsource/roboto/700.css";

const CategoryWrapper = styled.div`
  padding: 0 10% 7%;
  font-family: "roboto";
  ${mobile2({padding: "0 1% 7%"})};
`;

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile2({flexDirection: "column"})}
`;

const Container = styled.div`
  position: relative;
  &:hover {
        transform: scale(1.2);
    };
    transition: all 500ms ease-out ;
`;

const H2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.5rem;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  color: #F2F2F2;
`;

const Button = styled.a`
    padding: 15px 25px;
    background: black;
    margin-top:  10px;
    color: white;
    display: inline-block;
    text-align: center;
    width: 100px;
    &:hover {
      background: coral;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 98%;
    z-index: 5;
    height: 100%;
    background: black;
    opacity: 0.5;
`;

const Img = styled.img`
    width: 98%;
`;

const wrapperStyles = {
  fontSize: "1.8rem",
  marginBottom: "4rem",
  borderLeft:" 5px solid coral",
  padding: "10px 0px 10px 2rem"
};

const Categories = () => {
  return (
    <CategoryWrapper>
      <Typography component="h3"
        sx={wrapperStyles}
        >Categories</Typography>
      <AllContainer>
        <Container>
          {<Img src="/image/man3.jpg" alt="" /> || <ImageLoader />}
          <Text>
            <H2>MEN</H2>
            <Link to={'/products/men'}><Button>Shop Now</Button></Link>
          </Text>
          <Overlay></Overlay>
        </Container>
        <Container>
          {<Img src="/image/woman4.jpg" alt="" /> || <ImageLoader />}
          <Text>
            <H2>WOMEN</H2>
            <Link to={'/products/women'}><Button>Shop Now</Button></Link>
          </Text>
          <Overlay></Overlay>
        </Container>
        <Container>
        {<Img src="/image/woman3.jpg" alt="" /> || <ImageLoader />}
        <Text>
        <H2>UNISEX</H2>
        <Link to={'/products/unisex'}><Button>Shop Now</Button></Link>
        </Text>
        <Overlay></Overlay>
        </Container>
      </AllContainer>
    </CategoryWrapper>
  )
}

export default Categories