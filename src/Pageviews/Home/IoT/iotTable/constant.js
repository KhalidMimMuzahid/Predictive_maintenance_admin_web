import { Typography } from "@mui/material";
import CustomerComponent from "./iotTableComponents/customerComponent/CustomerComponent";
import OptionsComponent from "./iotTableComponents/optionsComponent/OptionsComponent";
import PriceComponent from "./iotTableComponents/priceComponent/PriceComponent";
import ProductComponent from "./iotTableComponents/productComponent/ProductComponent";
import StatusComponent from "./iotTableComponents/statusComponent/StatusComponent";

export const columns = [
  {
    field: "product",
    headerName: "PRODUCT",
    width: 270,
    renderCell: (props) => <ProductComponent props={props} />,
  },
  {
    field: "state",
    headerName: "STATE",
    width: 270,
    renderCell: (props) => (
      <Typography sx={{ color: "#6E6893", fontWeight: "500" }}>
        Not Found
      </Typography>
    ),
  },
  {
    field: "customer",
    headerName: "CUSTOMER",
    width: 270,
    renderCell: (props) => <CustomerComponent props={props} />,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 270,
    renderCell: (props) => <StatusComponent props={props} />,
  },
  {
    field: "price",
    headerName: "PRICE",
    width: 270,
    renderCell: (props) => <PriceComponent props={props} />,
  },
  {
    field: "options",
    headerName: "ACTION",
    renderCell: (props) => <OptionsComponent props={props} />,
  },
];
