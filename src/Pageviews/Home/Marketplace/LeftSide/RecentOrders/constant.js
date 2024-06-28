import { Typography } from "@mui/material";

export const columns = [
  {
    field: "_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ID
      </Typography>
    ),
    width: 180,

    renderCell: (props) => {
      <Typography>{props?.row?._id}</Typography>;
    },
  },
  {
    field: "date",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        DATE
      </Typography>
    ),
    width: 200,

    renderCell: (props) => {
      <Typography>{props?.row?.date}</Typography>;
    },
  },
  {
    field: "products",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        PRODUCTS
      </Typography>
    ),
    width: 225,

    renderCell: (props) => {
      <Typography>{props?.row?.products}</Typography>;
    },
  },
  {
    field: "payment",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        PAYMENT
      </Typography>
    ),
    width: 200,
    renderCell: (props) => {
      <Typography
        sx={{
          background: props?.row?.payment === "paid" ? "#D7FCF9" : "#EBEEF3",
          padding: "8px",
        }}
      >
        {props?.row?.payment}
      </Typography>;
    },
  },
  {
    field: "fulfillment",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        FULFILLMENT
      </Typography>
    ),
    width: 200,

    renderCell: (props) => {
      <Typography>{props?.row?.fulfillment}</Typography>;
    },
  },
  {
    field: "total",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        TOTAL
      </Typography>
    ),
    width: 200,

    renderCell: (props) => {
      <Typography>{props?.row?.total}</Typography>;
    },
  },
];
