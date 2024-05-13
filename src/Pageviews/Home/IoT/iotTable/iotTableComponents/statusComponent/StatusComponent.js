import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ bid }) => {
  console.log(bid);
  return (
    <Box>
      {bid?.status === "sold-out" && (
        <Typography
          sx={{
            background: "#FDCCD1",
            width: "100px",
            textAlign: "center",
            padding: "1px 4px",
            borderRadius: "20px",
          }}
        >
          🔴 {bid?.status}
        </Typography>
      )}
      {bid?.status === "in-stock" && (
        <Typography
          sx={{
            color: "#7FC008",
            background: "#F3FAE8",
            width: "100px",
            textAlign: "center",
            padding: "1px 4px",
            borderRadius: "20px",
          }}
        >
          🟢 {bid?.status}
        </Typography>
      )}
    </Box>
  );
};

export default StatusComponent;
