import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./constant";
import { useGetOrdersQuery } from "../../../../../../features/orders/ordersSlice";
import Loader from "../../../../../../Utils/Loader";

const RecentOrdersTable = () => {
  const { data: recentOrdersData, isLoading } = useGetOrdersQuery();
  console.log(recentOrdersData);
  return (
    <Box>
      {
        <Box sx={{ marginTop: "10px" }}>
          {isLoading && <Loader />}
          {recentOrdersData?.data?.length > 0 ? (
            <DataGrid
              sx={{
                borderRadius: "0px",
                border: "none",
                "& .MuiDataGrid-columnHeaders": {
                  fontWeight: 1000,
                  borderRadius: "0",
                  borderTop: "1px solid #D9D9D9",
                  background: "",
                },
              }}
              rows={recentOrdersData?.data?.map((data, id) => {
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
              rowHeight={61}
              pageSize={5}
              rowsPerPageOptions={5}
              autoHeight
            />
          ) : (
            <Box
              sx={{
                height: "40vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "600",
                color: "#FF4858",
              }}
            >
              No Orders To Show
            </Box>
          )}
        </Box>
      }
    </Box>
  );
};

export default RecentOrdersTable;
