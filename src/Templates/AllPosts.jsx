import React, { useEffect, useState } from 'react';
import { GET_ALL_POSTS_3 } from '../Components/GraphQl/Queries';
import { useQuery } from '@apollo/client';
import FoodCard from '../Modules/FoodCard';
import { Button, Grid, Typography } from '@mui/material';
import Pagination from '../Modules/Pagination';
import Spinner from '../Modules/Spinner';
import { Heading } from '../Styles/Style';

const AllPosts = () => {
    const [food, setFood]=useState();
    const [currentPage, setCurrentPage]=useState(0);
    const[Page, setPage]=useState(1);
    const {isPending , data, errors}=useQuery(GET_ALL_POSTS_3 , {variables:{skip:currentPage}});
   console.log(data)

   const ClickHandler = (e)=>{
    e.preventDefault();
    if(e.target.name ==="Next"){
      setPage(Page => Page+1)
      setCurrentPage(currentPage+3)

    }else{
      setPage(Page => Page-1)
      setCurrentPage(currentPage-3)


    }
}

   return (
           <div>
            <Heading >Foods</Heading>
             <Grid container  sx={{display:"flex", flexWrap:"wrap"}}  spacing={{ xs:2,sm:2, md: 4 ,lg:4}}>
                {
                  !data
                  ?<Spinner />
                  :(data.foodsConnection.edges.map(item => <Grid item sx={{display:"flex", justifyContent:"center"}} xs={12} sm={4} md={4} lg={4}   ><FoodCard key={item.id} data={item.node} /> </Grid>))
                  
                }
            </Grid>
            {data &&  <Pagination Page={Page} ClickHandler={ClickHandler} currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} /> }
           </div>
           
    );
};

export default AllPosts;