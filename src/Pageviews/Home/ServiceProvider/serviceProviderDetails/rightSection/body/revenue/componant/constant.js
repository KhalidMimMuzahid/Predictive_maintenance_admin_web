import { Box, Typography } from "@mui/material";
import RevenueAction from "./RevenueAction";
import MonthComponent from "./MonthComponent";
import TotalServiceComponent from "./TotalServiceComponent";
import TotalAmountComponent from "./TotalAmountComponent";

export const columns = [
  {
    field: "month",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        MONTH
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <MonthComponent props={props?.row} />,
  },
  {
    field: "total_service",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        TOTAL SERVICE
      </Typography>
    ),
    width: 350,
    renderCell: (props) => <TotalServiceComponent props={props?.row} />,
  },
  {
    field: "total_amount",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        TOTAL AMOUNT
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <TotalAmountComponent props={props?.row} />,
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
    renderCell: (props) => <RevenueAction props={props?.row} />,
  },
];
