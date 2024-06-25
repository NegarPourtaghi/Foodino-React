import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { AddItems, Decrease, Increase, Liked, RemoveItems } from '../Redux/Cart/OrderAction';
import { CheckQuantity, IsInCart } from '../Helper/Functions';
import { Link } from 'react-router-dom';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
const FoodCard = ({data}) => {
    const state=useSelector(state => state.CartState)
    console.log(state)
    const dispatch=useDispatch()
    return (
        <div>
    <Card sx={{ width: 320 , borderRadius:2, boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px;"} }>
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image={data.foodImage.url}
                alt={data.foodName}
                />
                <CardContent>

                <Typography  variant="h5" component="div">
                    {data.foodName}
                </Typography>

                <Typography  variant="h6" component="h6">
                    {data.foodPrice} $
                </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <Button size="small" variant="outlined" sx={{borderColor:"#ff6700", color:"#ff6700", ':hover':{bgcolor:"#ff6700",color:'#fff', borderColor:"#ff6700"}}} >
                <Link style={{textDecoration:'none',color:"inherit", fontWeight:"600", textTransform:'none', transition:".5s all"}} to={`/FoodDetails/${data.foodSlug}`}>Details</Link>
                </Button>
                <Button size="small" sx={{color:"red", textTransform:'none'}} onClick={()=> dispatch(Liked(data))}><FavoriteSharpIcon/></Button>

                {
                    !IsInCart(state,data.id) 
                    ? <Button size="small" variant='contained' sx={{backgroundColor:"#ff6700",textTransform:'none', transition:".5s all",':hover': {bgcolor: '#f46201',   boxShadow:" 0px 0px 4px 2px #ff8f59"}}} onClick={()=> dispatch(AddItems(data))}>Add to Cart</Button>
                    :<Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(Increase(data))}>+</Button>
                }
                {
                     CheckQuantity(state, data.id) >0 && <span>{state.itemsCounter}</span>
                }
                {
                    CheckQuantity(state,data.id) === 1 && <Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(RemoveItems(data))}><DeleteSharpIcon/></Button>
                }
                {
                    CheckQuantity(state,data.id) > 1 && <Button size="small" sx={{color:"#ff6700"}} onClick={()=> dispatch(Decrease(data))}>-</Button>
                }
                

            </CardActions>

            </CardActionArea>
           
    </Card>
        </div>
    );
};

export default FoodCard;