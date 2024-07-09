import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const Pagination = ({currentPage,setCurrentPage,data, ClickHandler, Page}) => {

    const PageCounter=(data.foods.length)/3;
 
    return (
        <div style={{width:"20%", margin:"80px auto" , display:"flex", justifyContent:"space-evenly",}}>
            <Button size='small' name="Next" variant='outlined' sx={{borderColor:"#ff6700", color:"#ff6700", ':hover':{bgcolor:"#ff6700", color:"#fff"}}} disabled={Page === PageCounter} onClick={ClickHandler}>Next</Button>
            <span>...</span>
            {Page}
            <span>...</span>
                
            
            
            <Button size='small' name="Previous" variant='outlined' sx={{borderColor:"#ff6700", color:"#ff6700", ':hover':{bgcolor:"#ff6700", color:'#fff'}}} disabled={Page === 1}  onClick={ClickHandler}>Previous</Button>
        </div>
    );
};

export default Pagination;