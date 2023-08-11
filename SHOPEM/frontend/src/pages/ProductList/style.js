import styled from "styled-components";

export const FilterItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    @media screen and (max-width: 600px){
        flex-direction: column;
    }  
`;

export const SortItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    @media screen and (max-width: 600px){
        flex-direction: column;
    } 
`;

export const FilterTop = styled.div`
    display: flex;
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding: 0% 10% 1%;
    margin-bottom: 6%;
    @media screen and (max-width: 600px){
        margin-bottom: 5%;
        padding:0;
    }
`;

export const formStyles = (match) => {
    return {m: 1, 
    ...!match ? {minWidth: "150px"} 
    : {minWidth: "100px"}
    }
};

export const headStyles = (match) => {
    return {m: 1, 
    ...!match ? {fontSize: "1.5rem"} 
    : {fontSize: "1rem"}}
};