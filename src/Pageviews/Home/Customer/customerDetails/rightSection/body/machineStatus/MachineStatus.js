import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { columns } from "./component/constant";
import { AppContext } from "../../../../../../../contextApi/appProvider";
import { useGetMachineDataQuery } from "../../../../../../../features/machine/machineSlice";

const MachineStatus = () => {
  const { setDownloadData } = useContext(AppContext);
  const { _id } = useParams();

  const {
    data: machineData,
    isLoading,
    isError,
    error,
  } = useGetMachineDataQuery(_id);

  console.log({ machineData });
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {machineData?.data?.length > 0 && (
        <DataGrid
          rows={machineData?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
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
              fileName: "Machine Data Details",
            });
          }}
        />
      )}
    </Box>
  );
};

export default MachineStatus;
