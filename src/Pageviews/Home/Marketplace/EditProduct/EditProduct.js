import { Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import details from "../../../../Assets/Home/marketplace/details.png";
import inventory from "../../../../Assets/Home/marketplace/inventory.png";
import inventoryActive from "../../../../Assets/Home/marketplace/inventory_active.png";
import add from "../../../../Assets/Home/marketplace/add_photo.png";
import addActive from "../../../../Assets/Home/marketplace/add_photo_active.png";
import review from "../../../../Assets/Home/marketplace/review.png";
import reviewActive from "../../../../Assets/Home/marketplace/review_active.png";
import hr from "../../../../Assets/Home/marketplace/hr.png";
import ProductDetails from "./ProductDetails/ProductDetails";
import InventoryDetails from "./InventoryDetails/InventoryDetails";
import AddPhoto from "./AddPhoto/AddPhoto";
import Review from "./Review/Review";
import { useParams } from "react-router-dom";
import { useGetMarketplaceProductDetailsByIdQuery } from "../../../../features/marketplace/marketplaceSlice";

const EditProduct = () => {
  const [steps, setSteps] = useState("product_details");
  const [productDetails, setProductDetails] = useState({});
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
            Edit Product
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography>Edit Product / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              {productDetailsData?.data?.name}
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
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          padding: "50px 150px",
          marginTop: "28px",
          gap: "16px",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background: "#20C18D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={details} style={{ width: "28px" }} alt="" />
              </Box>
              <Typography
                sx={{
                  color: "#20C18D",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginTop: "16px",
                }}
              >
                Product Details
              </Typography>
              <Typography
                sx={{
                  color: "#868DAA",
                  fontWeight: "400",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                Select from Menu
              </Typography>
            </Box>
            <Box>
              <img src={hr} alt="" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background:
                    steps === "inventory_details" ||
                    steps === "add_photo" ||
                    steps === "review"
                      ? "#20C18D"
                      : "#EBEEF3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={
                    steps === "inventory_details" ||
                    steps === "add_photo" ||
                    steps === "review"
                      ? inventoryActive
                      : inventory
                  }
                  style={{ width: "28px" }}
                  alt=""
                />
              </Box>
              <Typography
                sx={{
                  color:
                    steps === "inventory_details" ||
                    steps === "add_photo" ||
                    steps === "review"
                      ? "#20C18D"
                      : "#868DAA",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginTop: "16px",
                }}
              >
                Inventory Details
              </Typography>
              <Typography
                sx={{
                  color: "#868DAA",
                  fontWeight: "400",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                A Deep Dive into Inventory Details
              </Typography>
            </Box>
            <Box>
              <img src={hr} alt="" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background:
                    steps === "review" || steps === "add_photo"
                      ? "#20C18D"
                      : "#EBEEF3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={
                    steps === "add_photo" || steps === "review"
                      ? addActive
                      : add
                  }
                  style={{ width: "28px" }}
                  alt=""
                />
              </Box>
              <Typography
                sx={{
                  color:
                    steps === "add_photo" || steps === "review"
                      ? "#20C18D"
                      : "#868DAA",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginTop: "16px",
                }}
              >
                Add Photo
              </Typography>
              <Typography
                sx={{
                  color: "#868DAA",
                  fontWeight: "400",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                Select from Menu
              </Typography>
            </Box>
            <Box>
              <img src={hr} alt="" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "10px",
                  background: steps === "review" ? "#20C18D" : "#EBEEF3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={steps === "review" ? reviewActive : review}
                  style={{ width: "28px" }}
                  alt=""
                />
              </Box>
              <Typography
                sx={{
                  color: steps === "review" ? "#20C18D" : "#868DAA",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginTop: "16px",
                }}
              >
                Review
              </Typography>
              <Typography
                sx={{
                  color: "#868DAA",
                  fontWeight: "400",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                A Comprehensive Review
              </Typography>
            </Box>
          </Box>
        </Box>

        {steps === "product_details" && (
          <ProductDetails
            steps={steps}
            setSteps={setSteps}
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
        )}
        {steps === "inventory_details" && (
          <InventoryDetails
            steps={steps}
            setSteps={setSteps}
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
        )}
        {steps === "add_photo" && (
          <AddPhoto
            steps={steps}
            setSteps={setSteps}
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
        )}
        {steps === "review" && (
          <Review
            steps={steps}
            setSteps={setSteps}
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          />
        )}
      </Box>
    </Box>
  );
};

export default EditProduct;
