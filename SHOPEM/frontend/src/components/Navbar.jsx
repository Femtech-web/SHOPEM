/* eslint-disable no-undef */

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile2 } from "../responsive";
import { Badge, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { TextField, InputAdornment, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto";
import MenuBar from "./MenuBar";
import { SearchOutlined,
ShoppingCartOutlined, 
PersonOutlineOutlined,
FavoriteBorderOutlined,
} from "@mui/icons-material";


const Container = styled.div`
    position: relative;
    font-family: "roboto";
    flex-direction: column;
    margin: 0;
    display: flex;
    justify-content: center;
    color: #F2F2F2;
    ${mobile2({zIndex: "90", width: "100%"})};
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 10% 4%;
    background: #1A1C1F;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  color: white;
`;

const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: relative;
    ${mobile2({padding: "1% 0"})}
`;

const Span = styled.span`
    color: coral;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const cartStyles = (matchSM) => {
    return {
        letterSpacing: "0.5rem", 
        paddingTop: '2%', 
        ...matchSM && {fontSize: "1rem"}
    }
};

const logoStyles = {
    letterSpacing: "0.1rem", 
    fontWeight: "900", 
    color: 'white'
};

const Navbar = ({search, cart}) => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const user = useSelector(state => state.user.currentUser);
    const quantity = useSelector(state => state.cart.quantity);

    const [navToggled, setNavToggled] = useState(false);
    const handleClick = (e) => {
       setNavToggled(prev =>  !navToggled);
    };

    return (
        <Container>
            <TopContainer>
                <Link to='/' style={{textDecoration:'none'}}>
                    <h1 style={logoStyles}>SHOP<Span>EM</Span></h1>
                </Link>
                <MenuBar handleClick={handleClick} navToggled={navToggled}/>
                <IconContainer >
                <Link to='/Login'>
                    <MenuItem>
                        {user !== null ? <Badge color="success" overlap="circular" variant="dot" 
                            sx={{
                                ...matchSM && {display: "none"}
                            }}>
                            <PersonOutlineOutlined 
                            sx={{
                                ...matchSM && {display: "none"}
                            }} />
                        </Badge> : <PersonOutlineOutlined 
                            sx={{
                                ...matchSM && {display: "none"}
                            }} />
}
                    </MenuItem>
                </Link>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary" showZero>
                            <FavoriteBorderOutlined />
                        </Badge>
                    </MenuItem>
                    <Link to='/cart'>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary" showZero>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </IconContainer>
            </TopContainer>
            {!cart 
            ? <Grid container sx={{padding: '4% 2%'}} justifyContent={matchSM ? 'center' : 'end'}>
                <Grid item sm={3} xs={11}>
                    <TextField id="outlined-basic"
                        label="Search" 
                        variant="outlined" size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        <SearchOutlined />
                                    </InputAdornment>
                                ),
                            }}
                        fullWidth
                    />
                </Grid>
            </Grid> :
            <Cart><Typography variant="h4" 
            sx={cartStyles(matchSM)}>
           Shopping Cart({quantity})</Typography></Cart>}
        </Container>
    )
}

export default Navbar;