import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddItems,
  Decrease,
  Disliked,
  Increase,
  RemoveItems,
} from "../../Redux/Cart/OrderAction";
import { CheckQuantity, IsInCart } from "../Helper/Functions";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Buttons, CardButton, ShoppingCartTitle } from "../Styles/Style";

const ShopingList = () => {
  const state = useSelector((state) => state.CartState);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          height: "400px",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        {state.likedItems.length === 0 ? (
          <div
            style={{
              boxShadow: "1px 2px 8px 2px #b4b4b452",
              border: "1px solid #ff6700",
              borderRadius: "12px",
              padding: "40px",
              width: "fit-content",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <CardGiftcardIcon sx={{ fontSize: "5rem", color: "#ff6700" }} />
            <ShoppingCartTitle>Your favourites cart is empty</ShoppingCartTitle>
            <Buttons variant="contained">
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Back to Home
              </Link>
            </Buttons>
          </div>
        ) : (
          <div style={{ marginTop: "60px" }}>
            <ShoppingCartTitle>Favourite List</ShoppingCartTitle>
            <Grid
              container
              spacing={4}
              sx={{ overflowY: "scroll", height: "400px" }}
            >
              {state.likedItems.map((item) => (
                <Grid item xs={12} md={12} key={item.id}>
                  <Grid
                    container
                    sx={{ boxShadow: "0px 2px 12px -6px #a8a6a6ab" }}
                  >
                    <Grid item xs={3} sm={3} md={3}>
                      <img
                        style={{
                          width: "100%",
                          marginLeft: "0px",
                          borderTopLeftRadius: "4px",
                          borderBottomLeftRadius: "4px",
                        }}
                        src={item.foodImage.url}
                        alt="foodIamge"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sm={4}
                      md={4}
                      sx={{
                        paddingLeft: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p>{item.foodName}</p>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sm={1}
                      md={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span>{item.foodPrice} $</span>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      sm={4}
                      md={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {IsInCart(state, item.id) ? (
                        dispatch(Disliked(item))
                      ) : (
                        <CardButton
                          size="small"
                          variant="contained"
                          onClick={() => dispatch(AddItems(item))}
                        >
                          Add
                        </CardButton>
                      )}
                      <Button
                        size="small"
                        sx={{ color: "red", textTransform: "none" }}
                        onClick={() => dispatch(Disliked(item))}
                      >
                        <FavoriteIcon style={{ color: "red" }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default ShopingList;
