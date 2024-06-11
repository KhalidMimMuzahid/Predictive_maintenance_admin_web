import { Box, Button, Typography } from "@mui/material";
import CompanyNameComponent from "./CompanyNameComponent";
import LocationComponent from "./LocationComponent";
import TotalTeamMember from "./TotalTeamMember";
import ManagerComponent from "./ManagerComponent";
import TeamActionComponent from "./TeamActionComponent";

export const columns = [
  {
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        COMPANY NAME
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <CompanyNameComponent props={props?.row} />,
  },
  {
    field: "location",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <LocationComponent props={props?.row} />,
  },
  {
    field: "email",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        EMAIL
      </Typography>
    ),
    width: 230,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "400" }}
      >
        {params?.row?.email}
      </Typography>
    ),
  },
  {
    field: "totalMember",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        TOTAL MEMBER
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <TotalTeamMember props={props?.row} />,
  },
  {
    field: "manager",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        MANAGER
      </Typography>
    ),
    width: 280,
    renderCell: (props) => <ManagerComponent props={props?.row} />,
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
    width: 100,
    renderCell: (props) => <TeamActionComponent props={props?.row} />,
  },
];
