import { Box, Typography } from "@mui/material";
import RequestAction from "./RequestAction";
import RequestIdComponent from "./RequestIdComponent";
import WhenComponent from "./WhenComponent";
import MachineModelComponent from "./MachineModelComponent";
import ServiceProviderCompanyComponent from "./ServiceProviderCompanyComponent";
import StatusComponent from "./StatusComponent";

export const columns = [
  {
    field: "washingMachineId",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        REQUEST ID
      </Typography>
    ),
    width: 150,
    renderCell: (props) => (
      <RequestIdComponent requestID={props?.row?.requestId} />
    ),
  },
  {
    field: "createdAt",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        WHEN
      </Typography>
    ),
    width: 190,
    renderCell: (props) => <WhenComponent props={props?.row} />,
  },
  {
    field: "machineModel",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MACHINE MODEL
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <MachineModelComponent props={props?.row} />,
  },
  {
    field: "serviceProviderCompany",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SERVICE PROVIDER COMPANY
      </Typography>
    ),
    width: 300,
    renderCell: (props) => (
      <ServiceProviderCompanyComponent props={props?.row} />
    ),
  },
  {
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
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
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 100,
    renderCell: (props) => <RequestAction props={props} />,
  },
];
