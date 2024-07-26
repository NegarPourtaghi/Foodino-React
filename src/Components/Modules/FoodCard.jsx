import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddItems,
  Decrease,
  Increase,
  Liked,
  RemoveItems,
} from "../../Redux/Cart/OrderAction";
import { CheckIfIsLiked, CheckQuantity, IsInCart } from "../Helper/Functions";
import { Link } from "react-router-dom";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Buttons, CardButton, FoodTitle } from "../Styles/Style";
const FoodCard = ({ data }) => {
  const state = useSelector((state) => state.CartState);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <Card
        sx={{
          width: "100%",
          borderRadius: 2,
          boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="160px"
            image={data.foodImage.url}
            alt={data.foodName}
          />
          <CardContent>
            <FoodTitle>{data.foodName}</FoodTitle>

            <FoodTitle>{data.foodPrice} $</FoodTitle>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <CardButton size="small" variant="outlined">
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  textTransform: "none",
                  transition: ".5s all",
                }}
                to={`/FoodDetails/${data.foodSlug}`}
              >
                Details
              </Link>
            </CardButton>
            <Button
              size="small"
              sx={{ color: "red", textTransform: "none" }}
              onClick={() => dispatch(Liked(data))}
            >
              {!CheckIfIsLiked(state, data.id) ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteSharpIcon />
              )}
            </Button>

            {!IsInCart(state, data.id) ? (
              <CardButton
                size="small"
                variant="contained"
                onClick={() => dispatch(AddItems(data))}
              >
                Add to Cart
              </CardButton>
            ) : (
              <Button
                size="small"
                sx={{ color: "#ff6700" }}
                onClick={() => dispatch(Increase(data))}
              >
                +
              </Button>
            )}
            {CheckQuantity(state, data.id) > 0 && (
              <span>{state.itemsCounter}</span>
            )}
            {CheckQuantity(state, data.id) === 1 && (
              <Button
                size="small"
                sx={{ color: "#ff6700" }}
                onClick={() => dispatch(RemoveItems(data))}
              >
                <DeleteSharpIcon />
              </Button>
            )}
            {CheckQuantity(state, data.id) > 1 && (
              <Button
                size="small"
                sx={{ color: "#ff6700" }}
                onClick={() => dispatch(Decrease(data))}
              >
                -
              </Button>
            )}
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FoodCard;
