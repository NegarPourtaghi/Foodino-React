import React from 'react';
import Slider from '../Modules/Slider';
import AllPosts from '../Templates/AllPosts';
import Services from '../Modules/Services';
import Branch from '../assets/outofstock2.jpg'
import { Box, Button, Grid, Typography } from '@mui/material';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';
import { Link } from 'react-router-dom';
import branch1 from '../assets/Image.png'
import branch2 from '../assets/Image1.png'

const Home = () => {
    return (
        <div>
             <Slider/>

            <div style={{width:"80%"}}>
            <Services/>
            <AllPosts/>
            </div>
            <div style={{backgroundImage:`url(${Branch})`, height:"420px", width:"100%"}}>
                <div style={{backgroundColor:"#0000008f", width:"100%", height:"100%"}}>
                    <Grid container sx={{padding:"50px",  height: "100%"}}>
                        <Grid item xs={12} md={6} sx={{display:"grid", alignItems:"center"}}>
                           <div>
                           <h1 style={{color:"#fff"}}>
                            Foodino chain restaurants
                            </h1>
                            <p style={{color:"#fff", textAlign: "justify"}}>
                            Hospitality is one of the most important characteristics of Iranians and we are proud to serve the noble people of Iran for more than 20 years. At Tarkhineh chain restaurants, we have always tried to provide healthy and worthy food to our dear ones in an original environment based on modern architecture and design, along with lovely nature.
                            </p>
                           </div>
                            <div style={{width:"100%", display:"flex",justifyContent:"right", marginTop:"40px"}}>
                            <Button variant='contained' sx={{backgroundColor:"#ff9954", transition:".4s all",':hover':{bgcolor:"#ff6700"}}}><Link style={{color:"#fff", textDecoration:"none"}} to="/AboutUs">more information</Link></Button>

                            </div>

                        </Grid>
                        <Grid item xs={12} md={6} sx={{alignItems: "center", display: "flex"}}>
                            <Grid container spacing={5} sx={{height:"100%"}}>
                                <Grid item xs={6} md={6} sx={{  display:' grid'}}>
                                    <InsightsSharpIcon sx={{color:"#ff9954", fontSize:"3.6rem"}}/>
                                    <span style={{color:"#fff"}}>High quality of food</span>
                                </Grid>
                                <Grid item xs={6} md={6} sx={{  display:' grid'}}>
                                    <PersonSharpIcon sx={{color:"#ff9954", fontSize:"3.6rem"}}/>
                                    <span style={{color:"#fff"}}>Experienced and professional staff</span>
                                </Grid>
                                <Grid item xs={6} md={6} sx={{  display:' grid'}}>
                                    <EventNoteSharpIcon sx={{color:"#ff9954", fontSize:"3.6rem"}}/>
                                    <span style={{color:"#fff"}}>Varied menu</span>
                                </Grid>
                                <Grid item xs={6} md={6} sx={{  display:' grid'}}>
                                    <WifiSharpIcon sx={{color:"#ff9954", fontSize:"3.6rem"}}/>
                                    <span style={{color:"#fff"}}>Pleasant and peaceful environment</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </div>

            </div>
            <div style={{width:"80%", marginTop:"50px"}}>
                <Typography variant='h4' sx={{textAlign:"center", margin:"50px 0px", color:"#1e1e1e"}}>Branches</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3} sx={{":hover .phonenmber":{display:"block", transition:".5s all"}, ":hover .myDiv":{height:"420px"} ,   height: "460px"}}>
                      <Box className="myDiv" sx={{border:"2px solid #ff6700", borderRadius:"12px", height:"400px", transition:".5s all"}}>
                      <img src={branch1} alt='branches' style={{width:"100%", borderTopRightRadius:"12px", borderTopLeftRadius:"12px"}}/>
                        <div style={{height:"fit-content", textAlign:"center", padding:"20px"}}>
                            <Typography variant='h5'>Houston</Typography>
                            <Typography variant='inherit' sx={{marginTop:"10px", marginBottom:"10px"}}>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                            <Typography variant='caption'  className='phonenmber' sx={{display:"none", transition:".5s all"}}>phone: +1 281-572-0204</Typography>
                        </div>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={3} sx={{":hover .phonenmber":{display:"block", transition:".5s all"}, ":hover .myDiv":{height:"420px"} ,   height: "460px"}}>
                    <Box className="myDiv" sx={{border:"2px solid #ff6700", borderRadius:"12px", height:"400px", transition:".5s all"}}>

                        <img src={branch2} alt='branches' style={{width:"100%", borderTopRightRadius:"12px", borderTopLeftRadius:"12px"}}/>
                        <div className='new' style={{height:"fit-content", textAlign:"center", padding:"20px"}}>
                            <Typography variant='h5'>Houston</Typography>
                            <Typography variant='inherit' sx={{marginTop:"10px", marginBottom:"10px"}}>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                            <Typography variant='caption'  className='phonenmber' sx={{display:"none", transition:".5s all"}}>phone: +1 281-572-0204</Typography>
                        </div>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={3} sx={{":hover .phonenmber":{display:"block", transition:".5s all"}, ":hover .myDiv":{height:"420px"} ,   height: "460px"}}>
                    <Box className="myDiv" sx={{border:"2px solid #ff6700", borderRadius:"12px", height:"400px", transition:".5s all"}}>

                        <img src={branch1} alt='branches' style={{width:"100%", borderTopRightRadius:"12px", borderTopLeftRadius:"12px"}}/>
                        <div className='new' style={{height:"fit-content", textAlign:"center", padding:"20px"}}>
                            <Typography variant='h5'>Houston</Typography>
                            <Typography variant='inherit' sx={{marginTop:"10px", marginBottom:"10px"}}>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                            <Typography variant='caption'  className='phonenmber' sx={{display:"none", transition:".5s all"}}>phone: +1 281-572-0204</Typography>
                        </div>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={3} sx={{":hover .phonenmber":{display:"block", transition:".5s all"}, ":hover .myDiv":{height:"420px"} ,   height: "460px"}}>
                    <Box className="myDiv" sx={{border:"2px solid #ff6700", borderRadius:"12px", height:"400px", transition:".5s all"}}>

                        <img src={branch2} alt='branches' style={{width:"100%", borderTopRightRadius:"12px", borderTopLeftRadius:"12px"}}/>
                        <div className='new' style={{height:"fit-content", textAlign:"center", padding:"20px"}}>
                            <Typography variant='h5'>Houston</Typography>
                            <Typography variant='inherit' sx={{marginTop:"10px", marginBottom:"10px"}}>1700 Post Oak Blvd #290, Houston, TX 77056, United States</Typography>
                            <Typography variant='caption'  className='phonenmber' sx={{display:"none", transition:".5s all"}}>phone: +1 281-572-0204</Typography>
                        </div>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Home;