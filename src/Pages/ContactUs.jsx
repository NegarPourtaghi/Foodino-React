import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Chef from '../assets/chef.jpg'

const Contact = () => {
    return (
        <div style={{display:"center",justifyContent:"center",alignItems:"center", width:"100%"}}>
             <div style={{backgroundImage:`url(${Chef})`, width:"100%", height:"400px"}}>
                <div style={{backgroundColor:"#0f0f0fc7", width:'100%', height:"100%", alignItems:"center",display:"flex", justifyContent:"center"}}>
                    <Typography variant='h3' sx={{textAlign:"center", color:"#fff" }}> Contact Us</Typography>
                </div>
                </div>
            <Box sx={{width:"fit-content",marginTop:"50px", width:"40%", display:"grid",justifyContent:"center", borderRadius:" 12px",   padding: "40px", transition:".5s all",  boxShadow: "1px 2px 8px 2px #b4b4b452", ':hover':{boxShadow:"1px 4px 8px 2px #a8a6a660"}}}>
                <Typography variant='h4' sx={{textAlign:"center", paddingBottom:"40px"}}>Contact form</Typography>
            <Grid container spacing={4} sx={{width:"100%"}}>
                <Grid item xs={12} md={12} >
                <TextField fullWidth   id="outlined-controlled" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                <TextField fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                <TextField fullWidth id="outlined-basic" label="Phone" variant="outlined" />
                </Grid>
            </Grid>
            <Button variant='contained' sx={{':hover':{bgcolor:"#ff6700",color:"#fff"},backgroundColor:"#ff6700", color:"#fff" , margin:"40px auto" }}>Send</Button>
            </Box>
            </div>
    );
};

export default Contact;