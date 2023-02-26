import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};


export const mobile2 = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
