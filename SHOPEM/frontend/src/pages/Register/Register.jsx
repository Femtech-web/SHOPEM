import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { publicRequest } from '../../requestMethods';
import { useNavigate } from 'react-router-dom';
import useMediaQuery  from "@mui/material/useMediaQuery";
import { PersonSharp, 
EmailSharp, 
PasswordSharp } from '@mui/icons-material';
import { FormControl, 
Typography,    
TextField, 
Box } from '@mui/material';
import { Container, Button, headingStyle, labelStyle, iconStyle, textFieldStyle, formStyles } from './style';


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
            sx={textFieldStyle} 
                />
        </FormControl>
        <FormControl sx={formStyles(matchSM)}>
          <Typography variant='h6' my={1} sx={labelStyle}><EmailSharp sx={iconStyle}/>Email</Typography>
          <TextField variant='outlined' 
            type="text" 
            label="Email" 
            name='email'
            onChange={handleChange}
            sx={textFieldStyle}
          />
        </FormControl>
        <FormControl sx={formStyles(matchSM)}>
          <Typography variant='h6' my={1} sx={labelStyle}><PasswordSharp sx={iconStyle}/>Password</Typography>
          <TextField variant='outlined' 
            type="Password" 
            label="Password" 
            name='password'
            onChange={handleChange}
            sx={textFieldStyle}
          />
        </FormControl>
      </Box>
      <Button onClick={handleClick}>Register</Button>
      <Typography mt={2}>Already Registered? <Link to="/Login">Login</Link></Typography>
    </Container>
  )
}

export default Register