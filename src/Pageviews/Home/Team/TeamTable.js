import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../../contextApi/appProvider";
import { columns } from "./component/constant";
import { useGetServiceProvidersQuery } from "../../../features/serviceProvider/serviceProviderSlice";
import Loader from "../../../Utils/Loader";

const TeamTable = () => {
  const { setDownloadData } = useContext(AppContext);
  const {
    data: serviceProviders,
    isLoading,
    isError,
  } = useGetServiceProvidersQuery();
  console.log(serviceProviders?.data);

  return (
    <Box sx={{ borderRadius: "4px", marginTop: "10px" }}>
      {isLoading && <Loader />}
      {serviceProviders?.data?.length > 0 && (
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
          rows={serviceProviders?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
              };
            });
            setDownloadData({ selectedRowData, fileName: "Company List" });
          }}
        />
      )}
    </Box>
  );
};

export default TeamTable;
