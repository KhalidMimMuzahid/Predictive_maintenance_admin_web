import { Badge, Typography } from "@mui/material";
import React from "react";

const RequestIdComponent = ({ props }) => {
  console.log(props?.row?.reservationRequestGroup);
  return (
    <div>
      <Badge
        badgeContent={props?.row?.reservationRequestGroup ? "G" : null}
        color="success"
      >
        <Typography color="action">{props?.row?.requestId}</Typography>
      </Badge>
    </div>
  );
};

export default RequestIdComponent;
