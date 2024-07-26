import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Chef from "../../assets/chef.jpg";
import {
  ContactBox,
  ContactTitle,
  HeaderTitle,
  SliderBox,
} from "../Styles/Style";

const Contact = () => {
  return (
    <div style={{ width: "100%" }}>
      <SliderBox sx={{ backgroundImage: `url(${Chef})` }}>
        <div
          style={{
            backgroundColor: "#0f0f0fc7",
            width: "100%",
            height: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <HeaderTitle> Contact Us</HeaderTitle>
        </div>
      </SliderBox>
      <ContactBox>
        <ContactTitle>Contact form</ContactTitle>
        <Grid container spacing={4} sx={{ width: "100%" }}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              size="medium"
              id="outlined-controlled"
              label="Name"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "12px" } }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "12px" } }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "12px" } }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              InputProps={{ sx: { borderRadius: "12px" } }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            ":hover": { bgcolor: "#ff6700", color: "#fff" },
            backgroundColor: "#ff6700",
            color: "#fff",
            margin: "40px auto",
          }}
        >
          Send
        </Button>
      </ContactBox>
    </div>
  );
};

export default Contact;
