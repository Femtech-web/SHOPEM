import React, { useState } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { FormControl, MenuItem, Select, InputLabel, Typography } from '@mui/material';


const FilterItems = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    @media screen and (max-width: 600px){
        flex-direction: column;
    }  
`;

const SortItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    @media screen and (max-width: 600px){
        flex-direction: column;
    } 
`;

const FilterTop = styled.div`
    display: flex;
`;

const FilterContainer = styled.div`
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

const formStyles = (match) => {
    return {m: 1, 
    ...!match ? {minWidth: "150px"} 
    : {minWidth: "100px"}}
};

const ProductList = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState('new');
    const handleChange = (e) => {
        const value = e.target.value;
        setFilter(prev => ({...prev,[e.target.name]: value}))
    };

    console.log(filter);
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
  return (
    <>
         <Navbar />
         <Advert />
        <FilterContainer>
        <FilterItems>
            <Typography variant="h6" 
            component="h2" mb={1}
            >Filter Products:</Typography>
            <FilterTop>
                <FormControl sx={formStyles(matchSM)} 
                    size="small">
                    <InputLabel id="Color-label">Color</InputLabel>
                    <Select
                        id="Color-label"
                        name='color'
                        label="Color"
                        onChange={handleChange} 
                    >
                        <MenuItem value={"black"}>black</MenuItem>
                        <MenuItem value={"white"}>white</MenuItem>
                        <MenuItem value={"red"}>red</MenuItem>
                        <MenuItem value={"green"}>green</MenuItem>
                        <MenuItem value={"blue"}>blue</MenuItem>
                        <MenuItem value={"blue"}>yellow</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={formStyles(matchSM)} 
                    size="small">
                    <InputLabel id="Size-label">Size</InputLabel>
                    <Select
                        id="Size-label"
                        name='size'
                        label="Size"
                        onChange={handleChange} 
                    >
                        <MenuItem value={"SM"}>SM</MenuItem>
                        <MenuItem value={"MD"}>MD</MenuItem>
                        <MenuItem value={"LG"}>LG</MenuItem>
                        <MenuItem value={"XL"}>XL</MenuItem>
                        <MenuItem value={"XXL"}>XXL</MenuItem>
                    </Select>
                </FormControl>
            </FilterTop>
        </FilterItems>

        <SortItems>
            <Typography variant="h6" 
            component="h2" mb={1}
            >Sort Products:</Typography>
            <FormControl sx={formStyles(matchSM)} 
                size="small">
                <InputLabel id="Sort-label">Sort</InputLabel>
                <Select
                    id="Sort-label"
                    name='sort'
                    label="Sort"
                    onChange={(e) => setSort(e.target.value)} 
                >
                    <MenuItem value={"asc"}>asc</MenuItem>
                    <MenuItem value={"new"}>new</MenuItem>
                    <MenuItem value={"price"}>price</MenuItem>
                </Select>
            </FormControl>
        </SortItems>
    </FilterContainer>
    <Products cat={cat} sort={sort} filter={filter}/>
    <Footer />
    </>
  )
}

export default ProductList