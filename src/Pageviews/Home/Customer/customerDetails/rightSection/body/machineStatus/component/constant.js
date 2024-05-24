import { Box, Typography } from "@mui/material";
import MachineStatusAction from "./MachineStatusAction";
import machineIcon from "../../../../../../../../Assets/Home/customer/machine.png";

export const columns = [
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MACHINE
      </Typography>
    ),
    width: 280,
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
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "100%",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={machineIcon} alt="" />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
          >
            {params.row.name}
          </Typography>
          <Typography variant="p" sx={{ fontSize: "12px", color: "#6E6893" }}>
            {params.row.uid}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "address",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MODEL
      </Typography>
    ),
    width: 175,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}
      >
        {props?.row?.model}
      </Typography>
    ),
  },
  {
    field: "isConnected",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SENSOR STATUS
      </Typography>
    ),
    width: 225,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}
      >
        {props?.row?.sensorModulesAttached?.length
          ? "connected"
          : "non-connected"}
      </Typography>
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
    width: 150,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          bgcolor: "#2FD573",
          color: "#FFFFFF",
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "11px",
        }}
      >
        {params?.row?.packageStatus}
      </Typography>
    ),
  },
  {
    field: "environment",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        MACHINE STATUS
      </Typography>
    ),
    width: 200,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          color: "#F15F5F",
          bgcolor: "#FFB8B8",
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "11px",
        }}
      >
        {params?.row?.status}
      </Typography>
    ),
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
    renderCell: (props) => <MachineStatusAction props={props} />,
  },
];
