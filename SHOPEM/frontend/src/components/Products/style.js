import styled from "styled-components";
import { mobile2 } from "../../responsive";

export const Container = styled.div`
  padding: 0 10%;
  font-family: "roboto";
  ${mobile2({padding: "0 1% 0 2%"})};
`;

export const headingStyles = {
  fontSize: "1.8rem",
  marginBottom: "4rem",
  borderLeft:" 5px solid coral",
  padding: "10px 0px 10px 2rem"
}; 