import { Box, Typography } from "@mui/material";
import ActionComponent from "./ActionComponent";
import pdfIcon from "../../../../Assets/Home/customer/pdf.png";

export const columns = [
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        REPORT NAME
      </Typography>
    ),
    width: 400,

    renderCell: (props) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={pdfIcon} alt="" />
        <Typography
          sx={{ color: "#25213B", fontSize: "14px", fontWeight: "600" }}
        >
          {props?.row?.report_name}
        </Typography>
      </Box>
    ),
  },
  {
    field: "email",
    headerAlign: "start",
    headerName: (
      <Typography
        sx={{
          color: "#6E6893",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        DESCRIPTION
      </Typography>
    ),
    width: 550,
    renderCell: (props) => (
      <Typography sx={{ color: "#25213B" }}>
        {props?.row?.description}
      </Typography>
    ),
  },
  {
    field: "machine",
    headerAlign: "start",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Create Date & Time
      </Typography>
    ),
    width: 350,
    renderCell: (props) => (
      <Typography sx={{ color: "#000000" }}>{props?.row?.date_time}</Typography>
    ),
  },
  {
    field: "action",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <>..</>,
  },
];
