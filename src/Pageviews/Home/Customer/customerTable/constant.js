import ActionComponent from "./components/ActionComponent";
import BalanceComponent from "./components/BalanceComponent";
import CustomerNameEmailComponent from "./components/CustomerNameEmailComponent";
import DetailsComponent from "./components/DetailsComponent";
import LocationComponent from "./components/LocationComponent";
import MachineComponent from "./components/MachineComponent";
import SubscriptionComponent from "./components/SubscriptionComponent";

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
    renderCell: (props) => MachineComponent(props),
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
    renderCell: (props) => SubscriptionComponent(props),
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
    renderCell: (props) => ActionComponent(props),
  },
];
