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
          rows={groupsData?.data?.map((data, id) => {
            return { data, id };
          })}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
        />
      )}
    </Box>
  );
};

export default GroupTable;
