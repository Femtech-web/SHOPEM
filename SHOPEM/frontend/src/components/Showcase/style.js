import styled from "styled-components";
import { mobile2, mobile } from "../../responsive";

export const TopShowcase = styled.div`
    padding: 0% 10%;
    margin-top: 0;
    font-family: "roboto";
    margin-bottom: 5%;
    ${mobile({padding: "1.5% 1%"})};
`

export const InnerTopShowcase = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    ${mobile({flexDirection: "column"})};
`;

export const TopDesc = styled.div`
    width: 50%;
    background: #E5F0F8;
    ${mobile({width: "100%"})};
`
export const H3 = styled.h3`
    margin-bottom: 150px;
`

export const H1 = styled.h1`
    line-height: 2rem;
    font-size: 3.5rem;
    ${mobile2({lineHeight: "2rem", fontSize: "2.5rem"})};
`

export const Button = styled.a`
    padding: 15px 25px;
    background: coral;
    color: white;
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    width: 150px;
    &:hover {
      background: black;
    }
`;

export const TextWrapper = styled.div`
    padding: 20% 10%
`

export const Img = styled.img`
    width: 50%;
    ${mobile({width: "100%"})};
`