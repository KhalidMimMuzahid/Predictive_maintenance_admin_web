import { Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import watch from "../../../../../../Assets/Home/marketplace/product_details_product.png";
import Details from "./Details";
import InventoryDetails from "./InventoryDetails";
import Photos from "./Photos";
import { useGetMarketplaceProductDetailsByIdQuery } from "../../../../../../features/marketplace/marketplaceSlice";

const ProductDetails = () => {
  const [rightSideRender, setRightSideRender] = useState("product_details");
  const { _id } = useParams();
  const { data: productDetailsData } =
    useGetMarketplaceProductDetailsByIdQuery(_id);
  console.log(productDetailsData);
  return (
    <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Product List
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography>Marketplace / </Typography>
            <Typography>Product List / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Product Details
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "14px" }}>
          <Button
            // onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
            startIcon={<Download />}
          >
            Import
          </Button>
          <Button
            // onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "#D7E0E7",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
          >
            Category
          </Button>
          <Link
            to="/marketplace/add-product"
            style={{
              backgroundColor: "#24459c",
              textTransform: "none",
              color: "white",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              padding: "6px 32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Add Product
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "14px", marginTop: "24px" }}>
        <Box
          sx={{
            background: "white",
            padding: "40px 23px",
            width: "30%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <Box
              sx={{
                padding: "8px",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                width: "120px",
                height: "120px",
                borderRadius: "100%",
              }}
            >
              <img src={watch} alt="" />
            </Box>
            <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
              9 Ultra Max Smart Watch 2.19
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
                Smart Watches
              </Typography>
              <Typography sx={{ background: "#D7FCF9", padding: "2px 4px" }}>
                In-Stock
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
              gap: "20px",
            }}
          >
            <Button
              onClick={() => setRightSideRender("product_details")}
              sx={{
                textTransform: "none",
                width: "full",
                borderRadius: "50px",
                color:
                  rightSideRender === "product_details" ? "white" : "#4D5983",
                padding: "12px",
                fontWeight: "600",
                textAlign: "start",
                background:
                  rightSideRender === "product_details" ? "#24459C" : "white",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              Product Details
            </Button>
            <Button
              onClick={() => setRightSideRender("inventory_details")}
              sx={{
                textTransform: "none",
                width: "full",
                borderRadius: "50px",
                color:
                  rightSideRender === "inventory_details" ? "white" : "#4D5983",
                padding: "12px",
                fontWeight: "600",
                textAlign: "start",
                background:
                  rightSideRender === "inventory_details" ? "#24459C" : "white",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              Inventory Details
            </Button>
            <Button
              onClick={() => setRightSideRender("photos")}
              sx={{
                textTransform: "none",
                width: "full",
                borderRadius: "50px",
                color: rightSideRender === "photos" ? "white" : "#4D5983",
                padding: "12px",
                fontWeight: "600",
                textAlign: "start",
                background: rightSideRender === "photos" ? "#24459C" : "white",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              Photos
            </Button>
          </Box>
        </Box>
        {rightSideRender === "product_details" && <Details />}
        {rightSideRender === "inventory_details" && <InventoryDetails />}
        {rightSideRender === "photos" && <Photos />}
      </Box>
    </Box>
  );
};

export default ProductDetails;
