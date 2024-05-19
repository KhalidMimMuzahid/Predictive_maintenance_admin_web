import { Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ props }) => {
  return (
    <Typography
      variant="p"
      sx={{
        fontSize: "14px",
        fontWeight: "600",
        textAlign: "center",
        background: props?.status === "completed" && "#2FD573",
        color:
          (props?.status === "completed" && "White") ||
          (props?.status === "accepted" && "#24459C") ||
          (props?.status === "pending" && "#FFA503") ||
          (props?.status === "ongoing" && "purple") ||
          (props?.status === "canceled" && "#FF4858"),
        border:
          (props?.status === "completed" && "1px solid White") ||
          (props?.status === "accepted" && "1px solid #24459C") ||
          (props?.status === "pending" && "1px solid #FFA503") ||
          (props?.status === "ongoing" && "1px solid purple") ||
          (props?.status === "canceled" && "1px solid #FF4858"),
        padding: "4px 8px",
        width: "96px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {props?.status.charAt(0).toUpperCase() + props?.status.slice(1)}
    </Typography>
  );
};
export default StatusComponent;
