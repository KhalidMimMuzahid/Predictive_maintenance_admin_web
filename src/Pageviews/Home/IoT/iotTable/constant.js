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
    //  <h1>products</h1>,

    // <ProductComponent props={props} />,
  },

  // {
  //   field: "customer",
  //   headerName: "CUSTOMER",
  //   width: 270,
  //   renderCell: (props) => <CustomerComponent props={props} />,

  //   // <h1>customer</h1>,

  //   // <CustomerComponent props={props} />,
  // },
  // {
  //   field: "status",
  //   headerName: "STATUS",
  //   width: 270,
  //   renderCell: (props) => <h1>status</h1>,

  //   // <StatusComponent props={props} />,
  // },
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
