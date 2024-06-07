import { MoreVert } from "@mui/icons-material";
import React from "react";
import { Button } from "@mui/material";
import CustomerComponent from "../component/CustomerComponent";
import StatusComponentForReservation from "../component/StatusComponentForReservation";
import ScheduleComponent from "../component/ScheduleComponent";
import LocationComponent from "../component/LocationComponent";
import InvoiceComponent from "../component/InvoiceComponent";
import IssueListComponent from "../component/IssueListComponent";
import BidsActionComponent from "../component/BidsActionComponent";

const ReservationRequestTable = ({ reservationData }) => {
  console.log(reservationData[0]);
  return reservationData?.map((reservation) => (
    <tr
      style={{
        borderTop: "1px solid #D9D9D9",
        padding: "14px",
      }}
    >
      <td
        style={{
          padding: "14px",
          color: "#25213B",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        <CustomerComponent customer={reservation?.user} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>001</td>
      <td style={{ padding: "14px" }}>
        <StatusComponentForReservation reservation={reservation} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <ScheduleComponent reservation={reservation} />
      </td>
      <td style={{ padding: "14px", textAlign: "center", color: "#24459C" }}>
        {reservation?.machineType}
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <LocationComponent />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <InvoiceComponent />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <IssueListComponent />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>No Data</td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <BidsActionComponent />
      </td>
    </tr>
  ));
};

export default ReservationRequestTable;
