import { Typography } from "@mui/material";
import ServiceProviderTableAction from "./ServiceProviderTableAction";
import ServiceProviderNameComponent from "./ServiceProviderNameComponent";
import LocationComponent from "./LocationComponent";
import TotalOrdersComponent from "./TotalOrdersComponent";
import ManagerComponent from "./ManagerComponent";
import StatusComponent from "./StatusComponent";

export const columns = [
  {
    headerClassName: "table-header",
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SERVICE PROVIDER NAME
      </Typography>
    ),
    width: 270,
    renderCell: (props) => <ServiceProviderNameComponent props={props?.row} />,
  },
  {
    headerClassName: "table-header",
    field: "address",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 260,
    renderCell: (props) => <LocationComponent props={props?.row} />,
  },
  {
    field: "email",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        EMAIL
      </Typography>
    ),
    width: 230,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "400" }}
      >
        {props?.row?.emergencyContact?.email}
      </Typography>
    ),
  },
  {
    headerClassName: "table-header",
    field: "total_orders",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        TOTAL ORDERS
      </Typography>
    ),
    width: 160,
    renderCell: (props) => <TotalOrdersComponent props={props?.row} />,
  },
  {
    headerClassName: "table-header",
    field: "manager",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MANAGER
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <ManagerComponent props={props?.row} />,
  },
  {
    headerClassName: "table-header",
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        STATUS
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <StatusComponent props={props?.row} />,
  },
  {
    headerClassName: "table-header",
    field: "action",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 140,
    renderCell: (props) => <ServiceProviderTableAction props={props?.row} />,
  },
];
