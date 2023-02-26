import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile2 } from "../responsive";
import { Badge } from "@mui/material";
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
    ${mobile2({zIndex: "90"})};
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 10% 4%;
    margin-bottom: 2%;
    background: #1A1C1F;
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 10%;
    transform: translateY(40px);
    display: ${props => props.primary ? "none" : "block"};
    ${mobile2({transform: "translateY(150%)", right: "1%"})};
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
                <h1 style={{letterSpacing: "0.1rem", fontWeight: "900"}}>SHOP<Span>EM</Span></h1>
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
            {!cart ? <ButtonContainer primary={search}>
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
                 />
            </ButtonContainer> : 
            <Cart><Typography variant="h4" 
            sx={{letterSpacing: "0.5rem",...matchSM && {fontSize: "1rem"}}}>
           Shopping Cart({quantity})</Typography></Cart>}
        </Container>
    )
}

export default Navbar;