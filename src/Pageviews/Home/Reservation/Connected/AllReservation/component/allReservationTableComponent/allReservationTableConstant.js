import { Typography } from "@mui/material";
import ActionComponent from "./ActionComponent";
import CustomerNamePhoneComponent from "./CustomerNamePhoneComponent";
import IssuesComponent from "./IssuesComponent";
import LocationComponent from "./LocationComponent";
import StatusComponent from "./StatusComponent";
import RequestIdComponent from "./RequestIdComponent";
import ScheduleComponent from "./ScheduleComponent";
import MachineTypeComponent from "./MachineTypeComponent";
import InvoiceComponent from "./InvoiceComponent";

export const columns = [
  {
    field: "customer_name",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        CUSTOMER NAME
      </Typography>
    ),
    renderCell: (props) => <CustomerNamePhoneComponent props={props} />,
    flex: 180,
  },
  {
    field: "reservation_id",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        REQUEST ID
      </Typography>
    ),
    renderCell: (props) => <RequestIdComponent props={props} />,
    flex: 120,
  },
  {
    field: "status",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        STATUS
      </Typography>
    ),
    renderCell: (props) => <StatusComponent props={props} />,
    flex: 120,
  },
  {
    field: "schedule",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        SCHEDULE
      </Typography>
    ),
    renderCell: (props) => <ScheduleComponent props={props} />,
    flex: 150,
  },
  {
    field: "machineType",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        MACHINE TYPE
      </Typography>
    ),
    renderCell: (props) => <MachineTypeComponent props={props} />,
    flex: 150,
  },
  {
    field: "location",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        LOCATION
      </Typography>
    ),
    renderCell: (props) => <LocationComponent props={props} />,
    flex: 150,
  },
  {
    field: "invoice",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        INVOICE
      </Typography>
    ),
    renderCell: (props) => <InvoiceComponent props={props} />,
    flex: 150,
  },
  {
    field: "problems",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        PROBLEMS
      </Typography>
    ),
    renderCell: (props) => <IssuesComponent props={props} />,
    flex: 120,
  },
  // {
  //   field: "bidStatus",
  //   headerName: (
  //     <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
  //       BID STATUS
  //     </Typography>
  //   ),
  //   renderCell: (props) => <BidStatusComponent props={props} />,
  //   flex: 150,
  // },
  // {
  //   field: "assign",
  //   headerName: (
  //     <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
  //       ASSIGN
  //     </Typography>
  //   ),
  //   renderCell: (props) => <AssignVendorComponent props={props} />,
  //   flex: 200,
  // },
  {
    field: "action",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        ACTION
      </Typography>
    ),
    renderCell: (props) => <ActionComponent props={props} />,
    flex: 100,
  },
];
