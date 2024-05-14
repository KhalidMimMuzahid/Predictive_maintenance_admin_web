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
    width: 310,
    renderCell: (props) => <ProductComponent props={props} />,
  },
  {
    field: "state",
    headerName: "STATE",
    width: 310,
    renderCell: (props) => <ProductComponent props={props} />,
  },
  {
    field: "customer",
    headerName: "CUSTOMER",
    width: 310,
    renderCell: (props) => <PriceComponent props={props} />,
  },
  {
    field: "status",
    headerName: "STATUS",
    width: 310,
    renderCell: (props) => <PriceComponent props={props} />,
  },
  {
    field: "options",
    headerName: "ACTION",
    renderCell: (props) => <OptionsComponent props={props} />,
  },
];
