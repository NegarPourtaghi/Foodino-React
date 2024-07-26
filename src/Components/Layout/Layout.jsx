import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "../Modules/Slider";
import { Height } from "@mui/icons-material";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 0, marginRight: 0 }}>
        <div style={{ width: "100%", marginTop: "60px" }}>{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
