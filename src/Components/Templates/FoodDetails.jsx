import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_FOOD_DETAIL } from "../GraphQl/Queries";
import { Button, Grid, Typography } from "@mui/material";
import { CheckQuantity, IsInCart } from "../Helper/Functions";
import { useDispatch, useSelector } from "react-redux";
import {
  AddItems,
  Decrease,
  Increase,
  RemoveItems,
} from "../../Redux/Cart/OrderAction";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import Spinner from "../Modules/Spinner";
import { FoodDetailsTitle } from "../Styles/Style";

const FoodDetails = () => {
  const { slug } = useParams();
  const { data, isPending, error } = useQuery(GET_FOOD_DETAIL, {
    variables: { slug },
  });
  console.log(data, isPending, error);
  const state = useSelector((state) => state.CartState);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "80%", marginTop: "100px" }}>
      {!data ? (
        <Spinner />
      ) : (
        <Grid
          container
          sx={{ boxShadow: "1px 2px 8px 2px #b4b4b452", borderRadius: "12px" }}
        >
          <Grid item>
            {!data ? (
              <h1>Loading...</h1>
            ) : (
              <Grid container>
                <Grid item md={6} xs={12}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      height: "100%",
                    }}
                    src={data.foods[0].foodImage.url}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <div style={{ padding: "12px" }}>
                    <FoodDetailsTitle variant="h3">
                      {data.foods[0].foodName}
                    </FoodDetailsTitle>

                    <div style={{ marginTop: "20px" }}>
                      <h4>Food Gradient:</h4>
                      <p style={{ marginLeft: "4px" }}>
                        {data.foods[0].foodDetails}
                      </p>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                      <h4>Food Price:</h4>
                      <p style={{ marginLeft: "4px" }}>
                        {data.foods[0].foodPrice}$
                      </p>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                      {!IsInCart(state, data.foods[0].id) ? (
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            backgroundColor: "#ff6700",
                            textTransform: "none",
                            transition: ".5s all",
                            ":hover": {
                              bgcolor: "#f46201",
                              boxShadow: "0px 0px 4px 2px #ff8f59",
                            },
                          }}
                          onClick={() => dispatch(AddItems(data.foods[0]))}
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(Increase(data.foods[0]))}
                        >
                          +
                        </Button>
                      )}
                      {CheckQuantity(state, data.foods[0].id) > 0 && (
                        <span>{state.itemsCounter}</span>
                      )}
                      {CheckQuantity(state, data.foods[0].id) === 1 && (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(RemoveItems(data.foods[0]))}
                        >
                          <DeleteSharpIcon />
                        </Button>
                      )}
                      {CheckQuantity(state, data.foods[0].id) > 1 && (
                        <Button
                          size="small"
                          sx={{ color: "#ff6700" }}
                          onClick={() => dispatch(Decrease(data.foods[0]))}
                        >
                          -
                        </Button>
                      )}
                    </div>
                  </div>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default FoodDetails;
