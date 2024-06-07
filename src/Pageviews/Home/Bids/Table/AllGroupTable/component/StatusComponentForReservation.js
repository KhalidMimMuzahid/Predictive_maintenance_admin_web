import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponentForReservation = ({ reservation }) => {
  console.log(reservation?.status);
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "none",
          fontSize: "12px",
          fontWeight: "600",
          textAlign: "center",
          background: reservation?.status === "completed" && "#2FD573",
          color:
            (reservation?.status === "completed" && "White") ||
            (reservation?.status === "pending" && "#FFA503") ||
            (reservation?.status === "canceled" && "#FF4858"),
          border:
            (reservation?.status === "completed" && "1px solid White") ||
            (reservation?.status === "pending" && "1px solid #FFA503") ||
            (reservation?.status === "canceled" && "1px solid #FF4858"),
          padding: "2px 6px",
          width: "96px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {reservation?.status?.charAt(0).toUpperCase() +
          reservation?.status?.slice(1) || "No Data"}
      </Typography>
    </Box>
  );
};

export default StatusComponentForReservation;
