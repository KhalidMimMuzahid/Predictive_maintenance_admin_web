import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import InvoiceAction from "./component/InvoiceAction";

const Invoice = () => {
  const invoices = [
    {
      order_number: "#12345678",
      order_date: "12.3.2024",
      invoice_amount: 7500,
      status: "Pending",
    },
    {
      order_number: "#23456789",
      order_date: "12.3.2024",
      invoice_amount: 8000,
      status: "Paid",
    },
    {
      order_number: "#34567890",
      order_date: "12.3.2024",
      invoice_amount: 6000,
      status: "Requested",
    },
    {
      order_number: "#45678901",
      order_date: "12.3.2024",
      invoice_amount: 5500,
      status: "Pending",
    },
    {
      order_number: "#56789012",
      order_date: "12.3.2024",
      invoice_amount: 7000,
      status: "Paid",
    },
    {
      order_number: "#67890123",
      order_date: "12.3.2024",
      invoice_amount: 9500,
      status: "Requested",
    },
    {
      order_number: "#78901234",
      order_date: "12.3.2024",
      invoice_amount: 8500,
      status: "Pending",
    },
    {
      order_number: "#89012345",
      order_date: "12.3.2024",
      invoice_amount: 7000,
      status: "Paid",
    },
    {
      order_number: "#90123456",
      order_date: "12.3.2024",
      invoice_amount: 8000,
      status: "Requested",
    },
    {
      order_number: "#98765432",
      order_date: "12.3.2024",
      invoice_amount: 9000,
      status: "Pending",
    },
  ];

  const columns = [
    {
      field: "order_number",
      headerName: "ORDER NUMBER",
      width: 350,
      renderCell: (params) => (
        <Typography
          sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
        >
          {params?.row?.order_number}
        </Typography>
      ),
    },
    {
      field: "order_date",
      headerName: "ORDER DATE",
      width: 300,
      renderCell: (props) => (
        <Typography
          sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}
        >
          {props?.row?.order_date}
        </Typography>
      ),
    },
    {
      field: "invoice_amount",
      headerName: "INVOICE AMOUNT",
      width: 200,
      renderCell: (props) => (
        <Typography
          sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}
        >
          ¥{props?.row?.invoice_amount}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 200,
      renderCell: (params) => (
        <Box>
          {params?.row?.status === "Pending" && (
            <Box
              sx={{
                border: "1px solid #FFA503",
                color: "#FFA503",
                width: "96px",
                padding: "4px 8px",
                textAlign: "center",
                borderRadius: "20px",
                fontSize: "11px",
              }}
            >
              <Typography variant="p">{params?.row?.status}</Typography>
            </Box>
          )}
          {params?.row?.status === "Requested" && (
            <Box
              sx={{
                border: "1px solid #FF4858",
                color: "#FF4858",
                width: "96px",
                padding: "4px 8px",
                textAlign: "center",
                borderRadius: "20px",
                fontSize: "11px",
              }}
            >
              <Typography variant="p">{params?.row?.status}</Typography>
            </Box>
          )}
          {params?.row?.status === "Paid" && (
            <Box
              sx={{
                border: "1px solid #2FD573",
                color: "#2FD573",
                width: "96px",
                padding: "4px 8px",
                textAlign: "center",
                borderRadius: "20px",
                fontSize: "11px",
              }}
            >
              <Typography variant="p">{params?.row?.status}</Typography>
            </Box>
          )}
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 100,
      renderCell: (props) => <InvoiceAction props={props} />,
    },
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      <DataGrid
        rows={invoices?.map((data, id) => {
          return { ...data, id };
        })}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Invoice;
