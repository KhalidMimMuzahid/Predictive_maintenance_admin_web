import { Typography } from "@mui/material";
import GroupNameComponent from "./GroupNameComponent";
import GroupIdComponent from "./GroupIdComponent";

export const columns = [
  {
    field: "group_name",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        Group Name
      </Typography>
    ),
    renderCell: (props) => <GroupNameComponent props={props?.row?.data} />,
    width: 300,
  },
  {
    field: "group_id",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        GROUP ID
      </Typography>
    ),
    renderCell: (props) => <GroupIdComponent props={props?.row?.data} />,
    width: 300,
  },
  {
    field: "closed_status",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        CLOSED STATUS
      </Typography>
    ),
    renderCell: (props) => <Typography>Status</Typography>,
    width: 300,
  },
  {
    field: "bids",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>BIDS</Typography>
    ),
    renderCell: (props) => <Typography>Bids</Typography>,
    width: 300,
  },
  {
    field: "action",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        ACTION
      </Typography>
    ),
    renderCell: (props) => <Typography>...</Typography>,
    width: 300,
  },
];
