import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { columns } from "../components/constant";
import { AppContext } from "../../../../contextApi/appProvider";

const ReportsTable = () => {
  const { setDownloadData } = useContext(AppContext);
  const reports = [
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
  ];

  return (
    <div style={{ width: "100%" }}>
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
          overflow: "scroll",
          overflowX: "scroll",
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
