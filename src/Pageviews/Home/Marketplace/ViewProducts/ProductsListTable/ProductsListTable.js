import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./component/constant";

const ProductsListTable = () => {
  const allProducts = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <Box sx={{ marginTop: "20px" }}>
      <DataGrid
        sx={{
          borderRadius: "0px",
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: 1000,
            borderRadius: "0",
            borderTop: "1px solid #D9D9D9",
          },
        }}
        rows={allProducts?.map((data, id) => {
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
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ProductsListTable;
