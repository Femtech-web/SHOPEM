import styled from "@emotion/styled";
import { mobile2 } from '../../responsive';

export const Container = styled.div`
    margin-top: 5%;
    font-family: "roboto";
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 3%;
    margin-bottom: 2%;
    ${mobile2({padding: "3% 5% 3% 3%"})}
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 0 3%;
`;

export const RowContainer = styled.div`
    display: flex;
    min-height: 150px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 2% 0;
`;

export const Img = styled.img`
    width: 15%;
    ${mobile2({width: "50%"})}
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const IconContainer = styled.span`
    padding: 5px 3px;
    background: lavender;
`;

export const CheckoutContainer = styled.div`
    display: flex;
    font-family: "roboto";
    justify-content: space-between;
    align-items: center;
    padding: 2% 5%;
    ${mobile2({flexDirection: "column"})}
`;

export const CheckoutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 0;
`;

export const ButtonCart = styled.a`
    padding: 10px 10px;
    color: white;
    background: #1A1C1F;
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    width: 100%;
    &:hover {
      background: coral;
    };
`;

export const ShippingButton = styled.a`
    padding: 10px 10px;
    color: black;
    border: 1px solid rgba(0,0,0,0.5);
    margin-top:   10px;
    display: inline-block;
    text-align: center;
    &:hover {
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
    };
    ${mobile2({marginBottom: "10%"})}
`;

export const CheckoutBox = styled.div`
    min-width: 250px;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 10px;
`;

export const Nocart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const headingStyles = {
    textAlign: "center",
    marginBottom: "20px"
};