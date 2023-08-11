import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { Close, Menu } from "@mui/icons-material";
import "animate.css";
import { CloseToggle, OpenToggle, ButtonContainer,
NavBar, NavCont, List } from "./style";


const MenuBar = ({handleClick, navToggled}) => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const animation = 'animate__animated animate__fadeIn';
    
  return (
    <NavCont>
        <NavBar primary={navToggled}>
          <Link to='/' style={{color: "#F2F2F2"}}><List className={animation}>Home</List></Link>  
          <Link style={{color: "#F2F2F2"}}><List className={animation}>Categories</List></Link> 
          <Link style={{color: "#F2F2F2"}}><List className={animation}>About Us</List></Link> 
          <Link style={{color: "#F2F2F2"}}><List className={animation}>Support</List></Link> 
            {matchSM && <Link style={{color: "#F2F2F2"}} to='/Login'><List><ButtonContainer>Login</ButtonContainer></List></Link>}
            {matchSM && <CloseToggle onClick={handleClick}><Close /></CloseToggle>}
        </NavBar>
        {matchSM && <OpenToggle  onClick={handleClick}><Menu /></OpenToggle>}
    </NavCont>
  )
}

export default MenuBar