import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AppContext } from "../../../../../../../../contextApi/appProvider";
import { columns } from "../allMembers/componant/constant";

const EngineersTable = ({ engineers }) => {
  const { setDownloadData } = useContext(AppContext);
  console.log(engineers?.length);

  return (
    <Box>
      {engineers?.length > 0 && (
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
          rows={engineers?.map((data, id) => {
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
              fileName: "Service Provider Teams",
            });
          }}
        />
      )}
      {engineers?.length <= 0 && (
        <Typography
          sx={{
            marginTop: "28px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "red",
          }}
        >
          No Sub Admin
        </Typography>
      )}
    </Box>
  );
};

export default EngineersTable;
