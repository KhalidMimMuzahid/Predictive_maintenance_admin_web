import { Typography } from "@mui/material";
import CustomerOrServiceProviderComponent from "./CustomerOrServiceProviderComponent";
import OrderNumberComponent from "./OrderNumberComponent";
import OrderDateComponent from "./OrderDateComponent";
import InvoicedAmount from "./InvoicedAmount";
import StatusComponent from "./StatusComponent";
import ActionComponent from "./ActionComponent";

export const  columns = [
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        CUSTOMER / SERVICE PROVIDER
      </Typography>
    ),
    width: 350,

    renderCell: (props) => (
      <CustomerOrServiceProviderComponent props={props?.row} />
    ),
  },
  {
    field: "order_number",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        ORDER NUMBER
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <OrderNumberComponent props={props?.row} />,
  },
  {
    field: "date",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        ORDER DATE
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <OrderDateComponent props={props?.row} />,
  },
  {
    field: "invoiced_amount",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        INVOICED AMOUNT
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <InvoicedAmount props={props?.row} />,
  },
  {
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        STATUS
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <StatusComponent props={props?.row} />,
  },
  {
    field: "action",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        ACTION
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <ActionComponent props={props?.row} />,
  },
];
