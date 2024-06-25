import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
const Services = () => {
    return (
        <div style={{margin:"100px 0px"}}>
             <Typography variant='h4' sx={{textAlign:"center", margin:"50px 0px", color:"#1e1e1e"}}>Services</Typography>
            <Grid container spacing={4} >
                <Grid item md={4}>
                    <Box sx={{transition:".4s all",boxShadow: "rgba(253, 130, 22, 0.258) 0px 2px 8px;", display:"flex", justifyContent:"center", alignItems:"center", width:"80%", height:"180px", borderRadius:"12px",':hover': { boxShadow:'rgba(253, 130, 22, 0.31) 2px 2px 8px'}}}>
                        <div style={{display:"grid"}}>
                        <DeliveryDiningIcon fontSize='large' sx={{color:"#ff6700"}} />
                        <Typography variant='h6' sx={{color:"#ef9458"}}>Fast Delivery</Typography>
                        </div>
                    </Box>
                </Grid>

                <Grid item md={4}>
                <Box sx={{transition:".4s all",boxShadow: "rgba(253, 130, 22, 0.258) 0px 2px 8px;", display:"grid", justifyContent:"center", alignItems:"center", width:"80%", height:"180px", borderRadius:"12px", ':hover': { boxShadow:'rgba(253, 130, 22, 0.31) 2px 2px 8px'}}}>
                    <div style={{display:"grid"}}>
                        <LocalDiningIcon fontSize='large' sx={{color:"#ff6700"}} />
                        <Typography variant='h6' sx={{color:"#ef9458"}}>Best Quality</Typography>
                        </div>                   
                     </Box>
                </Grid>

                <Grid item md={4}>
                    <Box sx={{transition:".4s all",boxShadow: "rgba(253, 130, 22, 0.258) 0px 2px 8px;", display:"grid", justifyContent:"center", alignItems:"center", width:"80%", height:"180px", borderRadius:"12px",':hover': { boxShadow:'rgba(253, 130, 22, 0.31) 2px 2px 8px'}}}>
                    <div style={{display:"grid"}}>
                        <FastfoodIcon fontSize='large' sx={{color:"#ff6700"}} />
                        <Typography variant='h6' sx={{color:"#ef9458"}}>Best Taste</Typography>
                        </div>                    
                        </Box>
                </Grid>

            </Grid>
        </div>
    );
};

export default Services;