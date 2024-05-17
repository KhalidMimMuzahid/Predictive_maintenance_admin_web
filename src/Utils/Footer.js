import { Box, Typography } from "@mui/material";
import React from "react";
import heart from "../Assets/Component/love.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "24px 0 48px 0",
      }}
    >
      <Typography sx={{ color: "#2C4175", fontSize: "18px" }}>
        Copyright © 2023 <span style={{ opacity: "50%" }}>Showa</span>. Designed
        with
      </Typography>
      <img src={heart} alt="" />
      <Typography sx={{ color: "#2C4175", fontSize: "18px" }}>
        All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
