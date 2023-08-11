import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "roboto";
  height: 100vh;
  background: lavender;
  padding: 0 10%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background: transparent;
    color: black;
    margin: 20px 0 10px;
    display: inline-block;
    border: 1px solid black;
    cursor: pointer;
    width: 120px;
    text-align: center;
    &:hover {
      background: black;
      color: white;
    }
`;

export const headingStyle ={
    letterSpacing: '0.2rem',
    marginBottom: "15px"
}
export const labelStyle ={
    display: "flex", 
    width: "50%", 
    alignItems:"center",
     textAlign: "left"
};

export const iconStyle = {
    marginRight: "5px",
};

export const textFieldStyle = {
    marginTop: "5px"
};

export const formStyles = (match) => {
  return {...!match ? 
    {width: "80%"} : {width: "100%"}, 
    margin: "8px 0",  
    ...!match ? {marginLeft: "10%"} : {marginLeft: "0"}
  }
}