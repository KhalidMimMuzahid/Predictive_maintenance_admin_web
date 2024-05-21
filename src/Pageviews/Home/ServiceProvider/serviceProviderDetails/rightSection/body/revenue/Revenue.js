import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { AppContext } from "../../../../../../../contextApi/appProvider";
import { columns } from "./componant/constant";

const Revenue = () => {
  const { setDownloadData } = useContext(AppContext);
  const revenue = [
    { month: "JANUARY 2023", total_service: 27, total_amount: 7568 },
    { month: "FEBRUARY 2023", total_service: 62, total_amount: 8902 },
    { month: "MARCH 2023", total_service: 45, total_amount: 6421 },
    { month: "APRIL 2023", total_service: 18, total_amount: 5533 },
    { month: "MAY 2023", total_service: 33, total_amount: 7056 },
    { month: "JUNE 2023", total_service: 71, total_amount: 10437 },
    { month: "JULY 2023", total_service: 39, total_amount: 8954 },
    { month: "AUGUST 2023", total_service: 52, total_amount: 9761 },
    { month: "SEPTEMBER 2023", total_service: 85, total_amount: 10021 },
    { month: "OCTOBER 2023", total_service: 14, total_amount: 6142 },
    { month: "NOVEMBER 2023", total_service: 77, total_amount: 10893 },
    { month: "DECEMBER 2023", total_service: 23, total_amount: 5732 },
    { month: "JANUARY 2024", total_service: 68, total_amount: 10112 },
    { month: "FEBRUARY 2024", total_service: 31, total_amount: 7505 },
    { month: "MARCH 2024", total_service: 56, total_amount: 9356 },
    { month: "APRIL 2024", total_service: 42, total_amount: 8374 },
    { month: "MAY 2024", total_service: 19, total_amount: 5623 },
    { month: "JUNE 2024", total_service: 94, total_amount: 10897 },
    { month: "JULY 2024", total_service: 37, total_amount: 8942 },
    { month: "AUGUST 2024", total_service: 63, total_amount: 9723 },
  ];

  const rowsRevenue = revenue?.map((data, id) => {
    return { ...data, id };
  });
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
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
        rows={rowsRevenue}
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
        onRowSelectionModelChange={(data, index) => {
          const selectedRowData = data?.map((index, i) => {
            return {
              "SL No": i + 1,
            };
          });
          setDownloadData({
            selectedRowData,
            fileName: "Service Provider Revenue",
          });
        }}
      />
    </Box>
  );
};

export default Revenue;
