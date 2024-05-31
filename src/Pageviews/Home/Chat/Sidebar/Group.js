import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Group = ({ chat }) => {
  return (
    <Button
      sx={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography>Group Name</Typography>
      <Typography
        sx={{
          color: "#D1D5DB",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "end",
          width: "30%",
        }}
      >
        10:44 PM
      </Typography>
    </Button>
  );
};

export default Group;
