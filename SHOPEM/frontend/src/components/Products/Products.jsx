import React, { useEffect, useState } from 'react';
import Product from "../Product/Product";
import { Typography, Grid } from '@mui/material';
import SkeletonContainer from '../SkeletonContainer';
import { publicRequest } from '../../requestMethods';
import { Container, headingStyles } from './style';
import "@fontsource/roboto";


const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [filtererdProducts, setFiltererdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
          setIsLoading(true)
          const res = await publicRequest.get(cat ? `/products?category=${cat}` : "/products");

          setProducts(res.data);
          setIsLoading(false);
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

  if(isLoading){
    return <SkeletonContainer />
  }
  

return (
  <>
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
  </>
)
}


export default Products

    