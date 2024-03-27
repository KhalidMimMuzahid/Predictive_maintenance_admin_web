import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import { useLocation, useNavigate } from "react-router-dom";

const RightSection = () => {
  const navigate = useNavigate();

  const location = useLocation();

  //   forcefully navigate to details page
  useEffect(() => {
    if (
      !(
        location?.pathname?.endsWith("machine-status") ||
        location?.pathname?.endsWith("invoice") ||
        location?.pathname?.endsWith("request")
      )
    ) {
      navigate("details");
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box>
        <Body />
      </Box>
    </Box>
  );
};

export default RightSection;
