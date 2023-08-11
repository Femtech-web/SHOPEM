import styled from "styled-components";

export const SkeletonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2rem 0;
`;

export const LoaderContainer = styled.div`
    padding: 0 5% 0 3%;
`;

export const textStyle = (matchSM) => { 
    return {
        fontSize: '1rem', 
        width: matchSM ? '20%' : '15%', 
        marginLeft: '1rem'
    }
};

export const textStyle2 = (matchSM) => { 
    return {
        fontSize: '1rem', 
        width: matchSM ? '10%' : '5%', 
        marginLeft: '1rem'
    }
};
