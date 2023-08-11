import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import Advert from '../../components/Advert/Advert';
import Footer from '../../components/Footer/Footer';
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery  from "@mui/material/useMediaQuery";
import { FormControl, MenuItem, Select, InputLabel, Typography } from '@mui/material';
import { FilterItems, SortItems, FilterContainer, FilterTop, formStyles, headStyles } from './style';

const ProductList = () => {
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState('new');
    const handleChange = (e) => {
        const value = e.target.value;
        setFilter(prev => ({...prev,[e.target.name]: value}))
    };

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    useEffect(() => {
        scroll.scrollToTop({
          smooth: true
        })
    })

  return (
    <>
         <Navbar />
         <Advert />
        <FilterContainer>
        <FilterItems>
            <Typography variant="h6" 
            component="h2" mb={1}
            sx={headStyles(matchSM)}
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
            sx={headStyles(matchSM)}
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