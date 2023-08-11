import styled from "styled-components";

export const TopContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 3% 5%;
margin-bottom: 2%;
color: white;
width: 90%;
font-family: "inter";
overflow: hidden;
background: #1A1C1F;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "roboto";
    padding-left: 5%;
`;

export const Button = styled.button`
    padding: 10px 15px;
    background: coral;
    color: white;
    margin: 50px 0 10px;
    display: inline-block;
    border: none;
    cursor: pointer;
    text-align: center;
    width: 100px;
    &:hover {
      background: black;
    }
`;