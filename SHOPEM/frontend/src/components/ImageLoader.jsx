import React from 'react';
import { Skeleton } from '@mui/material';

const ImageLoader = () => {
  return (
    <div>
        <Skeleton variant='rectangular' sx={{width: '100%'}} height={250} animation='wave'/>
    </div>
  )
}

export default ImageLoader