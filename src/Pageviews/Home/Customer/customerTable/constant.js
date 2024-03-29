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
    width: 230,

    renderCell: (props) => CustomerNameEmailComponent(props),
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 200,
  },
  {
    field: "machine",
    headerName: "Machine",
    width: 200,
    renderCell: (props) => MachineComponent(props),
  },
  {
    field: "location",
    headerName: "LOCATION",
    width: 250,
    renderCell: (props) => LocationComponent(props),
  },
  {
    field: "balance",
    headerName: "WALLET",
    headerAlign: "center",
    with: 280,
    renderCell: (props) => BalanceComponent(props),
  },
  {
    field: "subscription",
    headerName: "SUBSCRIPTION",
    width: 250,
    renderCell: (props) => SubscriptionComponent(props),
  },
  {
    field: "details",
    headerName: "DETAILS",
    width: 200,
    renderCell: (props) => DetailsComponent(props),
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 200,
    renderCell: (props) => <ActionComponent props={props} />,
  },
];
