import styled from "styled-components";
import { mobile2 } from '../../responsive';

export const Container = styled.div`
   font-family: "roboto";
   position: relative;
`;

export const TopContainer = styled.div`
   padding: 10% 10% 5%;
   ${mobile2({padding: "10% 1% 5%"})};
`;

export const Img = styled.img`
    width: 85%;
`;

export const Text = styled.p`
    position: absolute,
    bottom: 0;
    letter-spacing: 0.05rem
`;

export const Span = styled.span`
    color: coral;
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  color: white;
`;

export const Menu = styled(MenuItem)`
    margin-left: 0;
`;

export const gridStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    mt: 4
};

export const headingStyles = {
    fontWeight: 600,
    fontSize: "1.3rem",
    mb: 2
};

export const Button = styled.a`
    padding: 15px 25px;
    background: coral;
    color: white;
    margin-top: 20px;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
      background: black;
    }
`;
