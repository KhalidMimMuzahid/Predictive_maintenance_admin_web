import { Box, Typography } from "@mui/material";
import React from "react";

const StatusComponent = ({ props }) => {
  return (
    <Box>
      {props?.status === "Pending" && (
        <Typography
          sx={{
            fontWeight: "400",
            width: "120px",
            color: "#FFA503",
            border: "1px solid #FFA503",
            borderRadius: "20px",
            textAlign: "center",
            padding: "4px",
          }}
        >
          {props?.status}
        </Typography>
      )}
      {props?.status === "Paid" && (
        <Typography
          sx={{
            fontWeight: "400",
            width: "120px",
            color: "#2FD573",
            border: "1px solid #2FD573",
            borderRadius: "20px",
            textAlign: "center",
            padding: "4px",
          }}
        >
          {props?.status}
        </Typography>
      )}
      {props?.status === "Requested" && (
        <Typography
          sx={{
            fontWeight: "400",
            width: "120px",
            color: "#26C1C9",
            border: "1px solid #26C1C9",
            borderRadius: "20px",
            textAlign: "center",
            padding: "4px",
          }}
        >
          {props?.status}
        </Typography>
      )}
    </Box>
  );
};

export default StatusComponent;
