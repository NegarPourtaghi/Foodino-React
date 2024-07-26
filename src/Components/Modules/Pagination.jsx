import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { StepButton } from "../Styles/Style";

const Pagination = ({
  currentPage,
  setCurrentPage,
  data,
  ClickHandler,
  Page,
}) => {
  const PageCounter = data.foods.length / 3;

  return (
    <div
      style={{
        width: "20%",
        margin: "80px auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <StepButton
        size="small"
        name="Next"
        variant="outlined"
        disabled={Page === PageCounter}
        onClick={ClickHandler}
      >
        Next
      </StepButton>
      <span style={{ marginRight: "8px" }}>...</span>
      {Page}
      <span style={{ marginLeft: "8px" }}>...</span>

      <StepButton
        size="small"
        name="Previous"
        variant="outlined"
        disabled={Page === 1}
        onClick={ClickHandler}
      >
        Previous
      </StepButton>
    </div>
  );
};

export default Pagination;
