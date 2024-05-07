import ActionComponent from "./ActionComponent";
import AssignVendorComponent from "./AssignVendorComponent";
import BidStatusComponent from "./BisStatusComponent";
import CustomerNamePhoneComponent from "./CustomerNamePhoneComponent";
import IssuesComponent from "./IssuesComponent";
import LocationComponent from "./LocationComponent";
import ServiceTypeComponent from "./ServiceTypeComponent";
import StatusComponent from "./StatusComponent";

export const columns = [
  {
    field: "customer_name",
    headerName: "CUSTOMER NAME",
    renderCell: (props) => <CustomerNamePhoneComponent props={props} />,
    flex: 1,
  },
  {
    field: "reservation_id",
    headerName: "REQUEST ID",
    flex: 1,
  },
  {
    field: "status",
    headerName: "STATUS",
    renderCell: (props) => <StatusComponent props={props} />,
    flex: 1,
  },
  {
    field: "schedule",
    headerName: "SCHEDULE",
    flex: 1,
  },
  {
    field: "service_type",
    headerName: "SERVICE TYPE",
    renderCell: (props) => <ServiceTypeComponent props={props} />,
    flex: 1,
  },
  {
    field: "location",
    headerName: "LOCATION",
    renderCell: (props) => <LocationComponent props={props} />,
    flex: 1,
  },
  {
    field: "issues",
    headerName: "ISSUES",
    renderCell: (props) => <IssuesComponent props={props} />,
    flex: 1,
  },
  {
    field: "bidStatus",
    headerName: "BID STATUS",
    renderCell: (props) => <BidStatusComponent props={props} />,
    flex: 1,
  },
  {
    field: "assign",
    headerName: "ASSIGN",
    renderCell: (props) => <AssignVendorComponent props={props} />,
    flex: 1,
  },
  {
    field: "action",
    headerName: "ACTION",
    renderCell: (props) => <ActionComponent props={props} />,
  },
];
