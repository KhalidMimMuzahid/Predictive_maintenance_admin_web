import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponentForGroup = ({ reservation }) => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "600",
          textAlign: "center",
          background: reservation?.taskStatus === "completed" && "#2FD573",
          color:
            (reservation?.taskStatus === "completed" && "White") ||
            (reservation?.taskStatus === "pending" && "#FFA503") ||
            (reservation?.taskStatus === "ongoing" && "#26C1C9") ||
            (reservation?.taskStatus === "bid-closed" && "#FF4858") ||
            (reservation?.taskStatus === "assigned-to-company" && "#24459C") ||
            (reservation?.taskStatus === "canceled" && "#FF4858"),
          border:
            (reservation?.taskStatus === "completed" && "1px solid White") ||
            (reservation?.taskStatus === "pending" && "1px solid #FFA503") ||
            (reservation?.taskStatus === "ongoing" && "1px solid #26C1C9") ||
            (reservation?.taskStatus === "bid-closed" && "1px solid #FF4858") ||
            (reservation?.taskStatus === "assigned-to-company" &&
              "1px solid #24459C") ||
            (reservation?.taskStatus === "canceled" && "1px solid #FF4858"),
          padding: "2px 6px",
          width: "135px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {reservation?.taskStatus?.charAt(0).toUpperCase() +
          reservation?.taskStatus?.slice(1) || "No Data"}
      </Typography>
    </Box>
  );
};

export default StatusComponentForGroup;
