import { Typography } from "@mui/material";
import ActionComponent from "./components/ActionComponent";
import BalanceComponent from "./components/BalanceComponent";
import CustomerNameEmailComponent from "./components/CustomerNameEmailComponent";
import LocationComponent from "./components/LocationComponent";
import MachineComponent from "./components/MachineComponent";
import SubscriptionComponent from "./components/SubscriptionComponent";

export const columns = [
  {
    field: "name",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        CUSTOMER NAME
      </Typography>
    ),
    width: 250,

    renderCell: (props) => <CustomerNameEmailComponent props={props} />,
  },
  {
    field: "email",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        EMAIL
      </Typography>
    ),
    width: 250,
  },
  {
    field: "location",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <LocationComponent props={props} />,
  },
  {
    field: "machine",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MACHINE
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <MachineComponent props={props} />,
  },
  {
    field: "balance",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        WALLET
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <BalanceComponent props={props} />,
  },
  {
    field: "subscription",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SUBSCRIPTION
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <SubscriptionComponent props={props} />,
  },
  {
    field: "action",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 230,
    renderCell: (props) => <ActionComponent props={props} />,
  },
];
