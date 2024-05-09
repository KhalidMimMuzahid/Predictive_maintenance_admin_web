import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetAllReservationQuery } from "../../../../../../features/reservation/reservationSlice";
import { columns } from "../component/allReservationTableComponent/allReservationTableConstant";

const AllReservationTable = ({ setSelectedReservations }) => {
  const {
    data: allReservationRows,
    isLoading,
    isError,
    error,
  } = useGetAllReservationQuery({
    machineType: "non-connected",
    reservationType: "within-two-week",
  });

  // console.log({ allReservationRows });
  return (
    <Box>
      {allReservationRows?.data?.length > 0 && (
        <DataGrid
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
