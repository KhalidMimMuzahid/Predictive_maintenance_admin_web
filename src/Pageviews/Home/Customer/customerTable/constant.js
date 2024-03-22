import BalanceComponent from "./components/BalanceComponent";
import CustomerNameEmailComponent from "./components/CustomerNameEmailComponent";
import DetailsComponent from "./components/DetailsComponent";
import LocationComponent from "./components/LocationComponent";

export const columns = [
  {
    field: "name",
    headerName: "CUSTOMER NAME",
    flex: 1,
    renderCell: (props) => CustomerNameEmailComponent(props),
  },
  {
    field: "email",
    headerName: "EMAIL",
    flex: 1,
  },
  {
    field: "machine",
    headerName: "Machine",
    flex: 1,
  },
  {
    field: "location",
    headerName: "LOCATION",
    flex: 1,
    renderCell: (props) => LocationComponent(props),
  },
  {
    field: "balance",
    headerName: "WALLET",
    headerAlign: "center",
    renderCell: (props) => BalanceComponent(props),
  },
  {
    field: "subscription",
    headerName: "SUBSCRIPTION",
    flex: 1,
  },
  {
    field: "details",
    headerName: "DETAILS",
    flex: 1,
    renderCell: (props) => DetailsComponent(props),
  },
  {
    field: "action",
    headerName: "ACTION",
    flex: 1,
  },
];
