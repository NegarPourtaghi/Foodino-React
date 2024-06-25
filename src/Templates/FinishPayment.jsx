import React from 'react';
import Selebration from '../assets/Selebration.svg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const FinishPayment = () => {
    return (
        <div>
            <div style={{width:"100%",display:"flex",backgroundRepeat:"no-repeat",backgroundSize:"conver", justifyContent:"center",alignItems:"center", height:"500px", backgroundImage: `url(${Selebration})`}} >
            <div style={{display:"grid",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"#20fc57"}}>Successfully paid</h1>
            <Button variant='contained' sx={{backgroundColor:"#ff6700", marginTop:"50px"}}><Link style={{textDecoration:"none",color:"#fff"}} to="/Home">Go to Shopping</Link></Button>
            </div>
        </div>
        </div>
    );
};

export default FinishPayment;