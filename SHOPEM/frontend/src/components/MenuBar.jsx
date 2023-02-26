import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { Close, Menu } from "@mui/icons-material";
import "animate.css";

const CloseToggle = styled.div`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #fff;
    color: #222;
    padding: .75rem;
    display: flex;
    place-item: center;
    font-size: 2rem;
    cursor: pointer;
`;
const OpenToggle = styled.div`
    position: fixed;
    top: 11%;
    right: 4%;
    background: #fff;
    color: #222;
    padding: .25rem;
    display: flex;
    place-item: center;
    font-size: 2rem;
    cursor: pointer;
`;

const ButtonContainer = styled.a`
    padding: 10px 18px;
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



const NavBar = styled.ul`
    display: inline-block;
    list-style-type: none;
    font-family: "roboto";
    @media screen and (max-width: 600px){
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: rgba(255,255,255, 0.95);
    z-index: 99;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: ${props => props.primary ? "flex" : "none"};
    transition: .2s all ease-in-out;
   };
`;
 const NavCont = styled.div`
    display: block;
 `

const List = styled.li`
    display: inline-block;
    margin: 0 20px;
    padding: 15px 10px; 
    cursor: pointer;
    fontsize: 1.5rem;
    @media screen and (max-width: 600px){
    font-size: 2rem;
    color: #F2F2F2;
    transition: .2s all ease-in-out;
    list-style-type: none;

    &:hover{
        transition: .2s all ease-in-out;
        color: orangered;
     };

     color: black;
    }
`;


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