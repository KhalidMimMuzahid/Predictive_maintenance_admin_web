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
    field: "customer",
    headerName: "CUSTOMER",
    flex: 1,
    renderCell: (props) => CustomerComponent(props),
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
    headerName: "",
    renderCell: (props) => OptionsComponent(props),
  },
];
