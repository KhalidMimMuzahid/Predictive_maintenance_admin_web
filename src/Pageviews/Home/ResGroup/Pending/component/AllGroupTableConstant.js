import { Typography } from "@mui/material";
import GroupNameComponent from "./GroupNameComponent";
import GroupIdComponent from "./GroupIdComponent";
import ClosedStatusComponent from "./ClosedStatusComponent";
import BidsComponent from "./BidsComponent";
import AllGroupActionComponent from "./AllGroupActionComponent";

export const columns = [
  {
    field: "group_name",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        GROUP NAME
      </Typography>
    ),
    renderCell: (props) => <GroupNameComponent props={props?.row?.data} />,
    width: 300,
  },
  {
    field: "group_id",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        GROUP ID
      </Typography>
    ),
    renderCell: (props) => <GroupIdComponent props={props?.row?.data} />,
    width: 250,
  },
  {
    field: "closed_status",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        CLOSED STATUS
      </Typography>
    ),
    renderCell: (props) => <ClosedStatusComponent props={props?.row?.data} />,
    width: 350,
  },
  {
    field: "bids",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        BIDS
      </Typography>
    ),
    renderCell: (props) => <BidsComponent props={props?.row?.data} />,
    width: 300,
  },
  {
    field: "action",
    headerClassName: "table-header",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        ACTION
      </Typography>
    ),
    renderCell: (props) => <AllGroupActionComponent props={props?.row?.data} />,
    width: 100,
  },
];
