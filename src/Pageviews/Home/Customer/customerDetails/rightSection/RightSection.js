import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import { useNavigate } from "react-router-dom";

const RightSection = () => {
  const navigate = useNavigate();

  //   forcefully navigate to details page
  useEffect(() => {
    navigate("details");
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ border: "1px solid black" }}>
        <Header />
      </Box>
      <Box sx={{ border: "1px solid black" }}>
        <Body />
      </Box>
    </Box>
  );
};

export default RightSection;
