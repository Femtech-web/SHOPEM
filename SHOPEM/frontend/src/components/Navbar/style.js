import styled from "styled-components";
import { mobile2 } from "../../responsive";

export const Container = styled.div`
    position: relative;
    font-family: "roboto";
    flex-direction: column;
    margin: 0;
    display: flex;
    justify-content: center;
    color: #F2F2F2;
    ${mobile2({zIndex: "90", width: "100%"})};
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 10% 4%;
    background: #1A1C1F;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  color: white;
`;

export const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    position: relative;
    ${mobile2({padding: "1% 0"})}
`;

export const Span = styled.span`
    color: coral;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const cartStyles = (matchSM) => {
    return {
        letterSpacing: "0.5rem", 
        paddingTop: '2%', 
        ...matchSM && {fontSize: "1rem"}
    }
};

export const logoStyles = {
    letterSpacing: "0.1rem", 
    fontWeight: "900", 
    color: 'white'
};