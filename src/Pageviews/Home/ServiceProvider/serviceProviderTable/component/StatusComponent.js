import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ props }) => {
  return (
    <Box>
      {props?.status === "pending" && (
        <Typography
          sx={{
            border: "1px solid #FFA503",
            width: "60px",
            textAlign: "center",
            padding: "2px 8px",
            borderRadius: "20px",
            fontSize: "10px",
            color: "#FFA503",
          }}
        >
          Pending
        </Typography>
      )}
      {props?.status === "active" && (
        <Typography
          sx={{
            border: "1px solid #2FD573",
            width: "60px",
            textAlign: "center",
            padding: "2px 8px",
            borderRadius: "20px",
            fontSize: "10px",
            color: "#2FD573",
          }}
        >
          Active
        </Typography>
      )}
      {props?.status === "suspended" && (
        <Typography
          sx={{
            border: "1px solid #FF4858",
            width: "60px",
            textAlign: "center",
            padding: "2px 8px",
            borderRadius: "20px",
            fontSize: "10px",
            color: "#FF4858",
          }}
        >
          Suspended
        </Typography>
      )}
      {props?.status === "success" && (
        <Typography
          sx={{
            border: "1px solid #2FD573",
            width: "60px",
            textAlign: "center",
            padding: "2px 8px",
            borderRadius: "20px",
            fontSize: "10px",
            color: "#2FD573",
          }}
        >
          Success
        </Typography>
      )}
    </Box>
  );
};

export default StatusComponent;
