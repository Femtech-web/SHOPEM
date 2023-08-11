import styled from "styled-components";

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  font-size: 14px;
  cursor: pointer;
  color: black;
  width: 30px;
  height: 30px;
  background: #E5F0F8;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px){
    top: 1px;
  }
`;

export const H4 = styled.p`
  color: #8f8f8f;
  font-size: 0.9rem;
  width: fit-content;
  text-decoration: none;

`;
export const Img = styled.img`
    width: 100%;
    text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  @media screen and (max-width: 600px){
    position: relative;
  }
`;

export const alertStyles = {
  position: "fixed",
  width: "70%",
};

export const wrapperStyles = (match) => {
  return {
    display: "flex",
    flexDirection: "column",
    ...!match && {position: "relative"},
    maxWidth: "350px"
   }
};

export const buttonStyles = (match) => {
  return {
    ...match && {width: "100%"},
    ...match && {textAlign: "left" },
    marginTop: "15px",
    textAlign: "center",
    background: "#1A1C1F",
    '&:hover': {
      background: "coral"
    }
   }
};
