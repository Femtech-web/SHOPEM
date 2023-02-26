import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  height: 100vh;
  background: lavender;
  padding: 0 20%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
    padding: 20px 20px;
    background: coral;
    color: white;
    margin: 20px 0 10px;
    display: inline-block;
    border: none;
    cursor: pointer;
    text-align: center;
    &:hover {
      background: black;
    }
`;

const success = () => {
  return (
    <Container>
     <Typography variant='h4' my={2} sx={{textAlign: "center"}}>THANK YOU FOR YOUR ORDER !</Typography>
     <Typography variant='h6' mb={1} sx={{textAlign: "center"}}>Your order number: 5788</Typography>
     <Typography variant='h6' mb={1} sx={{textAlign: "center"}}>Your can <Link style={{color: "black"}}>track the order</Link></Typography>

     <Link to="/"><Button>Continue Shopping</Button></Link>
    </Container>
  )
}

export default success