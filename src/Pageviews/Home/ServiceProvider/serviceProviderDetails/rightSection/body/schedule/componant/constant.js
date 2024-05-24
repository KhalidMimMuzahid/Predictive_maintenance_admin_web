import ServiceProviderLocationAction from "../../request/component/ServiceProviderLocationAction";
import ServiceProviderRequestIssuesAction from "../../request/component/ServiceProviderRequestIssuesAction";
import ServiceProviderRequestAction from "../../request/component/ServiceProviderRequestAction";
import InvoiceAction from "./InvoiceAction";
import CustomerNameComponent from "../../request/component/CustomerNameComponent";
import ScheduleComponent from "../../request/component/ScheduleComponent";
import { Typography } from "@mui/material";

export const columns = [
  {
    field: "customerDetails",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        CUSTOMER NAME
      </Typography>
    ),
    width: 180,
    renderCell: (props) => <CustomerNameComponent props={props?.row} />,
  },
  {
    field: "requestID",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        REQUEST ID
      </Typography>
    ),
    width: 150,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
      >
        {props?.row?.reservationRequest?.requestId}
      </Typography>
    ),
  },
  {
    field: "status",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        STATUS
      </Typography>
    ),
    width: 120,
    renderCell: (props) => (
      <Typography
        variant="p"
        sx={{
          color: "#FFA503",
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "11px",
          border: "1px solid #FFA503",
        }}
      >
        {props?.row?.reservationRequest?.status.charAt(0).toUpperCase() +
          props?.row?.reservationRequest?.status.slice(1)}
        {props?.row?.status}
      </Typography>
    ),
  },
  {
    field: "schedule",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        SCHEDULE
      </Typography>
    ),
    width: 140,
    renderCell: (props) => <ScheduleComponent props={props?.row} />,
  },
  {
    field: "location",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        LOCATION
      </Typography>
    ),
    width: 130,
    renderCell: (props) => <ServiceProviderLocationAction props={props} />,
  },
  {
    field: "invoice",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        INVOICE
      </Typography>
    ),
    width: 110,
    renderCell: (props) => <InvoiceAction props={props?.row} />,
  },
  {
    field: "issues",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        ISSUES
      </Typography>
    ),
    width: 150,
    renderCell: (props) => (
      <ServiceProviderRequestIssuesAction props={props?.row} />
    ),
  },
  {
    field: "action",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        ACTION
      </Typography>
    ),
    width: 100,
    renderCell: (props) => <ServiceProviderRequestAction props={props?.row} />,
  },
];
