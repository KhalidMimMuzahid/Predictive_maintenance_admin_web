import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import addPhoto from "../../../../../Assets/Home/marketplace/add_photo_box.png";
import { Cancel } from "@mui/icons-material";
import { json } from "react-router-dom";

const AddPhoto = ({ steps, setSteps, productDetails, setProductDetails }) => {
  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]?.name) {
      const files = event.target.files;
      const fileName = files[0].name;
      const fileType = files[0].type;

      const imageUp = await fetch(
        `${process.env.REACT_APP_BASE_URL}/extra-data/upload-photo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName,
            fileType,
            file: JSON.stringify(event?.target?.files[0]),
            folder: "marketplace",
          }),
        }
      );
      const imageUrl = await imageUp.json();
      const parseUrl = new URL(imageUrl?.data?.url);
      console.log("Image URL  ", parseUrl);

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
        {/* <img
          style={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          src={
            "https://showa-assets-bucket.s3.ap-northeast-1.amazonaws.com/assets/marketplace/16708169_256680538092786_6896235013675381948_n.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a&X-Amz-Credential=AKIAWZXORMOVJZSUOON6%2F20240809%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240809T120730Z&X-Amz-Expires=600&X-Amz-Signature=8a29b5b7d1860d9c29ee08cfc8d1a8be672a94d2729cb7d65c67dae5d526c0b7&X-Amz-SignedHeaders=host%3Bx-amz-acl%3Bx-amz-content-sha256&x-amz-acl=bucket-owner-full-control"
          }
          alt=""
        /> */}
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
