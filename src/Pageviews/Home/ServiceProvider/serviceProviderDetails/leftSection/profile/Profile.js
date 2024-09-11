import { Box, Typography } from "@mui/material";
import React from "react";

const Profile = ({ serviceProviderDetails }) => {
  return (
    <Box
      sx={{
        border: "1px solid #F2F2F2",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="profile_box"
    >
      <img
        style={{
          borderRadius: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "75px",
          height: "75px",
        }}
        src={serviceProviderDetails?.photoUrl}
        alt="Company Img"
      />
      <Typography
        className="profile_name"
        sx={{ color: "#838383", textTransform: "uppercase" }}
      >
        {serviceProviderDetails?.companyName}
      </Typography>
      <Typography className="email" sx={{ color: "#65748B" }}>
        {serviceProviderDetails?.serviceProviderAdmin?.email}
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#65748B" }}>
        {serviceProviderDetails?.companyBasicInfo?.telephone}
      </Typography>
    </Box>
  );
};

export default Profile;
