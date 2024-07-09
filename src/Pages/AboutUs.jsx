import React from 'react';
import Chef from '../assets/chef.jpg'
import { Typography } from '@mui/material';
import Services from '../Modules/Services';
import { HeaderTitle, SliderBox,Heading, Paragraph  } from '../Styles/Style';

const AboutUs = () => {
    return (
        <div>
            <SliderBox sx={{backgroundImage:`url(${Chef})`}}>
                <div style={{backgroundColor:"#0f0f0fc7", width:'100%', height:"100%", alignItems:"center",display:"flex", justifyContent:"center"}}>
                    <HeaderTitle >About Us</HeaderTitle>
                </div>
                
            </SliderBox>
            <div style={{width:"80%", marginTop:"50px"}}>
                <Heading >Foodino</Heading>
                <Paragraph>Foodino chain restaurants were opened in 1998 and during these years they have always been trying to satisfy their customers by providing high quality food and fast and timely service. During these years, customer satisfaction has been the priority. In this regard, Tarkhineh has always tried to keep the quality of its food in the best condition during these times and has kept its price stable even with the fluctuations of raw material prices in the market. Tarkhineh has opened its branches, which are very stylish and modern, and for holding small and big celebrations, dear customers, they have the ability to cater with high quality. Shaabat reception hall on two separate floors with modern staircase and elevator for disabled and elderly people are ready to provide service to you dear ones.</Paragraph>
                <Services/>
            </div>
        </div>
    );
};

export default AboutUs;