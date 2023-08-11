import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { Skeleton } from '@mui/material';
import { SkeletonContainer, LoaderContainer, textStyle, textStyle2 } from './style';


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