import { Box, Button, Typography } from "@mui/material";
import ServiceProviderLocationAction from "../../request/component/ServiceProviderLocationAction";
import ServiceProviderRequestIssuesAction from "../../request/component/ServiceProviderRequestIssuesAction";
import ServiceProviderRequestAction from "../../request/component/ServiceProviderRequestAction";
import InvoiceAction from "./InvoiceAction";

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
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0 16px",
        }}
      >
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
          >
            {params.row.customerDetails?.name}
          </Typography>
          <Typography variant="p" sx={{ fontSize: "12px", color: "#6E6893" }}>
            {params.row.customerDetails?.phone}
          </Typography>
        </Box>
      </Box>
    ),
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
        {props?.row?.requestID}
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
    width: 150,
    renderCell: (params) => (
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
        {params?.row?.status}
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
    renderCell: (params) => (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="p"
          sx={{
            px: "16px",
            py: "4px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {params?.row?.schedule?.time}
        </Typography>
        <Typography
          variant="p"
          sx={{
            px: "16px",
            py: "4px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
          {params?.row?.schedule?.date}
        </Typography>
      </Box>
    ),
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
    renderCell: (props) => <InvoiceAction props={props} />,
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
    renderCell: (props) => <ServiceProviderRequestIssuesAction props={props} />,
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
