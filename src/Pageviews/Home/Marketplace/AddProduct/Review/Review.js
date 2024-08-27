import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { usePostProductMutation } from "../../../../../features/marketplace/marketplaceSlice";
import { toast } from "react-toastify";
import ProgressingLoader from "../../../../../Utils/ProgressingLoader";

const Review = ({ steps, setSteps, productDetails, setProductDetails }) => {
  const [postProduct, { data, isError, error, isLoading, isSuccess }] =
    usePostProductMutation();
  console.log("Product Details Before Posting...", productDetails);
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const postProductFunc = () => {
    postProduct(productDetails);
  };
  return (
    <Box sx={{ marginTop: "32px" }}>
      <Typography sx={{ textAlign: "center", marginY: "124px" }}>
        Review Is Coming...
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "14px",
          marginTop: "32px",
        }}
      >
        <Button
          onClick={() => setSteps("add_photo")}
          sx={{
            textTransform: "none",
            background: "#EBEEF3",
            color: "#868DAA",
            fontWeight: "600",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => postProductFunc()}
          sx={{
            textTransform: "none",
            background: "#24459C",
            color: "#FFFFFF",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
            fontWeight: "600",
          }}
        >
          {isLoading ? <ProgressingLoader /> : "Publish"}
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
