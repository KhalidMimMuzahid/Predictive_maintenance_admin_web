import { Anchor, CheckBox, VisibilityOutlined } from "@mui/icons-material";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import AssignServProvViewLocationComp from "./AssignServProvViewLocationComp";

export const columns = [
  {
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SERVICE PROVIDER NAME
      </Typography>
    ),
    width: 260,
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
          <Anchor sx={{ color: "#F15F5F" }} />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#25213B",
              fontWeight: "600",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {props?.row?.companyName}
          </Typography>
        </Box>
      </Box>
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
    width: 155,
    renderCell: (props) => (
      <Box>
        <Typography
          sx={{
            border: "1px solid #2FD573",
            width: "60px",
            textAlign: "center",
            padding: "2px 8px",
            borderRadius: "20px",
            fontSize: "10px",
            color: "#2FD573",
          }}
        >
          {props?.row?.status}
        </Typography>
      </Box>
    ),
  },
  {
    field: "address",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <AssignServProvViewLocationComp props={props} />,
  },
  {
    field: "total_orders",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ASSIGN
      </Typography>
    ),
    width: 200,
    renderCell: (params) => <Checkbox />,
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
    width: 140,
    renderCell: (props) => <VisibilityOutlined />,
  },
];
