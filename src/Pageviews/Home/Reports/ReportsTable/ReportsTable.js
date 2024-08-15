import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { columns } from "../components/constant";
import { AppContext } from "../../../../contextApi/appProvider";

const ReportsTable = () => {
  const { setDownloadData } = useContext(AppContext);
  const reports = [
    {
      report_name: "Sales_Report_January",
      description: "Monthly sales data for January.",
      date_time: "2024-01-31 10:30:00",
    },
    {
      report_name: "Inventory_Report_Q1",
      description: "Inventory status for the first quarter.",
      date_time: "2024-03-31 14:00:00",
    },
    {
      report_name: "Employee_Performance_Q1",
      description: "First quarter performance review of employees.",
      date_time: "2024-04-05 09:30:00",
    },
    {
      report_name: "Customer_Feedback_January",
      description: "Customer feedback summary for January.",
      date_time: "2024-02-05 11:15:00",
    },
    {
      report_name: "Financial_Summary_Q1",
      description: "Financial overview for the first quarter.",
      date_time: "2024-04-10 16:00:00",
    },
    {
      report_name: "Sales_Report_February",
      description: "Monthly sales data for February.",
      date_time: "2024-02-29 10:30:00",
    },
    {
      report_name: "Inventory_Report_April",
      description: "Inventory status as of April.",
      date_time: "2024-04-30 14:00:00",
    },
    {
      report_name: "Employee_Performance_Q2",
      description: "Second quarter performance review of employees.",
      date_time: "2024-07-05 09:30:00",
    },
    {
      report_name: "Customer_Feedback_February",
      description: "Customer feedback summary for February.",
      date_time: "2024-03-05 11:15:00",
    },
    {
      report_name: "Financial_Summary_Q2",
      description: "Financial overview for the second quarter.",
      date_time: "2024-07-10 16:00:00",
    },
    {
      report_name: "Sales_Report_March",
      description: "Monthly sales data for March.",
      date_time: "2024-03-31 10:30:00",
    },
    {
      report_name: "Inventory_Report_May",
      description: "Inventory status as of May.",
      date_time: "2024-05-31 14:00:00",
    },
    {
      report_name: "Employee_Performance_Q3",
      description: "Third quarter performance review of employees.",
      date_time: "2024-10-05 09:30:00",
    },
    {
      report_name: "Customer_Feedback_March",
      description: "Customer feedback summary for March.",
      date_time: "2024-04-05 11:15:00",
    },
    {
      report_name: "Financial_Summary_Q3",
      description: "Financial overview for the third quarter.",
      date_time: "2024-10-10 16:00:00",
    },
  ];

  return (
    <div>
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
        rows={reports?.map((data, id) => {
          return { ...data, id };
        })}
        columns={columns}
        rowHeight={61}
        // pageSize={5}
        // rowsPerPageOptions={5}
        // autoHeight
        checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
        onRowSelectionModelChange={(data, index) => {
          const selectedRowData = reports?.map((index, i) => {
            return {
              "SL No": i + 1,
            };
          });
          setDownloadData({
            selectedRowData,
            fileName: "Reports Table",
          });
        }}
      />
    </div>
  );
};

export default ReportsTable;
