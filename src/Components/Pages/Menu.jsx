import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  GET_ALL_POSTS,
  GET_Appetizer,
  GET_Dessert,
  GET_Drinks,
  GET_PASTA,
  GET_PIZZA,
  GET_Sandwich,
} from "../GraphQl/Queries";
import FoodCard from "../Modules/FoodCard";
import { Button, Grid } from "@mui/material";
import Slider from "../Modules/Slider";
import Spinner from "../Modules/Spinner";
import { MenuButtons } from "../Styles/Style";

const Buttons = [
  { Name: "All", Text: "All" },
  { Name: "Pizza", Text: "Pizza" },
  { Name: "Sandwich", Text: "Sandwich" },
  { Name: "Pasta", Text: "Pasta" },
  { Name: "Appetizer", Text: "Appetizer" },
  { Name: "Drinks", Text: "Drinks" },
  { Name: "Dessert", Text: "Dessert" },
];

const Menu = () => {
  const [Sort, setSort] = useState("All");
  const {
    isPending: AllLoading,
    data: All,
    error: AllError,
  } = useQuery(GET_ALL_POSTS);
  const {
    isPending: PizzaLoading,
    data: Pizza,
    error: PizzaError,
  } = useQuery(GET_PIZZA);
  const {
    isPending: PastaLoading,
    data: Pasta,
    error: PastaError,
  } = useQuery(GET_PASTA);
  const {
    isPending: DrinksLoading,
    data: Drinks,
    error: DrinksError,
  } = useQuery(GET_Drinks);
  const {
    isPending: DessertLaoding,
    data: Dessert,
    error: DessertLoading,
  } = useQuery(GET_Dessert);
  const {
    isPending: SandwichLaoding,
    data: Sandwich,
    error: SandwichError,
  } = useQuery(GET_Sandwich);
  const {
    isPending: AppetizerLaoding,
    data: Appetizer,
    error: AppetizerError,
  } = useQuery(GET_Appetizer);
  const [Active, setActive] = useState(true);
  const MenuHandler = (e) => {
    setSort(e.target.name);
  };

  return (
    <div>
      <Slider />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <Grid
          container
          sx={{ width: "80%", display: "flex", justifyContent: "space-evenly" }}
        >
          {Buttons.map((item) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={3}
              sm={1}
              md={1}
            >
              <MenuButtons
                size="MEDIUM"
                className={Sort === item.Name && "activeBtn"}
                variant="outlined"
                onClick={MenuHandler}
                key={item.id}
                name={item.Name}
              >
                {item.Text}
              </MenuButtons>
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ width: "80%" }}>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {!All ? (
            <Spinner />
          ) : (
            Sort === "All" &&
            All.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Pizza ? (
            <Spinner />
          ) : (
            Sort === "Pizza" &&
            Pizza.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Pasta ? (
            <Spinner />
          ) : (
            Sort === "Pasta" &&
            Pasta.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Drinks ? (
            <Spinner />
          ) : (
            Sort === "Drinks" &&
            Drinks.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Dessert ? (
            <Spinner />
          ) : (
            Sort === "Dessert" &&
            Dessert.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Sandwich ? (
            <Spinner />
          ) : (
            Sort === "Sandwich" &&
            Sandwich.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
          {!Appetizer ? (
            <Spinner />
          ) : (
            Sort === "Appetizer" &&
            Appetizer.foods.map((item) => (
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                md={4}
                item
              >
                {" "}
                <FoodCard key={item.id} data={item} />
              </Grid>
            ))
          )}
        </Grid>
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
