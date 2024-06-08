import { Badge, Typography } from "@mui/material";
import React from "react";

const RequestIdComponent = ({ props }) => {
  // console.log(props?.row?.reservationRequestGroup);
  return (
    <div style={{ width: "100%" }}>
      <Badge
        badgeContent={props?.row?.reservationRequestGroup ? "G" : null}
        color="success"
      >
        <Typography
          color="action"
          sx={{
            color: "#25213B",
            fontWeight: "600",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {props?.row?.requestId}
        </Typography>
      </Badge>
    </div>
  );
};

export default RequestIdComponent;
