import styled from "styled-components";
import { mobile2 } from "../../responsive";

export const ProductContainer = styled.div`
  display: flex;
  ${mobile2({flexDirection: "column"})}
`;

export const Img = styled.img`
  width: 50%;
  ${mobile2({width: "100%"})}
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 5% 0 0 5%;
`;

export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;
`;

export const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.a`
    padding: 15px 25px;
    background: coral;
    color: white;
    margin-top:   10px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    width: 150px;
    &:hover {
      background: black;
    }
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2% 0;
  justify-content: space-between;
  ${mobile2({ width: "100%" })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const alertStyles = {
  position: "fixed",
  width: "70%",
};