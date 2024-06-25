import React from "react";
import People from "./People/People";
import Post from "./Post/Post";
import Maintenance from "./Maintenance/Maintenance";
import { Box } from "@mui/material";

const LeftSide = ({ value }) => {
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {value === "all" && (
        <>
          <People />
          <Post />
          <Maintenance />
        </>
      )}
      {value === "people" && <People />}
      {value === "post" && <Post />}
      {value === "maintenance" && <Maintenance />}
    </Box>
  );
};

export default LeftSide;
