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
    width: 200,
    renderCell: (params) => (
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
          <PermIdentityIcon
            sx={{ padding: "6px", background: "#D9E3FF", borderRadius: "100%" }}
          />
          <Typography
            sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
          >
            {params.row?.name}
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
        {props?.row?.position}
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
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {params?.row?.phone}
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
    width: 200,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {params?.row?.serviced}
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
    width: 200,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {params?.row?.joined}
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
    renderCell: (props) => <TeamAction props={props} />,
  },
];
