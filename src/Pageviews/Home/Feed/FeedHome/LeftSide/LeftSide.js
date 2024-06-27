import React from "react";
import Post from "./Post/Post";
import { Box } from "@mui/material";

const LeftSide = () => {
  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Post />
    </Box>
  );
};

export default LeftSide;
