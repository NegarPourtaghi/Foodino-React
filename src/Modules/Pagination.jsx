import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Pagination = ({currentPage,setCurrentPage,data}) => {

    const PageCounter=(data.foods.length)/3;
    const[Page, setPage]=useState(1);
    
    const NextHandler= (e)=>{
        e.preventDefault();
          setCurrentPage(currentPage+3);
       
    }
  

    const PreviosHandler=()=>{
        setPage( Page-1)
        console.log(Page)

    }
    return (
        <div style={{width:"20%", margin:"80px auto" , display:"flex", justifyContent:"space-evenly",}}>
            <Button size='small' variant='outlined' sx={{borderColor:"#ff6700", color:"#ff6700", ':hover':{bgcolor:"#ff6700", color:"#fff"}}} disabled={Page === PageCounter} onClick={NextHandler}>Next</Button>
            <span>...</span>
            {Page}
            <span>...</span>
                
            
            
            <Button size='small' variant='outlined' sx={{borderColor:"#ff6700", color:"#ff6700", ':hover':{bgcolor:"#ff6700", color:'#fff'}}} disabled={Page === 1}  onClick={PreviosHandler}>Previous</Button>
        </div>
    );
};

export default Pagination;