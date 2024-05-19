import React from "react";
import Details from "./details/Details";
import MachineStatus from "./machineStatus/MachineStatus";
import Reservation from "./reservation/Reservation";
import Status from "./status/Status";

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
      {headerName === "reservation" && (
        <Reservation customerDetailsData={customerDetailsData} props={props} />
      )}
      {headerName === "status" && (
        <Status customerDetailsData={customerDetailsData} props={props} />
      )}
    </>
  );
};

export default Body;
