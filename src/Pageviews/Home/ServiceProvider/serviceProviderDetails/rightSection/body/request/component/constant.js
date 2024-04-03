import { Box, Typography } from "@mui/material";
import ServiceProviderRequestAction from "./ServiceProviderRequestAction";
import ServiceProviderLocationAction from "./ServiceProviderLocationAction";
import ServiceProviderRequestIssuesAction from "./ServiceProviderRequestIssuesAction";

export const columns = [
  {
    field: "customerDetails",
    headerName: "CUSTOMER NAME",
    width: 200,
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
    headerName: "REQUEST ID",
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
    headerName: "STATUS",
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
    headerName: "SCHEDULE",
    width: 150,
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
    headerName: "LOCATION",
    width: 200,
    renderCell: (props) => <ServiceProviderLocationAction props={props} />,
  },
  {
    field: "invoice",
    headerName: "INVOICE",
    width: 110,
    renderCell: (props) => (
      <Box>
        {props?.row?.invoice === "Create" && (
          <Typography sx={{ color: "#2196F3" }}>
            {props?.row?.invoice}
          </Typography>
        )}
        {props?.row?.invoice === "Send" && (
          <Typography sx={{ color: "#14B8A6" }}>
            {props?.row?.invoice}
          </Typography>
        )}
        {props?.row?.invoice === "Ongoing" && (
          <Typography sx={{ color: "#7FC008" }}>
            {props?.row?.invoice}
          </Typography>
        )}
      </Box>
    ),
  },
  {
    field: "issues",
    headerName: "ISSUES",
    width: 140,
    renderCell: (props) => <ServiceProviderRequestIssuesAction props={props} />,
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 100,
    renderCell: (props) => <ServiceProviderRequestAction props={props} />,
  },
];
