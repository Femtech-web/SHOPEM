/* eslint-disable no-undef */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { TextField, InputAdornment, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto";
import MenuBar from "../MenuBar/MenuBar";
import { SearchOutlined,
ShoppingCartOutlined, 
PersonOutlineOutlined,
FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Container, TopContainer, MenuItem, Cart, Span,
IconContainer, cartStyles, logoStyles } from "./style";


const Navbar = ({search, cart}) => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const user = useSelector(state => state.user.currentUser);
    const quantity = useSelector(state => state.cart.quantity);
    console.log(matchSM);

    const [navToggled, setNavToggled] = useState(false);
    const handleClick = (e) => {
       setNavToggled(prev =>  !prev);
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
                            }} />}
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
            ? <Grid container sx={{padding: '3%'}} justifyContent={matchSM ? 'center' : 'end'}>
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