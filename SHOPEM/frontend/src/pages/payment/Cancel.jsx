import React from 'react';
import styled from "styled-components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


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

const Btn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
    padding: 10px 20px;
    color: black;
    margin: 20px 15px 10px;
    display: inline-block;
    border: 1px solid black;
    background: lavender;
    cursor: pointer;
    text-align: center;
    &:hover {
      background: black;
      color: white;
    }
`;

const Cancel = () => {
  return (
    <Container>
        <Typography variant="h3">404 error</Typography>
        <Btn>
          <Link to="/"><Button>Go Home</Button></Link>
          <Link to="/ContactPayment"><Button>Go to Payment</Button></Link>
        </Btn>
    </Container>
  )
}

export default Cancel