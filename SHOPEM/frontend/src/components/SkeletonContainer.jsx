import React from 'react';
import styled from "styled-components";
import { mobile2 } from "../responsive";
import { Skeleton, Grid } from '@mui/material';



const Container = styled.div`
   padding: 0 10%;
   font-family: "roboto";
   ${mobile2({padding: "0 1% 0 2%"})};
`;



const SkeletonSole = () => (
  <div>
    <Skeleton variant='rectangular' sx={{ width: '95%'}} height={100} animation='wave' />
    <Skeleton variant='text' sx={{ fontSize: '1rem', width: '50%'}}  animation='wave' />
    <Skeleton variant='text' sx={{ fontSize: '1rem', width: '88%'}}  animation='wave' />
</div>
);


const times = [1, 2, 3, 4, 5, 6, 7, 8];

const SkeletonContainer = () => {
  return (
    <Container>
      <Grid container  >
        {times.map((time) => (
          <Grid lg={3} md={4} xs={6} sx={{
            pr: 2,
            pb: 2,
          }}>
            <SkeletonSole key={time} />
          </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default SkeletonContainer