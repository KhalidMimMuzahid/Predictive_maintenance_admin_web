import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const InventoryDetails = ({ productDetails }) => {
  return (
    <Box
      sx={{
        background: "white",
        padding: "40px",
        width: "70%",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ color: "#4D5983", fontWeight: "600", fontSize: "24px" }}
        >
          Inventory Details
        </Typography>
        <Link
          to={`/marketplace/view-products/product-update/${productDetails?._id}`}
          style={{
            background: "#CCEFF1",
            color: "#47C68F",
            padding: "14px",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "700",
            textTransform: "none",
            textDecoration: "none",
          }}
        >
          Update Information
        </Link>
      </Box>
      <hr
        style={{
          background: "#E6E8F0",
          opacity: "20%",
          margin: "12px 0px 30px 0px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Weight (Kgs)
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.packageSize?.weight}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Length
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.packageSize?.length}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Width
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.packageSize?.width}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Height
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.packageSize?.height}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Stock Status
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "600",
            }}
          >
            {productDetails?.stockManagement?.availableStock > 0
              ? "Available"
              : "Unavailable"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Sold Individually
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "600",
            }}
          >
            {/* Yes */}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Stock Keeping Unit
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "600",
            }}
          >
            {/* Yes */}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Stock Management
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "600",
            }}
          >
            {productDetails?.stockManagement?.trackStockQuantity
              ? "Track Stock Quantity"
              : "No Track Stock Quantity"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InventoryDetails;
