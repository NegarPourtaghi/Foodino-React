import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Decrease, Increase, RemoveItems } from '../Redux/Cart/OrderAction';
import { CheckQuantity, IsInCart } from '../Helper/Functions';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-router-dom';
import { ShoppingCartTitle } from '../Styles/Style';
const ShopingList = () => {
    const state=useSelector(state => state.CartState)
    const dispatch=useDispatch();
    console.log(state)
    return (
        <div>
            <Grid container spacing={2} sx={{height:"400px", width:"60%", display:"flex", justifyContent:"center", marginTop:"80px",marginRight:"auto", marginLeft:"auto"}}>
                    {
                        state.selectedItems.length===0
                        ? (<div style={{   boxShadow: "1px 2px 8px 2px #b4b4b452",  border: "1px solid #ff6700",  borderRadius: "12px", padding: "40px",width:"fit-content", display:"grid",justifyContent:"center",alignItems:"center",marginTop:"60px"}}>
                            <CardGiftcardIcon sx={{fontSize:"5rem", color:"#ff6700"}}/>
                            <ShoppingCartTitle >Your shopping cart is empty</ShoppingCartTitle>
                            <Button variant='contained' sx={{backgroundColor:"#ff6700", color:"#fff", width:"fit-content",  margin: "0px auto", ':hover':{bgcolor:"#fe8433"}}}><Link style={{textDecoration:"none", color:"inherit"}} to="/Home">Back to Home</Link></Button>
                        </div>)
                        :( <div style={{marginTop:"60px"}}>
                        <Typography variant='h4' color="#1e1e1e" sx={{marginBottom:"60px", textAlign:"center"}}>Shopping List</Typography>

                        <Grid container spacing={4}sx={{ overflowY:"scroll", height:"400px"}} >
                                {
                                    state.selectedItems.map(item => <Grid item xs={12} md={12} key={item.id}>
                                       <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:"0px 2px 12px -6px #a8a6a6ab", borderRadius:"4px"}}>
                                       <img style={{width:"16%", marginLeft:"0px", borderTopLeftRadius:"4px", borderBottomLeftRadius:"4px"}} src={item.foodImage.url} alt='foodIamge' />
                                        <p>{item.foodName}</p>
                                        <span>{item.foodPrice} $</span>
                                         <div>
                                        {
                                !IsInCart(state,item.id) 
                                ? <Button size="small" variant='contained' sx={{backgroundColor:"#ff6700",textTransform:'none',':hover': {bgcolor: '#f46201', boxShadow:'0px 0px 9px 1px #ff5400'}}} onClick={()=> dispatch(AddItems(data))}>Add to Cart</Button>
                                :<Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(Increase(item))}>+</Button>
                            }
                            {
                                 CheckQuantity(state, item.id) >0 && <span>{state.itemsCounter}</span>
                            }
                            {
                                CheckQuantity(state,item.id) === 1 && <Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(RemoveItems(item))}><DeleteSharpIcon/></Button>
                            }
                            {
                                CheckQuantity(state,item.id) > 1 && <Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(Decrease(item))}>-</Button>
                            }
                            
            
                                        </div>
                                       </div>
                               
                                    </Grid>)
                                }
                       </Grid> 
                       </div>)
                    }
                </Grid>
        </div>
    );
};

export default ShopingList;