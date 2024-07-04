import { Typography } from "@mui/material";
import ActionComponent from "./ActionComponent";

export const columns = [
  {
    field: "id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        ID
      </Typography>
    ),
    width: 100,
    renderCell: (props) => <Typography>001</Typography>,
  },
  {
    field: "product_title",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        PRODUCT TITLE
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <Typography>Watch</Typography>,
  },
  {
    field: "details",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        DETAILS
      </Typography>
    ),
    width: 400,
    renderCell: (props) => (
      <Typography>
        Smart Watch I9 Ultra Max Original 2.19 <br /> Inch Full Touch Wireless
        Charging ...
      </Typography>
    ),
  },
  {
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        STATUS
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <Typography>In Stock</Typography>,
  },
  {
    field: "product_category",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        PRODUCT CATEGORY
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <Typography>Wearable Technology</Typography>,
  },
  {
    field: "regular_price",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        Regular Price (¥)
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <Typography>74,500</Typography>,
  },
  {
    field: "sale_price",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        Regular Price (¥)
      </Typography>
    ),
    width: 150,
    renderCell: (props) => <Typography>72,500</Typography>,
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
    renderCell: (props) => <ActionComponent />,
  },
];
