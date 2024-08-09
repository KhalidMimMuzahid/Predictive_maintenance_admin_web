import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { columns } from "./component/constant";
import { useGetMarketplaceProductListQuery } from "../../../../../features/marketplace/marketplaceSlice";
import Loader from "../../../../../Utils/Loader";

const ProductsListTable = () => {
  const { data: productList, isLoading } = useGetMarketplaceProductListQuery();
  
  return (
    <Box sx={{ marginTop: "20px" }}>
      {isLoading && <Loader />}
      {productList?.data?.length > 0 ? (
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
          rows={productList?.data?.map((data, id) => {
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
      ) : (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "#FF4858",
          }}
        >
          No Products.
        </Box>
      )}
    </Box>
  );
};

export default ProductsListTable;
