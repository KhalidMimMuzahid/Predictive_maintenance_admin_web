import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contextApi/appProvider";
import { columns } from "./componant/constant";
import { Box } from "@mui/material";

const AllMembersTable = ({ allMembers }) => {
  const { setDownloadData } = useContext(AppContext);

  return (
    <Box>
      {allMembers?.length > 0 && (
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
          rows={allMembers?.map((data, id) => {
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
    </Box>
  );
};

export default AllMembersTable;
