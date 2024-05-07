import React from "react";
import { useGetAllReservationQuery } from "../../../../../features/reservation/reservationSlice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../components/allReservationTableComponent/allReservationTableConstant";

const AllReservationTable = () => {
  const {
    data: allReservationRows,
    isLoading,
    isError,
    error,
  } = useGetAllReservationQuery();
  console.log(
    "Data",
    allReservationRows,
    "Loading",
    isLoading,
    "Error",
    isError,
    "Error Message",
    error
  );
  return (
    <Box>
      <DataGrid
        rows={allReservationRows?.data}
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
        isRowSelectable={(params) =>
          params.row.assign.assignedVendorId === "" &&
          params.row.schedule != "On-Demand" &&
          params.row.bidStatus == "" &&
          (this.state.schedule == "" ||
            params.row.reservationSchedule == this.state.schedule)
        }
        onRowSelectionModelChange={(ids) => {
          this.onRowsSelectionHandler(ids);
        }}
      />
    </Box>
  );
};

export default AllReservationTable;
