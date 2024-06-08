import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./constant";

const RecentOrdersTable = () => {
  const recentOrders = [
    {
      _id: "#AB25CG",
      date: "24,05,2024",
      products: "Machine Sensor",
      payment: "paid",
      fulfillment: "delivered",
      total: 2500,
    },
    {
      _id: "#AB26DH",
      date: "25,05,2024",
      products: "Temperature Sensor",
      payment: "unpaid",
      fulfillment: "pending",
      total: 1500,
    },
    {
      _id: "#AB27EI",
      date: "26,05,2024",
      products: "Pressure Gauge",
      payment: "paid",
      fulfillment: "shipped",
      total: 3200,
    },
    {
      _id: "#AB28FJ",
      date: "27,05,2024",
      products: "Flow Meter",
      payment: "paid",
      fulfillment: "delivered",
      total: 2800,
    },
    {
      _id: "#AB29GK",
      date: "28,05,2024",
      products: "Level Sensor",
      payment: "unpaid",
      fulfillment: "pending",
      total: 2400,
    },
    {
      _id: "#AB30HL",
      date: "29,05,2024",
      products: "Humidity Sensor",
      payment: "paid",
      fulfillment: "delivered",
      total: 2100,
    },
    {
      _id: "#AB31IM",
      date: "30,05,2024",
      products: "Gas Sensor",
      payment: "unpaid",
      fulfillment: "shipped",
      total: 1900,
    },
    {
      _id: "#AB32JN",
      date: "31,05,2024",
      products: "Proximity Sensor",
      payment: "paid",
      fulfillment: "delivered",
      total: 2300,
    },
    {
      _id: "#AB33KO",
      date: "01,06,2024",
      products: "Optical Sensor",
      payment: "paid",
      fulfillment: "pending",
      total: 2600,
    },
    {
      _id: "#AB34LP",
      date: "02,06,2024",
      products: "Position Sensor",
      payment: "unpaid",
      fulfillment: "delivered",
      total: 2200,
    },
  ];

  return (
    <Box>
      {
        <Box sx={{ marginTop: "10px" }}>
          <DataGrid
            sx={{
              borderRadius: "0px",
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                fontWeight: 1000,
                borderRadius: "0",
                borderTop: "1px solid #D9D9D9",
                background: "",
              },
            }}
            rows={recentOrders?.map((data, id) => {
              return { ...data, id };
            })}
            columns={columns}
            rowHeight={61}
            // pageSize={5}
            // rowsPerPageOptions={5}
            // autoHeight
          />
        </Box>
      }
    </Box>
  );
};

export default RecentOrdersTable;
