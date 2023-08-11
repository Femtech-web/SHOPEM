import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import { FacebookRounded, Twitter, Instagram  } from '@mui/icons-material';
import "@fontsource/roboto";
import { Container, TopContainer, Img, Text, Span, MenuItem, Menu, 
gridStyles, headingStyles, Button } from './style';


const Footer = () => {
  return (
    <Container>
        <TopContainer>
            <Grid container sx={{
                padding: "3% 4%",
                background: "#E5F0F8",
                }}>
                <Grid lg={6} xs={12}>
                    <Img src="/image/many.jpg" alt="" />
                </Grid>
                <Grid lg={6} xs={12} sx={gridStyles} >
                    <Typography component="h3" sx={headingStyles}>
                        SUBSCRIBE NOW TO OUR NEWSLETTER TO GET 10% DISCOUNT ON EVERY PURCHASE
                    </Typography>
                    <TextField variant='outlined' label="Your Email" sx={{
                        width:"80%",
                    }} />
                    <Button>SUBSCRIBE</Button>
                </Grid>
            </Grid>
        </TopContainer>
        <Grid container  sx={{
                background: "#1A1C1F",
                padding: "5% 8%",
                color: "white",
             }}>
            <Grid lg={3}>
                <h1>SHOP<Span>EM</Span></h1>
                <Typography component="p" mb={3}>Buy the Best and Wear the Best </Typography>
                <Menu>
                    <FacebookRounded />
                </Menu>
                <MenuItem>
                    <Instagram />
                </MenuItem>
                <MenuItem>
                    <Twitter />
                </MenuItem>
            </Grid>
            <Grid lg={3}>
            <Typography px={1.5} py={1.5} my={2} variant="h5">Support Center</Typography>
            <Typography px={1.5} py={1.5}>Customer Support</Typography>
            <Typography px={1.5} py={1.5}>Copyright</Typography>
            <Typography px={1.5} py={1.5}>Popular Campaign</Typography>
            </Grid>
            <Grid lg={3}>
            <Typography px={1.5} py={1.5} my={2} variant="h5">Privacy Policy</Typography>
            <Typography px={1.5} py={1.5}>Return Policy</Typography>
            <Typography px={1.5} py={1.5}>Terms and Condition</Typography>
            <Typography px={1.5} py={1.5}>site Map</Typography>
            </Grid>
            <Grid lg={3}>
            <Typography px={1.5} py={1.5} my={2} variant="h5">Press Inquires</Typography>
            <Typography px={1.5} py={1.5}>Social Media Directives</Typography>
            <Typography px={1.5} py={1.5}>Permission</Typography>
            <Typography px={1.5} py={1.5}>Requests</Typography>
            </Grid>
            <Text>@Shopem 2022. All right Reserved</Text>
        </Grid>
    </Container>
  )
}

export default Footer