import styled from "styled-components";
import { mobile2 } from "../../responsive";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 5vh;
  margin-bottom: ${props => props.cart ? "0": "4%"};
  margin-top: ${props => props.cart ? "2%": "0%"};
  padding: 1% 0;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    height: 100%;
    background: black;
    opacity: 0.5;
`;

export const H4 = styled.h4`
    padding-right: 2%;
    ${mobile2({paddingRight: 0})};
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  color: #F2F2F2;
`;