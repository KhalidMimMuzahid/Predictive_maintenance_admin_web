import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestId from "./components/RequestAction";
import RequestAction from "./components/RequestAction";
import { useGetReservationRequestByIDQuery } from "../../../../../../../features/reservation/reservationSlice";
import { columns } from "./components/constant";
import Loader from "../../../../../../../Utils/Loader";

const Request = () => {
  // /customer/reservation/common/get-my-reservations/:uid
  const { _id } = useParams();
  const [requests, setRequests] = useState([]);
  const [isShowActionOption, SetIsShowActionOption] = useState(false);

  const {
    data: requestsData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetReservationRequestByIDQuery(_id);

  return (
    <div>
      <Box
        sx={{
          margin: "auto",
          padding: "0 20px",
        }}
      >
        {isLoading ? (
          <Loader />
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
            rows={requestsData?.data?.map((data, id) => {
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
    </div>
  );
};

export default Request;
