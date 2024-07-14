import { Box, Button, Typography } from "@mui/material";
import React from "react";
import addPhoto from "../../../../../Assets/Home/marketplace/add_photo_box.png";

const AddPhoto = ({ steps, setSteps, productDetails, setProductDetails }) => {
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
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={addPhoto} alt="" />
        </Box>
        <Box
          sx={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={addPhoto} alt="" />
        </Box>
        <Box
          sx={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={addPhoto} alt="" />
        </Box>
        <Box
          sx={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={addPhoto} alt="" />
        </Box>
        <Box
          sx={{
            border: "1px solid #D7E0E7",
            borderRadius: "5px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={addPhoto} alt="" />
        </Box>
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
