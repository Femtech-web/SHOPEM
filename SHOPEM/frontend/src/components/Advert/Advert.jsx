import React from 'react'
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { Container, Text, Overlay, H4 } from './style';

const Advert = ({cart}) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container cart={cart}>
        <Text>
            <H4>Get 40% Discount on Every Purchase Now</H4>
            {!matchSM && <H4>Get 40% Discount on Every Purchase Now</H4>}
            {!matchSM && <H4>Get 40% Discount on Every Purchase Now</H4>}
        </Text>
        <Overlay></Overlay>
    </Container>
  )
}

export default Advert