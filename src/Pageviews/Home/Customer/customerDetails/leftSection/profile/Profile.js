import { Box } from "@mui/material";
import React from "react";

const Profile = ({ user }) => {
  return (
    <Box sx={{ border: "1px solid black", bgcolor: "white", padding: "12px" }}>
      <img
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "100%",
        }}
        src={user?.photoAddress}
        alt=""
      />
      <h4>{user?.firstNameAlphabet}</h4>
      <h4>{user?.email}</h4>
      <h4>{user?.phone}</h4>
    </Box>
  );
};

export default Profile;
