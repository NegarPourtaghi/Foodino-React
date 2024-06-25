import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import FoodDetails from '../Templates/FoodDetails';
import ShopingCart from '../Pages/ShopingCart';
import Menu from '../Pages/Menu';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Branches from '../Pages/Branches';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/FoodDetails/:slug" element={<FoodDetails/>} />
                <Route path="/ShopingCart" element={<ShopingCart />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/About" element={<AboutUs />} />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/Branches" element={<Branches />} />

            </Routes>
        </div>
    );
};

export default Router;