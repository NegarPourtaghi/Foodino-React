import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import FoodDetails from "../Templates/FoodDetails";
import ShopingCart from "../Pages/ShopingCart";
import Menu from "../Pages/Menu";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Branches from "../Pages/Branches";
import Favourite from "../Pages/Favourites";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FoodDetails/:slug" element={<FoodDetails />} />
        <Route path="/ShopingCart" element={<ShopingCart />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Branches" element={<Branches />} />
        <Route path="/Favourites" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default Router;
