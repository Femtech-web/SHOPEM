import React, { useState } from 'react';
import "@fontsource/roboto";
import "@fontsource/inter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { Typography, 
Box, 
TextField, 
FormControl} from "@mui/material";
import { Container, TopContainer, Button } from './style';


const ContactPayment = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [nameErr, setNameErr] = useState(false);
    const [nameSuccess, setNameSuccess] = useState(false);
    const cartTotal = useSelector(state => state.cart.total);

    const validate2 = (arg) => {
        setNameSuccess(false);
        if(arg === ""){
            setNameSuccess(false)
            setNameErr(false)
        }else {
            setNameSuccess(true)
            setNameErr(false)
        };
    };

    const validate = (arg) => {
        setNameSuccess(false);
        if(/\d/.test(arg)){
            setNameErr(true);
            setNameSuccess(false);
        } else {
            setNameSuccess(true)
            setNameErr(false)
        };

        if(arg === ""){
            setNameSuccess(false)
            setNameErr(false)
        }
    }

    const handleChange = (e) => {
        const name = e.target.value;
        let timer;
        if(timer){
            clearTimeout(timer);
        };
         timer = setTimeout(validate.apply(null, name), 4000);
         setTimeout(() => {setNameSuccess(false)}, 2000)
    };

    const handleChange2 = (e) => {
        const name = e.target.value;
        let timer;
        if(timer){
            clearTimeout(timer);
        };
         timer = setTimeout(validate2.apply(null, name), 4000);
    };

  return (
    <>
    <TopContainer>
    <Typography variant='h4' sx={{letterSpacing: "0.1rem"}}>Process Order</Typography>
    </TopContainer>
    <Container>
        <Typography variant='h5' my={3} sx={{letterSpacing: "0.4rem"}}>Contact Details</Typography>
        <Box component="form"  autoComplete='off'>
        <FormControl sx={{...!matchSM ? {width: "80%"} : {width: "90%"} }}>
           <Typography variant='h6' my={1}>First Name</Typography>
            <TextField variant='outlined' 
                type="text" 
                label="Firstname" 
                error={nameErr ? true : false}
                helperText={nameErr ? "incorrect entry" : ""}
                color={nameSuccess && "success"}
                required onChange={handleChange}/>
        </FormControl>
        <FormControl sx={{...!matchSM ? {width: "80%"} : {width: "90%"} }}>
            <Typography variant='h6' my={1}>Last Name</Typography>
                <TextField variant='outlined' 
                type="text" 
                label="Lastname" 
                error={nameErr ? true : false}
                helperText={nameErr ? "incorrect entry" : ""}
                color={nameSuccess && "success"}
                required onChange={handleChange}/>
        </FormControl>
        <FormControl sx={{...!matchSM ? {width: "80%"} : {width: "90%"} }}>
            <Typography variant='h6' my={1}>Address</Typography>
                <TextField variant='outlined' 
                type="text" 
                label="Address" 
                error={nameErr ? true : false}
                helperText={nameErr ? "incorrect entry" : ""}
                color={nameSuccess && "success"}
                required onChange={handleChange2}/>
        </FormControl>
        <FormControl sx={{...!matchSM ? {width: "80%"} : {width: "90%"} }}>
            <Typography variant='h6' my={1}>Phone Number</Typography>
                <TextField variant='outlined' 
                type="text" 
                label="Telephone"
                error={nameErr ? true : false}
                helperText={nameErr ? "incorrect entry" : ""}
                color={nameSuccess && "success"}
                required onChange={handleChange2}/>
        </FormControl>
        </Box>
        <form action="https://shopem.onrender.com/create-checkout-session" method="post">
        <input type='hidden' value={cartTotal} name="total"/>
        <Button>Next</Button>
        </form>
    </Container>
    </>
  )
}

export default ContactPayment