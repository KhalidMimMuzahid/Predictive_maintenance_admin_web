import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = ({ customerDetailsData }) => {
  return (
    <Box
      sx={{
        border: "1px solid #F2F2F2",
        borderRadius: "4px",
        padding: "20px 12px 20px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        src={customerDetailsData?.showaUser?.photoUrl}
        alt=""
      />
      <Typography
        variant="h4"
        sx={{ fontSize: "18px", color: "#838383", textTransform: "uppercase" }}
      >
        {customerDetailsData?.firstNameAlphabet}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#65748B" }}>
        {customerDetailsData?.email}
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#65748B" }}>
        {customerDetailsData?.phone || "+8801717326286"}
      </Typography>
    </Box>
  );
};

export default Profile;
