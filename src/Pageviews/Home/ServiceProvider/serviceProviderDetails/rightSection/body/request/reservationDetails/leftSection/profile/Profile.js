import React from "react";
import { Box, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Profile = ({ user }) => {
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
      {/* <img style={{}} src={user?.photoAddress} alt="" /> */}
      <PermIdentityIcon
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
      />
      <Typography
        variant="h4"
        sx={{ fontSize: "18px", color: "#838383", textTransform: "uppercase" }}
      >
        Miyashiro Toshiaki
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#65748B" }}>
        miyashirotoshiaki@example.com
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#65748B" }}>
        +8192-522-1055
      </Typography>
    </Box>
  );
};

export default Profile;
