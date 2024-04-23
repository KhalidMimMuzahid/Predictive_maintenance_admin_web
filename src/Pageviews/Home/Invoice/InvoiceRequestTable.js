import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useState } from "react";
import { columns } from "./component/constant";
import { AppContext } from "../../../contextApi/appProvider";

const InvoiceRequestTable = () => {
  const [rows, setRows] = useState([]);
  const { setDownloadData } = useContext(AppContext);
  const invoiceRequest = [
    {
      name: "John Smith",
      phone: "+81234567890",
      order_number: "#1234567890",
      order_date: "Mar 19, 2024",
      invoiced_amount: 6000,
      status: "Pending",
    },
    {
      name: "Emma Johnson",
      phone: "+81234567891",
      order_number: "#2345678901",
      order_date: "Mar 20, 2024",
      invoiced_amount: 6500,
      status: "Paid",
    },
    {
      name: "Michael Williams",
      phone: "+81234567892",
      order_number: "#3456789012",
      order_date: "Mar 21, 2024",
      invoiced_amount: 7000,
      status: "Requested",
    },
    {
      name: "Olivia Brown",
      phone: "+81234567893",
      order_number: "#4567890123",
      order_date: "Mar 22, 2024",
      invoiced_amount: 5500,
      status: "Pending",
    },
    {
      name: "William Jones",
      phone: "+81234567894",
      order_number: "#5678901234",
      order_date: "Mar 23, 2024",
      invoiced_amount: 7500,
      status: "Paid",
    },
    {
      name: "Ava Miller",
      phone: "+81234567895",
      order_number: "#6789012345",
      order_date: "Mar 24, 2024",
      invoiced_amount: 6000,
      status: "Requested",
    },
    {
      name: "James Davis",
      phone: "+81234567896",
      order_number: "#7890123456",
      order_date: "Mar 25, 2024",
      invoiced_amount: 6500,
      status: "Pending",
    },
    {
      name: "Isabella Wilson",
      phone: "+81234567897",
      order_number: "#8901234567",
      order_date: "Mar 26, 2024",
      invoiced_amount: 7000,
      status: "Paid",
    },
    {
      name: "Ethan Taylor",
      phone: "+81234567898",
      order_number: "#9012345678",
      order_date: "Mar 27, 2024",
      invoiced_amount: 5500,
      status: "Requested",
    },
    {
      name: "Sophia Anderson",
      phone: "+81234567899",
      order_number: "#0123456789",
      order_date: "Mar 28, 2024",
      invoiced_amount: 7500,
      status: "Pending",
    },
    {
      name: "Alexander Martinez",
      phone: "+81234567900",
      order_number: "#1234567890",
      order_date: "Mar 29, 2024",
      invoiced_amount: 6000,
      status: "Paid",
    },
  ];

  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              background: "#26C1C9",
              width: "18px",
              height: "18px",
              borderRadius: "2px",
            }}
          />
          <Typography
            sx={{ color: "#5A6872", fontSize: "14px", fontWeight: "600" }}
          >
            All Invoice Request
          </Typography>
        </Box>
        <Button sx={{ fontSize: "14px", fontWeight: "600", color: "#24459C" }}>
          See All
        </Button>
      </Box>

      {/* Table */}
      <DataGrid
        rows={invoiceRequest?.map((data, id) => {
          return { ...data, id };
        })}
        columns={columns}
        rowHeight={61}
        pageSize={5}
        rowsPerPageOptions={5}
        // autoHeight
        checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
        onRowSelectionModelChange={(data, index) => {
          const selectedRowData = data?.map((index, i) => {
            return {
              "SL No": i + 1,
            };
          });
          setDownloadData({ selectedRowData, fileName: "Invoice Request" });
        }}
      />
    </Box>
  );
};

export default InvoiceRequestTable;
