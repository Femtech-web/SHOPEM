import React from 'react';
import { Grid } from "@mui/material";
import "@fontsource/roboto/700.css";
import { BrandContainer, Img, Img2, H3, logoStyles, P } from './style';

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
                <Img2 src="/image/louis.png" alt="" />
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