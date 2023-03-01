import React from 'react';
import styled from "styled-components";
import { mobile2, mobile } from "../responsive";
import { Link } from "react-router-dom";
import "animate.css";
import "@fontsource/roboto/700.css";


const TopShowcase = styled.div`
    padding: 0% 10%;
    margin-top: 3%;
    font-family: "roboto";
    margin-bottom: 5%;
    ${mobile({padding: "1.5% 1%"})};
`

const InnerTopShowcase = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    transform: translateY(5%);
    ${mobile({flexDirection: "column"})};
`;

const TopDesc = styled.div`
    width: 50%;
    background: #E5F0F8;
    ${mobile({width: "100%"})};
`
const H3 = styled.h3`
    margin-bottom: 150px;
`

const H1 = styled.h1`
    line-height: 2rem;
    font-size: 3.5rem;
    ${mobile2({lineHeight: "2rem", fontSize: "2.5rem"})};
`

const Button = styled.a`
    padding: 15px 25px;
    background: coral;
    color: white;
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    width: 150px;
    &:hover {
      background: black;
    }
`;

const TextWrapper = styled.div`
    padding: 20% 10%
`

const Img = styled.img`
    width: 50%;
    ${mobile({width: "100%"})};
`
const Showcase = () => {
  return (
    <TopShowcase>
        <InnerTopShowcase>
            <TopDesc>
                <TextWrapper className='animate__animated animate__fadeInUp' >
                    <H3>AMAZING CLOTHES FROM FAMOUS BRANDS</H3>
                    <H1>Your Style</H1>
                    <H1>Your Comfort</H1>
                    <Link to='/products/shop' ><Button>Shop Now</Button></Link>
                </TextWrapper>
            </TopDesc> 
            <Img src="/image/man2.jpg" alt="Man" srcset="" /> 
        </InnerTopShowcase>
    </TopShowcase>
)
}

export default Showcase