import { Box } from "@mui/material";
import React from "react";
import { useGetAllResGroupsQuery } from "../../../../features/resGroup/resGroupSlice";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./component/AllGroupTableConstant";
import Loader from "../../../../Utils/Loader";

const GroupTable = () => {
  const {
    data: groupsData,
    isLoading,
    isError,
    error,
  } = useGetAllResGroupsQuery();
  return (
    <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px" }}>
      {(isLoading || isError) && <Loader />}
      {groupsData?.data.length > 0 && (
        <DataGrid
          sx={{
            "& .table-header": {
              backgroundColor: "#F4F2FF",
            },
            padding: "0 20px",
            borderRadius: "0",
          }}
          rows={groupsData?.data?.map((data, id) => {
            return { data, id };
          })}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection
        />
      )}
    </Box>
  );
};

export default GroupTable;
