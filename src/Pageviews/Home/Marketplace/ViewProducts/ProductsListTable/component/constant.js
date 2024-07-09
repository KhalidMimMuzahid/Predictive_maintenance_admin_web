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
    renderCell: (props) => (
      <Typography sx={{ color: "#868DAA" }}>{props?.row?.productId}</Typography>
    ),
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
    width: 220,
    renderCell: (props) => (
      <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
        {props?.row?.name + " " + props?.row?.model}
      </Typography>
    ),
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
    renderCell: (props) => <Typography>{props?.row?.details}</Typography>,
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
    width: 125,
    renderCell: (props) => (
      <Typography
        sx={{
          background:
            props?.row?.stockManagement?.availableStock > 0
              ? "#D7FCF9"
              : "#FEE8EA",
          color:
            props?.row?.stockManagement?.availableStock > 0
              ? "#20C18D"
              : "#FF6F79",
          padding: "2px 8px",
        }}
      >
        {props?.row?.stockManagement?.availableStock > 0
          ? "In Stock"
          : "Stock Out"}
      </Typography>
    ),
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
    renderCell: (props) => (
      <Typography
        sx={{
          textAlign: "center",
          width: "100%",
          color: "#4D5983",
          fontWeight: "600",
        }}
      >
        {props?.row?.category}
      </Typography>
    ),
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
    renderCell: (props) => (
      <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
        {props?.row?.regularPrice}
      </Typography>
    ),
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
    renderCell: (props) => (
      <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
        {props?.row?.salePrice}
      </Typography>
    ),
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
    renderCell: (props) => <ActionComponent props={props?.row} />,
  },
];
