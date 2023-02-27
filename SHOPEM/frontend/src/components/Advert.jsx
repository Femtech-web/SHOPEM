import React from 'react'
import styled from "styled-components";
import { mobile2 } from "../responsive";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 5vh;
    margin: ${props => props.cart ? "2% 0 ": "4% 0"};
    padding: 1% 0;
    @media screen and (max-width: 600px){
        marginTop: ${props => props.cart ? "5%" : "10vh"}
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    height: 100%;
    background: black;
    opacity: 0.5;
`;

const H4 = styled.h4`
    padding-right: 2%;
    ${mobile2({paddingRight: 0})};
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  color: #F2F2F2;
`;

const Advert = ({cart}) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container cart={cart}>
        <Text>
            <H4>Get 40% Discount on Every Purchase Now</H4>
            {!matchSM && <H4>Get 40% Discount on Every Purchase Now</H4>}
            {!matchSM && <H4>Get 40% Discount on Every Purchase Now</H4>}
        </Text>
        <Overlay></Overlay>
    </Container>
  )
}

export default Advert