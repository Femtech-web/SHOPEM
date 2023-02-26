import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { PersonSharp,  
PasswordSharp } from '@mui/icons-material';
import { FormControl, 
Typography,    
TextField, 
Box } from '@mui/material';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  height: 100vh;
  background: lavender;
  padding: 0 10%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: transparent;
  color: black;
  margin: 20px 0 10px;
  display: inline-block;
  border: 1px solid black;
  cursor: pointer;
  width: 100px;
  text-align: center;
  &:hover {
    background: black;
    color: white
  }
`;

const headingStyle ={
  letterSpacing: '0.2rem',
  marginBottom: "15px"
}
const labelStyle ={
  display: "flex", 
  width: "50%", 
  alignItems:"center",
  textAlign: "left"
};

const iconStyle = {
  marginRight: "5px",
};

const textFieldStyle = {
  marginTop: "5px"
};

const Login = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, {email, password});
  }

  return (
    <Container>
        <Typography variant='h4' sx={headingStyle}>Login</Typography>
        <Box component='form' autocomplete="off">
            <FormControl sx={{...!matchSM ? 
            {width: "80%"} : {width: "100%"}, 
            margin: "8px 0",  
            ...!matchSM ? {marginLeft: "10%"} : {marginLeft: "0"}}} >
                <Typography variant='h6' my={1} sx={labelStyle}><PersonSharp sx={iconStyle}/>Email</Typography>
                    <TextField variant='outlined' 
                        type="email" 
                        label="email" 
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                         sx={textFieldStyle} />
            </FormControl>
            <FormControl sx={{...!matchSM ? 
            {width: "80%"} : {width: "100%"},
             margin: "8px 0",
              ...!matchSM ? {marginLeft: "10%"} : {marginLeft: "0"}}}>
            <Typography variant='h6' my={1} sx={labelStyle}><PasswordSharp sx={iconStyle}/>Password</Typography>
                    <TextField variant='outlined' 
                        type="Password" 
                        label="Password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        sx={textFieldStyle}/>
            </FormControl>
    </Box>
    <Button onClick={handleClick}>Login</Button>
    <Typography mt={2}>New User? <Link to="/Register" >Create Account</Link></Typography>
    </Container>
  )
}

export default Login;