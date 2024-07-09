import React from 'react';
import branch1 from '../assets/1.png'
import branch2 from '../assets/2.png'
import branch3 from '../assets/3.png'
import branch4 from '../assets/عکس.png'
import { CardMedia, Grid, Typography } from '@mui/material';
import Chef from '../assets/chef.jpg'
import { BranchesText, BranchesTitle, CardMediaBox, HeaderTitle, SliderBox } from '../Styles/Style';

const Branches = () => {
    return (
        <div>
             <SliderBox sx={{backgroundImage:`url(${Chef})`}}>
                <div style={{backgroundColor:"#0f0f0fc7", width:'100%', height:"100%", alignItems:"center",display:"flex", justifyContent:"center"}}>
                    <HeaderTitle> Our Branches</HeaderTitle>
                </div>
                
            </SliderBox>
            <div style={{width:"80%", marginTop:"50px"}}>
                <Grid container sx={{ transition:".5s all", boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} sm={6} md={6}>
                    <CardMediaBox component="img" src={branch2} alt="Branche1" />
                    </Grid>
                    <Grid item xs={12} sm={6}  md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center", margin:"40px 20px"}}>
                        <BranchesTitle>Houston</BranchesTitle>
                        <BranchesText variant='p' >1700 Post Oak Blvd #290, Houston, TX 77056, United States</BranchesText>                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} sm={6} md={6}>
                    <CardMediaBox component="img" src={branch2} alt="Branche1" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center" , margin:"40px 20px"}}>
                            <BranchesTitle>Houston</BranchesTitle>
                            <BranchesText variant='p' >1700 Post Oak Blvd #290, Houston, TX 77056, United States</BranchesText>
                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} sm={6} md={6}>
                    <CardMediaBox component="img" src={branch2} alt="Branche1" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center" , margin:"40px 20px"}}>
                        <BranchesTitle>Houston</BranchesTitle>
                        <BranchesText variant='p' >1700 Post Oak Blvd #290, Houston, TX 77056, United States</BranchesText>                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", marginBottom:"50px", borderRadius:"12px", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                    <Grid item xs={12} sm={6} md={6}>
                    <CardMediaBox component="img" src={branch2} alt="Branche1" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <div style={{textAlign:"center", margin:"40px 20px"}}>
                        <BranchesTitle>Houston</BranchesTitle>
                        <BranchesText variant='p' >1700 Post Oak Blvd #290, Houston, TX 77056, United States</BranchesText>                        </div>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Branches;