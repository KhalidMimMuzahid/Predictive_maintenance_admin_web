import { Box, Typography } from "@mui/material";
import ServiceProviderRequestAction from "./ServiceProviderRequestAction";
import ServiceProviderLocationAction from "./ServiceProviderLocationAction";
import CustomerNameComponent from "./CustomerNameComponent";
import RequestIdComponent from "./RequestIdComponent";
import StatusComponent from "./StatusComponent";
import ServiceProviderRequestIssuesComponent from "./ServiceProviderRequestIssuesAction";
import ScheduleComponent from "./ScheduleComponent";
import InvoiceComponent from "./InvoiceComponent";

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
    renderCell: (props) => <RequestIdComponent props={props?.row} />,
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
    width: 150,
    renderCell: (props) => <StatusComponent props={props?.row} />,
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
    renderCell: (props) => <ScheduleComponent props={props} />,
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
    width: 150,
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
    renderCell: (props) => <InvoiceComponent props={props} />,
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
      <ServiceProviderRequestIssuesComponent props={props} />
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
    renderCell: (props) => <ServiceProviderRequestAction props={props} />,
  },
];
