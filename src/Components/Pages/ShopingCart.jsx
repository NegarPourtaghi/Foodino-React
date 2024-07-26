import React, { useState } from "react";
import ShopingList from "../Templates/ShopingList";
import Payment from "../Templates/Payment";
import FinishPayment from "../Templates/FinishPayment";
import { Button } from "@mui/material";

const ShopingCart = () => {
  const [Page, setPage] = useState(1);
  const [Empty, setEmpty] = "true";
  console.log(Empty);
  const NextHandler = () => {
    setPage((Page) => Page + 1);
    if (Page > 3) return;
  };

  const PreviousHandler = () => {
    if (Page < 1) return;
    setPage((Page) => Page - 1);
  };
  return (
    <div>
      {Page === 1 && <ShopingList setEmpty={setEmpty} />}
      {Page === 2 && <Payment />}
      {Page === 3 && <FinishPayment />}
      <div
        style={{
          padding: "0px 50px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ff6700", color: "#fff" }}
          disabled={Page === 3 && Empty === "true"}
          onClick={NextHandler}
        >
          Next
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ff6700", color: "#fff" }}
          disabled={Page === 1}
          onClick={PreviousHandler}
        >
          back
        </Button>
      </div>
    </div>
  );
};

export default ShopingCart;
