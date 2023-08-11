import styled from "styled-components";

export const BrandContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: "roboto";
`;

export const Img = styled.img`
    width: 65%; 
`;

export const Img2 = styled.img`
    width: 20%; 
`;

export const H3 = styled.h3`
    font-size: 2.2rem;
    padding: 2% 5% 1%;
    line-height: 3rem;
    font-weight: 700;
`;

export const P = styled.p`
    color: #8f8f8f;
    padding-top: 2rem;
    letter-spacing: 0.2rem
`;

export const logoStyles = {
    '&:hover':{transform: "scale(1.5)"},
    transition:" all 500ms ease-out ",
};
