import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { publicRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import useMediaQuery  from "@mui/material/useMediaQuery";
import { PersonSharp, 
EmailSharp, 
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
    width: 120px;
    text-align: center;
    &:hover {
      background: black;
      color: white;
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

const formStyles = (match) => {
  return {...!match ? 
    {width: "80%"} : {width: "100%"}, 
    margin: "8px 0",  
    ...!match ? {marginLeft: "10%"} : {marginLeft: "0"}
  }
}

const Register = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    
  const handleChange = (e) => {
    setUserDetails(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = (e) => {
    const sendDetails = async () => {
      try {
        const res = await publicRequest.post('/auth/register', userDetails);

        console.log(res);
        if(res){
          navigate('/Login');
        }
      }
      catch {}
    }
    sendDetails();
  };

  console.log(userDetails);
  return (
    <Container>
        <Typography variant='h4' sx={headingStyle}>Register</Typography>
        <Box component='form' autoComplete="off">
            <FormControl sx={formStyles(matchSM)} >
                <Typography variant='h6' my={1} sx={labelStyle}><PersonSharp sx={iconStyle}/>Full Name</Typography>
                    <TextField variant='outlined' 
                        type="text" 
                        label="FullName" 
                        name='fullname'
                        onChange={handleChange}
                         sx={textFieldStyle} />
            </FormControl>
            <FormControl sx={formStyles(matchSM)}>
            <Typography variant='h6' my={1} sx={labelStyle}><EmailSharp sx={iconStyle}/>Email</Typography>
                    <TextField variant='outlined' 
                        type="text" 
                        label="Email" 
                        name='email'
                        onChange={handleChange}
                        sx={textFieldStyle}/>
            </FormControl>
            <FormControl sx={formStyles(matchSM)}>
            <Typography variant='h6' my={1} sx={labelStyle}><PasswordSharp sx={iconStyle}/>Password</Typography>
                    <TextField variant='outlined' 
                        type="Password" 
                        label="Password" 
                        name='password'
                        onChange={handleChange}
                        sx={textFieldStyle}/>
            </FormControl>
    </Box>
    <Button onClick={handleClick}>Register</Button>
    <Typography mt={2}>Already Registered? <Link to="/Login">Login</Link></Typography>
    </Container>
  )
}

export default Register