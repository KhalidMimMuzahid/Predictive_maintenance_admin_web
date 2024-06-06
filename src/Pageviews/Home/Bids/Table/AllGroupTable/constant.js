import { Typography } from "@mui/material";
import CustomerNameComponent from "./component/CustomerNameComponent";
import RequestId from "./component/RequestId";

export const columns = [
  {
    field: "name",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        CUSTOMER NAME
      </Typography>
    ),
    width: 250,
    renderCell: (props) => <CustomerNameComponent props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        REQUEST ID
      </Typography>
    ),
    width: 200,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        STATUS
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        SCHEDULE
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        SERVICE TYPE
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        LOCATION
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
       INVOICE
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        REQUEST ID
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
  {
    field: "request_id",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        REQUEST ID
      </Typography>
    ),
    width: 300,
    renderCell: (props) => <RequestId props={props?.row} />,
  },
];
