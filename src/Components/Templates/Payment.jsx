import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
const Payment = () => {
  const newDate = { date: new Date() };
  const state = useSelector((state) => state.CartState);
  console.log(state);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "700px",
          height: "320px",
          display: "flex",
          justifyContent: "center",
          boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px;",
          borderRadius: "4",
        }}
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="h4"
            sx={{
              padding: "20px",
              boxShadow: "0px 16px 9px -16px #9999995c",
              textAlign: "center",
              color: "#ff5400",
              fontWeight: "600",
            }}
          >
            Foodino Payment
          </Typography>
          <Grid container sx={{ marginTop: "60px" }}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <h4>
                Items Quantity: <span>{state.itemsCounter}</span>
              </h4>
              <h4>
                Date<span> {newDate.date.toLocaleDateString()}</span>
              </h4>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "grid",
                textAlign: "left",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <h2>
                Total Price:
                <span style={{ color: "green" }}>{state.total} $</span>
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Payment;
