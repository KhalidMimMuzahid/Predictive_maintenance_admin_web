import { Box, Button, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TeamAction from "./TeamAction";

export const columns = [
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        TEAM MEMBER NAME
      </Typography>
    ),
    width: 240,
    renderCell: (props) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0 16px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <img
            src={props?.row?.photoUrl}
            style={{
              background: "#D9E3FF",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
            }}
            alt=""
          />
          <Typography
            sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
          >
            {props?.row?.name?.firstName + " " + props?.row?.name?.lastName}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "position",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        POSITION
      </Typography>
    ),
    width: 200,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
      >
        {props?.row?.currentState?.designation}
      </Typography>
    ),
  },
  {
    field: "phone",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        PHONE
      </Typography>
    ),
    width: 200,
    renderCell: (props) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {props?.row?.user?.phone || "No Data Found"}
      </Typography>
    ),
  },
  {
    field: "serviced",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        SERVICED
      </Typography>
    ),
    width: 180,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Not Created Yet
      </Typography>
    ),
  },
  {
    field: "joined",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        JOINED
      </Typography>
    ),
    width: 130,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Not Yet
      </Typography>
    ),
  },
  {
    field: "action",
    headerName: (
      <Typography
        sx={{ fontWeight: "600", fontSize: "14px", color: "#6E6893" }}
      >
        ACTION
      </Typography>
    ),
    width: 100,
    renderCell: (props) => <TeamAction props={props?.row} />,
  },
];
