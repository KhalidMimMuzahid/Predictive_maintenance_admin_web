import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import InvoiceAction from "./component/InvoiceAction";
import { useGetAllInvoiceByUserQuery } from "../../../../../../../features/invoice/invoiceSlice";
import { useParams } from "react-router-dom";
import OrderDate from "./component/orderDate";
import InvoicedAmount from "./component/InvoicedAmount";

const Invoice = () => {
  const { _id } = useParams();
  const {
    data: invoiceData,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetAllInvoiceByUserQuery(_id);

  const columns = [
    {
      field: "invoiceNumber",
      headerName: (
        <Typography
          sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
        >
          ORDER NUMBER
        </Typography>
      ),
      width: 250,
      renderCell: (params) => (
        <Typography
          sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
        >
          {params?.row?.invoiceNo}
        </Typography>
      ),
    },
    {
      field: "order_date",
      headerName: (
        <Typography
          sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
        >
          ORDER DATE
        </Typography>
      ),
      width: 300,
      renderCell: (props) => (
        <OrderDate dateString={props?.row?.reservationRequest?.createdAt} />
      ),
    },
    {
      field: "invoiceAmount",
      headerName: (
        <Typography
          sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
        >
          INVOICE AMOUNT
        </Typography>
      ),
      width: 300,
      renderCell: (props) => (
        <InvoicedAmount
          totalAmount={props?.row?.additionalProducts?.totalAmount}
        />
      ),
    },

    {
      field: "status",
      headerName: (
        <Typography
          sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
        >
          STATUS
        </Typography>
      ),
      width: 200,
      renderCell: (params) => (
        <Box
          sx={{
            border: `1px solid ${
              params?.row?.taskStatus === "canceled"
                ? "#FF4858"
                : params?.row?.taskStatus === "completed"
                ? "#2FD573"
                : "#FFA503"
            }`,
            color:
              params?.row?.taskStatus === "canceled"
                ? "#FF4858"
                : params?.row?.taskStatus === "completed"
                ? "#2FD573"
                : "#FFA503",
            width: "96px",
            padding: "4px 8px",
            textAlign: "center",
            borderRadius: "20px",
            fontSize: "11px",
          }}
        >
          <Typography variant="p">{params?.row?.taskStatus}</Typography>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: (
        <Typography
          sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
        >
          ACTION
        </Typography>
      ),
      width: 100,
      renderCell: (props) => <InvoiceAction props={props?.row} />,
    },
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {!isSuccess ? (
        <div>Loading</div>
      ) : (
        <DataGrid
          sx={{
            borderRadius: "0px",
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              fontWeight: 1000,
              borderRadius: "0",
              borderTop: "1px solid #D9D9D9",
              background: "#F4F2FF",
            },
          }}
          rows={invoiceData?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      )}
    </Box>
  );
};

export default Invoice;
