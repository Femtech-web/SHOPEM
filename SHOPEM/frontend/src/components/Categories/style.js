import styled from "styled-components";
import {mobile2} from "../../responsive";

export const CategoryWrapper = styled.div`
  padding: 0 10% 7%;
  font-family: "roboto";
  ${mobile2({padding: "0 1% 7%"})};
`;

export const AllContainer = styled.div`
  display: flex;
  justify-content: space-evenly;export 
  align-items: center;
  ${mobile2({flexDirection: "column"})}
`;

export const Container = styled.div`
  position: relative;
  min-height: 200px;
  flex: 1;
  &:hover {
        transform: scale(1.2);
    };
    transition: all 500ms ease-out ;
`;

export const H2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.5rem;
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  color: #F2F2F2;
`;

export const Button = styled.a`
    padding: 15px 25px;
    background: black;
    margin-top:  10px;
    color: white;
    display: inline-block;
    text-align: center;
    width: 100px;
    &:hover {
      background: coral;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 98%;
    z-index: 5;
    height: 100%;
    background: black;
    opacity: 0.5;
`;

export const Img = styled.img`
    width: 98%;
`;

export const wrapperStyles = {
  fontSize: "1.8rem",
  marginBottom: "4rem",
  borderLeft:" 5px solid coral",
  padding: "10px 0px 10px 2rem"
};