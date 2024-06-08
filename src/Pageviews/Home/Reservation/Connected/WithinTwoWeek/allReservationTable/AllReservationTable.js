import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../component/allReservationTableComponent/allReservationTableConstant";

const AllReservationTable = ({
  setSelectedReservations,
  allReservationRows,
}) => {
  // console.log({ allReservationRows });
  return (
    <Box>
      {allReservationRows?.data?.length > 0 && (
        <DataGrid
          sx={{
            background: "white",
            borderRadius: "0px",
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              fontWeight: 1000,
              borderRadius: "0",
              borderTop: "1px solid #D9D9D9",
              background: "#F4F2FF",
            },
          }}
          rows={allReservationRows?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          autoHeight
          checkboxSelection
          pageSize={5}
          rowsPerPageOptions={[15]}
          initialState={{
            pagination: { paginationModel: { pageSize: 15 } },
          }}
          pageSizeOptions={[15, 25, 50]}
          disableRowSelectionOnClick
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map(
              (index, i) => allReservationRows?.data[index]?._id
            );
            setSelectedReservations(selectedRowData);
          }}
        />
      )}
    </Box>
  );
};

export default AllReservationTable;
