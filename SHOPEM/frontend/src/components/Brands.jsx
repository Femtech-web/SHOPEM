import React from 'react';
import styled from "styled-components";
import { Grid } from "@mui/material";
import "@fontsource/roboto/700.css";


const BrandContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: "roboto";
`;

const Img = styled.img`
    width: 65%; 
`;

const Img2 = styled.img`
    width: 20%; 
`;

const H3 = styled.h3`
    font-size: 2.2rem;
    padding: 2% 5% 1%;
    line-height: 3rem;
    font-weight: 700;
`;

const P = styled.p`
    color: #8f8f8f;
    padding-top: 2rem;
    letter-spacing: 0.2rem
`;

const logoStyles = {
    '&:hover':{transform: "scale(1.5)"},
     transition:" all 500ms ease-out ",
    };

const Brands = () => {
  return (
    < BrandContainer>
        <H3>CHOOSE YOUR STYLE TOGETHER WITH</H3>
        <Grid container sx={{
                padding: "4% 10%",
            }}>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img src="/image/prada.png" alt="" />
                <P>Prada</P>
            </Grid>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img src="/image/zara.png" alt="" />
                <P>Zara</P>
            </Grid>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img2 src="/image/Louis.png" alt="" />
                <P>Levi's</P>
            </Grid>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img2 src="/image/gucci.png" alt="" />
                <P>Gucci</P>
            </Grid>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img2 src="/image/louis.png" alt="" />
                <P>Louis Vuitton</P>
            </Grid>
            <Grid lg={2} xs={4} sx={logoStyles}>
                <Img2 src="/image/versace.png" alt="" />
                <P>Versace</P>
            </Grid>
        </Grid>
    </BrandContainer>
  )
}

export default Brands