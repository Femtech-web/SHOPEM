import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { Skeleton } from '@mui/material';


const SkeletonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0;
`;

const LoaderContainer = styled.div`
    padding: 0 5% 0 3%;
`;

const textStyle = (matchSM) => { 
    return {
        fontSize: '1rem', 
        width: matchSM ? '20%' : '15%', 
        marginLeft: '1rem'
    }
};

const textStyle2 = (matchSM) => { 
    return {
        fontSize: '1rem', 
        width: matchSM ? '10%' : '5%', 
        marginLeft: '1rem'
    }
};

export const SkeletonSole = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <SkeletonContainer>
            <Skeleton variant='rectangular' sx={{ width: matchSM ? '50%': '20%'}} height={150} animation='wave' />
            <Skeleton variant='text' sx={textStyle(matchSM)}  animation='wave' />
            <Skeleton variant='text' sx={textStyle2(matchSM)}  animation='wave' />
        </SkeletonContainer>
    ) 
};

const CartLoader = () => {
    const quantity = useSelector((state) => state.cart.quantity)
    const quantities = Array(quantity).fill(1);
  
    return (
    <LoaderContainer>
        {quantities.map((index) => (
            <SkeletonSole key={index} />
        ))}
    </LoaderContainer>
  )
}

export default CartLoader