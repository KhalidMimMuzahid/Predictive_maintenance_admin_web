import { Box, Button, Typography } from "@mui/material";
import React from "react";
import watch from "../../../../../../Assets/Home/marketplace/watch.png";
import { Link } from "react-router-dom";

const Photos = ({ productDetails }) => {
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
          Photos
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

      <Box sx={{ display: "flex", gap: "35px", flexWrap: "wrap" }}>
        {productDetails?.photos?.map((photo) => (
          <Box
            sx={{
              background: "#EBEEF3",
              padding: "4px",
              width: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
            }}
          >
            {photo?.photoUrl ? (
              <img
                src={photo?.photoUrl}
                alt="Product Img"
                style={{ width: "190px", height: "190px", borderRadius: "5px" }}
              />
            ) : (
              <Typography>No Photo Found</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Photos;
