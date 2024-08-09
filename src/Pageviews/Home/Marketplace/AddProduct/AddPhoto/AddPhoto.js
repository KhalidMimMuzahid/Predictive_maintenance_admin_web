import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import addPhoto from "../../../../../Assets/Home/marketplace/add_photo_box.png";
import { Cancel } from "@mui/icons-material";

const AddPhoto = ({ steps, setSteps, productDetails, setProductDetails }) => {
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProductDetails((prev) => {
        const photos = prev?.photos || [];
        photos.push({
          photoUrl: URL.createObjectURL(event.target.files[0]),
          color: "Black",
          title: event.target.files[0].name,
        });
        return {
          ...prev,
          photos,
        };
      });
    }
  };

  const removeImage = (indexToRemove) => {
    console.log(productDetails?.photos);
    const newImages = productDetails?.photos?.filter(
      (photo, i) => i !== indexToRemove
    );
    setProductDetails((prev) => {
      return {
        ...prev,
        photos: newImages,
      };
    });
  };
  // You can now use `newImages` to update `productDetails.photos` or do further processing.

  return (
    <Box sx={{ marginTop: "32px" }}>
      <Typography
        sx={{ color: "#868DAA", fontSize: "14px", textAlign: "center" }}
      >
        Before uploading, ensure that you prepare the images. The maximum
        allowable number of images is 5, and the individual image size should
        not exceed 5MB.
      </Typography>
      <Box
        sx={{
          marginTop: "44px",
          display: "flex",
          gap: "24px",
        }}
      >
        {productDetails?.photos?.length > 0 &&
          productDetails?.photos?.map((photo, i) => (
            <Box sx={{ position: "relative" }}>
              <button
                onClick={() => removeImage(i)}
                style={{
                  position: "absolute",
                  background: "#D7E0E7",
                  width: "32px",
                  height: "32px",
                  borderRadius: "100%",
                  padding: "0px",
                  right: 4,
                  top: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0px",
                  cursor: "pointer",
                }}
              >
                <Cancel sx={{ color: "red" }} />
              </button>
              <img
                style={{
                  border: "1px solid #D7E0E7",
                  borderRadius: "5px",
                  width: "200px",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                src={photo?.photoUrl}
                alt=""
              />
            </Box>
          ))}

        {(productDetails?.photos?.length <= 4 ||
          !productDetails?.photos?.length) && (
          <label
            style={{
              border: "1px solid #D7E0E7",
              borderRadius: "5px",
              width: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
            <img src={addPhoto} alt="" />
          </label>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "14px",
          marginTop: "32px",
        }}
      >
        <Button
          onClick={() => setSteps("inventory_details")}
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
          onClick={() => setSteps("review")}
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
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default AddPhoto;
