import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ props }) => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "600",
          textAlign: "center",
          background: props?.taskStatus === "completed" && "#2FD573",
          color:
            (props?.taskStatus === "completed" && "White") ||
            (props?.taskStatus === "ongoing" && "#FFA503") ||
            (props?.taskStatus === "canceled" && "#FF4858"),
          border:
            (props?.taskStatus === "completed" && "1px solid White") ||
            (props?.taskStatus === "ongoing" && "1px solid #FFA503") ||
            (props?.taskStatus === "canceled" && "1px solid #FF4858"),
          padding: "2px 6px",
          width: "96px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {props?.taskStatus.charAt(0).toUpperCase() + props?.taskStatus.slice(1)}
      </Typography>
    </Box>
  );
};

export default StatusComponent;
