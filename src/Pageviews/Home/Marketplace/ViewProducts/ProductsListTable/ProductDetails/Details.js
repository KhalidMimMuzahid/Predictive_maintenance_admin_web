import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Details = ({ productDetails }) => {
  console.log(productDetails);
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
          Product Details
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
            Product Title
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.name + " " + productDetails?.model}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Details
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.details}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Status
          </Typography>
          <Typography sx={{ color: "#4D5983", fontSize: "18px", width: "70%" }}>
            {productDetails?.stockManagement?.availableStock > 0
              ? "In Stock"
              : "Stock Out"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Product Category
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.category}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Product Sub-Category
          </Typography>
          <Typography sx={{ color: "#4D5983", fontSize: "18px", width: "70%" }}>
            {productDetails?.subCategory}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Regular Price (¥)
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.regularPrice}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Sale Price (¥)
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.salePrice}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Tax Status
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            {productDetails?.taxStatus?.charAt(0).toUpperCase() +
              productDetails?.taxStatus?.slice(1)}
          </Typography>
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#868DAA", fontSize: "14px", width: "30%" }}>
            Tax Status Class
          </Typography>
          <Typography
            sx={{
              color: "#4D5983",
              fontSize: "18px",
              width: "70%",
              fontWeight: "700",
            }}
          >
            Supply 3402
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Details;
