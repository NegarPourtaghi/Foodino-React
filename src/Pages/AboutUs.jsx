import React from 'react';
import Chef from '../assets/chef.jpg'
import { Typography } from '@mui/material';
import Services from '../Modules/Services';

const AboutUs = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${Chef})`, width:"100%", height:"400px"}}>
                <div style={{backgroundColor:"#0f0f0fc7", width:'100%', height:"100%", alignItems:"center",display:"flex", justifyContent:"center"}}>
                    <Typography variant='h3' sx={{textAlign:"center", color:"#fff" }}>About Us</Typography>
                </div>
                
            </div>
            <div style={{width:"80%", marginTop:"50px"}}>
                <Typography variant='h4' sx={{textAlign:"center", margin:"50px 0px", color:"#1e1e1e"}}>Foodino</Typography>
                <Typography variant='h5' sx={{textAlign: "justify", color:"#1e1e1e"}}>Foodino chain restaurants were opened in 1998 and during these years they have always been trying to satisfy their customers by providing high quality food and fast and timely service. During these years, customer satisfaction has been the priority. In this regard, Tarkhineh has always tried to keep the quality of its food in the best condition during these times and has kept its price stable even with the fluctuations of raw material prices in the market. Tarkhineh has opened its branches, which are very stylish and modern, and for holding small and big celebrations, dear customers, they have the ability to cater with high quality. Shaabat reception hall on two separate floors with modern staircase and elevator for disabled and elderly people are ready to provide service to you dear ones.</Typography>
                <Services/>
            </div>
        </div>
    );
};

export default AboutUs;