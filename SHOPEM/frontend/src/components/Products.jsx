import React, { useEffect, useState } from 'react';
import Product from "./Product";
import { Typography, Grid } from '@mui/material';
import styled from "styled-components";
import { publicRequest } from '../requestMethods';
import { mobile2 } from "../responsive";
import "@fontsource/roboto";

const Container = styled.div`
   padding: 0 10%;
   font-family: "roboto";
   ${mobile2({padding: "0 1% 0 2%"})};
`;

const headingStyles = {
  fontSize: "1.8rem",
  marginBottom: "4rem",
  borderLeft:" 5px solid coral",
  padding: "10px 0px 10px 2rem"
}; 

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filtererdProducts, setFiltererdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
          const res = await publicRequest.get(cat ? `/products?category=${cat}` : "/products");

          setProducts(res.data);
      } catch (err) {}
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFiltererdProducts(products.filter((item) => {
      return Object.entries(filter).every(([key, value]) => {
        return item[key].includes(value)
      })
    } ))
  }, [cat, products, filter]);


  useEffect(() => {
    if(sort === 'newest'){
      setFiltererdProducts(prev => [...prev].sort
        ((a,b) => a.createdAt - b.createdAt))
    } else if(sort === 'asc'){
      setFiltererdProducts(prev => [...prev].sort
        ((a,b) => a.price - b.price))
    } else{
      setFiltererdProducts(prev => [...prev].sort
        ((a,b) => b.createdAt - a.createdAt))
    }
  }, [sort]);
  
  return (
    <Container>
      <Typography component="h3"
        sx={headingStyles}>
            {cat ? cat : "New Collections"}
      </Typography>
      <Grid container  >
        {cat ? filtererdProducts.map((item) => {
          return <Grid lg={3} md={4} xs={6} sx={{
          pr: 2,
          pb: 2,
        }}>
          <Product key={item.id} item={item}/>
        </Grid>
        }) : products.slice(0, 12).map((item) => {
          return <Grid lg={3} md={4} xs={6} sx={{
          pr: 2,
          pb: 2,
        }}>
          <Product key={item.id} item={item}/>
        </Grid>
        })}
      </Grid>
    </Container>
  )
}


export default Products

    