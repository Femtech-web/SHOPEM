import React from 'react';
import { Link } from "react-router-dom";
import { TopShowcase, InnerTopShowcase, TopDesc,
H3, H1, Img, Button, TextWrapper } from './style';
import "animate.css";
import "@fontsource/roboto/700.css";


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