import React from "react";
import { Box, Typography } from "@mui/material";

const Profile = ({ customerDetails }) => {
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
          padding: "4px",
          background: "#F3F3F3",
        }}
        src={customerDetails?.showaUser?.photoUrl}
        alt=""
      />
      {/* <PermIdentityIcon
        sx={{
          width: "75px",
          height: "75px",
          borderRadius: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px",
          background: "#F3F3F3",
        }}
      /> */}
      <Typography
        variant="h4"
        sx={{ fontSize: "18px", color: "#838383", textTransform: "uppercase" }}
      >
        {customerDetails?.showaUser?.name?.firstName +
          " " +
          customerDetails?.showaUser?.name?.lastName}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#65748B" }}>
        {customerDetails?.email}
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#65748B" }}>
        {customerDetails?.showaUser?.phone}
      </Typography>
    </Box>
  );
};

export default Profile;
