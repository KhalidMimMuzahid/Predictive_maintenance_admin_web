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
    flex: 1,
    renderCell: (props) => ProductComponent(props),
  },
  {
    field: "state",
    headerName: "STATE",
    flex: 1,
    renderCell: (props) => (
      <Typography sx={{ color: "#6E6893", fontWeight: "500" }}>
        {props?.row?.options?.purpose}
      </Typography>
    ),
  },
  {
    field: "customer",
    headerName: "CUSTOMER",
    flex: 1,
    renderCell: (props) => <CustomerComponent props={props} />,
  },
  {
    field: "status",
    headerName: "STATUS",
    flex: 1,
    renderCell: (props) => StatusComponent(props),
  },
  {
    field: "price",
    headerName: "PRICE",
    flex: 1,
    renderCell: (props) => PriceComponent(props),
  },
  {
    field: "options",
    headerName: "ACTION",
    renderCell: (props) => <OptionsComponent props={props} />,
  },
];
