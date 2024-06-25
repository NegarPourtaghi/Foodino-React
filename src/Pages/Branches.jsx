import React from 'react';
import branch1 from '../assets/1.png'
import branch2 from '../assets/2.png'
import branch3 from '../assets/3.png'
import branch4 from '../assets/عکس.png'
import { Grid, Typography } from '@mui/material';
import Chef from '../assets/chef.jpg'

const Branches = () => {
    return (
        <div>
             <div style={{backgroundImage:`url(${Chef})`, width:"100%", height:"400px"}}>
                <div style={{backgroundColor:"#0f0f0fc7", width:'100%', height:"100%", alignItems:"center",display:"flex", justifyContent:"center"}}>
                    <Typography variant='h3' sx={{textAlign:"center", color:"#fff" }}> Our Branches</Typography>
                </div>
                
            </div>
            <div style={{width:"80%", marginTop:"50px"}}>
                <Grid container sx={{ transition:".5s all", boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} md={6}>
                        <img src={`${branch1}`} alt="Branche1" style={{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px",height:"100%"}} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center"}}>
                            <Typography variant='h4'>Houston</Typography>
                            <Typography variant='h6'>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} md={6}>
                        <img src={`${branch2}`} alt="Branche1" style={{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px",height:"100%"}} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center"}}>
                            <Typography variant='h4'>Houston</Typography>
                            <Typography variant='h6'>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} md={6}>
                        <img src={`${branch3}`} alt="Branche1" style={{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px",height:"100%"}} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center"}}>
                            <Typography variant='h4'>Houston</Typography>
                            <Typography variant='h6'>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} md={6}>
                        <img src={`${branch4}`} alt="Branche1" style={{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px",height:"100%"}} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center"}}>
                            <Typography variant='h4'>Houston</Typography>
                            <Typography variant='h6'>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                        </div>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Branches;