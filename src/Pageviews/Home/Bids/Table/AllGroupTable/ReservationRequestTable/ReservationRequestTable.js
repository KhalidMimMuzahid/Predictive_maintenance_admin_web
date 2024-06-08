import React from "react";
import CustomerComponent from "../component/CustomerComponent";
import StatusComponentForReservation from "../component/StatusComponentForReservation";
import ScheduleComponent from "../component/ScheduleComponent";
import LocationComponent from "../component/LocationComponent";
import InvoiceComponent from "../component/InvoiceComponent";
import IssueListComponent from "../component/IssueListComponent";
import BidsActionComponent from "../component/BidsActionComponent";
import AssignComponent from "../component/AssignComponent";

const ReservationRequestTable = ({ reservationData }) => {
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
      <td
        style={{
          padding: "14px",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
        <InvoiceComponent reservation={reservation} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <IssueListComponent reservation={reservation} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <AssignComponent reservation={reservation} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <BidsActionComponent />
      </td>
    </tr>
  ));
};

export default ReservationRequestTable;
