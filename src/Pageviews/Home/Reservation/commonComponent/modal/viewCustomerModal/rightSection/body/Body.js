import { Box } from "@mui/material";
import React from "react";
import Details from "./details/Details";
import MachineStatus from "./machineStatus/MachineStatus";

const Body = ({ headerName, setHeaderName, customerDetailsData, props }) => {
  return (
    <>
      {headerName === "customer" && (
        <Details customerDetailsData={customerDetailsData} />
      )}
      {headerName === "machine" && (
        <MachineStatus
          customerDetailsData={customerDetailsData}
          props={props}
        />
      )}
    </>
  );
};

export default Body;
