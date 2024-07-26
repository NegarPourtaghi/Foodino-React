import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Heading, ServicesBox, ServicesTitle } from "../Styles/Style";
const Services = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <Heading>Services</Heading>
      <Grid container spacing={4}>
        <Grid item md={4} xs={4}>
          <ServicesBox>
            <div style={{ display: "grid" }}>
              <DeliveryDiningIcon fontSize="large" sx={{ color: "#ff6700" }} />
              <ServicesTitle>Fast Delivery</ServicesTitle>
            </div>
          </ServicesBox>
        </Grid>

        <Grid item md={4} xs={4}>
          <ServicesBox>
            <div style={{ display: "grid" }}>
              <LocalDiningIcon fontSize="large" sx={{ color: "#ff6700" }} />
              <ServicesTitle>Best Quality</ServicesTitle>
            </div>
          </ServicesBox>
        </Grid>

        <Grid item md={4} xs={4}>
          <ServicesBox>
            <div style={{ display: "grid" }}>
              <FastfoodIcon fontSize="large" sx={{ color: "#ff6700" }} />
              <ServicesTitle>Best Taste</ServicesTitle>
            </div>
          </ServicesBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
