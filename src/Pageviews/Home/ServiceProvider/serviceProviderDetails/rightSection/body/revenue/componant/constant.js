import { Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RevenueAction from "./RevenueAction";

export const columns = [
  {
    field: "month",
    headerName: "MONTH",
    width: 350,
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
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
          >
            {params.row?.month}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "total_service",
    headerName: "TOTAL SERVICE",
    width: 350,
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
      >
        {props?.row?.total_service}
      </Typography>
    ),
  },
  {
    field: "total_amount",
    headerName: "TOTAL AMOUNT",
    width: 300,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        ¥{params?.row?.total_amount}
      </Typography>
    ),
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 100,
    renderCell: (props) => <RevenueAction props={props} />,
  },
];
