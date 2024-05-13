import React from "react";
import { Box, Typography } from "@mui/material";

const ProductComponent = ({ bid }) => {
  return (
    <Box>
      <Typography sx={{ color: "#25213B", fontWeight: "600" }}>
        {bid?.name}
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>{bid?.macAddress}</Typography>
    </Box>
  );
};

export default ProductComponent;
