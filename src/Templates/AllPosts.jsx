import React, { useState } from 'react';
import { GET_ALL_POSTS } from '../Components/GraphQl/Queries';
import { useQuery } from '@apollo/client';
import FoodCard from '../Modules/FoodCard';
import { Grid, Typography } from '@mui/material';
import Pagination from '../Modules/Pagination';
import Spinner from '../Modules/Spinner';

const AllPosts = () => {
    const [food, setFood]=useState();
    const [currentPage, setCurrentPage]=useState(3)
    const {isPending , data, errors}=useQuery(GET_ALL_POSTS , {variables:{skip:currentPage}});
   console.log(data)
 
   return (
           <div>
            <Typography variant='h4' sx={{ textAlign:"center", margin:"50px 0px", color:"#1e1e1e"}}>Foods</Typography>
             <Grid container  sx={{display:"flex", flexWrap:"wrap"}} spacing={4}>
                {
                  !data
                  ?<Spinner />
                  :(data.foodsConnection.edges.map(item => <Grid sx={{display:"flex", justifyContent:"center"}} xs={6} md={4} item  ><FoodCard key={item.id} data={item.node} /> </Grid>))
                  
                }
            </Grid>
            {data &&  <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} /> }
           </div>
           
    );
};

export default AllPosts;