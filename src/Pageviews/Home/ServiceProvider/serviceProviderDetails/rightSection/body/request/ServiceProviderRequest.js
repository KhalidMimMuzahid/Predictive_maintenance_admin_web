import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../../../../contextApi/appProvider";
import { columns } from "./component/constant";
import { useParams } from "react-router-dom";
import { useGetReservationRequestByCompanyIdQuery } from "../../../../../../../features/reservation/reservationSlice";

const ServiceProviderRequest = () => {
  const { setDownloadData } = useContext(AppContext);
  const { _id } = useParams();
  const {
    data: requestData,
    isLoading,
    isError,
    error,
  } = useGetReservationRequestByCompanyIdQuery(_id);

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {requestData?.data?.length > 0 ? (
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
          rows={requestData?.data.map((data, id) => {
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
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
              };
            });
            setDownloadData({
              selectedRowData,
              fileName: "Service Provider Customer Request",
            });
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "600", fontSize: "24px", color: "#F15F5F" }}
          >
            No Request
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ServiceProviderRequest;
