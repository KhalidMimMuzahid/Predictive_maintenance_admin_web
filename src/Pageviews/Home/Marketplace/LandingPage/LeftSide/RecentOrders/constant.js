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
    width: 280,
    renderCell: (props) => {
      return (
        <Typography sx={{ color: "#868DAA" }}>{props?.row?._id}</Typography>
      );
    },
  },
  {
    field: "createdAt",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Date
      </Typography>
    ),
    width: 150,
    renderCell: (props) => {
      const timestamp = props?.row?.createdAt;
      const date = new Date(timestamp);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      return <Typography sx={{ color: "#4D5983" }}>{formattedDate}</Typography>;
    },
  },
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Products
      </Typography>
    ),
    width: 225,
    renderCell: (props) => {
      return (
        <Typography sx={{ color: "#4D5983" }}>
          {props?.row?.product?.name}
        </Typography>
      );
    },
  },
  {
    field: "isPaid",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Payment
      </Typography>
    ),
    width: 150,
    renderCell: (props) => {
      return (
        <Typography
          sx={{
            background:
              props?.row?.paidStatus?.isPaid === true ? "#D7FCF9" : "#EBEEF3",
            color:
              props?.row?.paidStatus?.isPaid === true ? "#20C18D" : "#8091A3",
            padding: "8px",
          }}
        >
          {props?.row?.paidStatus?.isPaid === true ? "Paid" : "Unpaid"}
        </Typography>
      );
    },
  },
  {
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Fulfillment
      </Typography>
    ),
    width: 200,

    renderCell: (props) => {
      return (
        <Typography
          sx={{
            color: "#4D5983",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              color:
                props?.row?.status === "delivered"
                  ? "#20C18D"
                  : props?.row?.status === "pending"
                  ? "#f7cb73"
                  : props?.row?.status === "in-progress" && "#F68B1F",
            }}
          >
            {" "}
            &#x2022;
          </span>
          {props?.row?.status?.charAt(0).toUpperCase() +
            props?.row?.status?.slice(1)}
        </Typography>
      );
    },
  },
  {
    field: "total",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        Total
      </Typography>
    ),
    width: 200,

    renderCell: (props) => {
      return (
        <Typography sx={{ color: "#4D5983", fontWeight: "700" }}>
          ¥{props?.row?.cost?.totalAmount}
        </Typography>
      );
    },
  },
];
