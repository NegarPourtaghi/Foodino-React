import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrease, Increase, RemoveItems } from "../../Redux/Cart/OrderAction";
import { CheckQuantity, IsInCart } from "../Helper/Functions";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link } from "react-router-dom";
import { Buttons, ShoppingCartTitle } from "../Styles/Style";
const ShopingList = ({ setEmpty }) => {
  const state = useSelector((state) => state.CartState);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
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
        {state.selectedItems.length === 0 ? (
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
            <ShoppingCartTitle>Your shopping cart is empty</ShoppingCartTitle>
            <Buttons variant="contained">
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Back to Home
              </Link>
            </Buttons>
          </div>
        ) : (
          <div style={{ marginTop: "60px" }}>
            <Typography
              variant="h4"
              color="#1e1e1e"
              sx={{ marginBottom: "60px", textAlign: "center" }}
            >
              Shopping List
            </Typography>

            <Grid
              container
              spacing={4}
              sx={{ overflowY: "scroll", height: "400px" }}
            >
              {state.selectedItems.map((item) => (
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
                      {!IsInCart(state, item.id) ? (
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            backgroundColor: "#ff6700",
                            textTransform: "none",
                            ":hover": {
                              bgcolor: "#f46201",
                              boxShadow: "0px 0px 9px 1px #ff5400",
                            },
                          }}
                          onClick={() => dispatch(AddItems(data))}
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(Increase(item))}
                        >
                          +
                        </Button>
                      )}
                      {CheckQuantity(state, item.id) > 0 && (
                        <span>{state.itemsCounter}</span>
                      )}
                      {CheckQuantity(state, item.id) === 1 && (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(RemoveItems(item))}
                        >
                          <DeleteSharpIcon />
                        </Button>
                      )}
                      {CheckQuantity(state, item.id) > 1 && (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(Decrease(item))}
                        >
                          -
                        </Button>
                      )}
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
