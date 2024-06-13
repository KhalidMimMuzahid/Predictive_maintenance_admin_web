import { Typography } from "@mui/material";
import CustomerNameComponent from "./CustomerNameComponent";
import TransactionTypeComponent from "./TransactionTypeComponent";
import AmountPointMbComponent from "./AmountPointMbComponent";
import TransactionIdComponent from "./TransactionIdComponent";
import DateComponent from "./DateComponent";
import ActionComponent from "./ActionComponent";

export const columns = [
  {
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        CUSTOMER NAME
      </Typography>
    ),
    width: 280,
    renderCell: (props) => <CustomerNameComponent props={props?.row} />,
  },
  {
    field: "transaction_type",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        TRANS. TYPE
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <TransactionTypeComponent props={props?.row} />,
  },
  {
    field: "amount_point_mb",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        AMOUNT/POINT/MB
      </Typography>
    ),
    width: 270,
    renderCell: (props) => <AmountPointMbComponent props={props?.row} />,
  },
  {
    field: "transaction_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        TRANS. ID
      </Typography>
    ),
    width: 180,
    renderCell: (props) => <TransactionIdComponent props={props?.row} />,
  },
  {
    field: "date",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Date & Time
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <DateComponent props={props?.row} />,
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
    renderCell: (props) => <ActionComponent props={props?.row} />,
  },
];

// {
//     customer: {
//       customerName: "Hank Red",
//       phone: "012-345-6789",
//     },
//     transaction_type: "Transfer",
//     amount_point_mb: 4400,
//     transaction_id: "T010",
//     date: {
//       date: "2024-06-12",
//       time: "19:30",
//     },
//   },
