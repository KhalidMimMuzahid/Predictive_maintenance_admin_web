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
    width: 250,

    renderCell: (props) => <CustomerNameEmailComponent props={props} />,
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 250,
  },
  {
    field: "location",
    headerName: "LOCATION",
    width: 250,
    renderCell: (props) => <LocationComponent props={props} />,
  },
  {
    field: "machine",
    headerName: "Machine",
    width: 150,
    renderCell: (props) => <MachineComponent props={props} />,
  },
  {
    field: "balance",
    headerName: "WALLET",
    width: 250,
    renderCell: (props) => <BalanceComponent props={props} />,
  },
  {
    field: "subscription",
    headerName: "SUBSCRIPTION",
    width: 200,
    renderCell: (props) => <SubscriptionComponent props={props} />,
  },
  // {
  //   field: "details",
  //   headerName: "DETAILS",
  //   width: 200,
  //   renderCell: (props) => <DetailsComponent props={props} />,
  // },
  {
    field: "action",
    headerName: "ACTION",
    width: 200,
    renderCell: (props) => <ActionComponent props={props} />,
  },
];
