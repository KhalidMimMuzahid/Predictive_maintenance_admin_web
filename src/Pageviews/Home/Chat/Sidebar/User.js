import { Box, Button, Typography } from "@mui/material";
import React from "react";
import user from "../../../../Assets/Home/customer/user_demo_icon.png";

const User = ({ chat }) => {
  return (
    <Button
      sx={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
        }}
      >
        <img
          src={user}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
          }}
          alt="User"
        />
        <Box sx={{ width: "70%" }}>
          <Typography
            sx={{
              color: "#56638D",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "start",
            }}
          >
            {user?.name || "User"}
          </Typography>
          <Typography
            sx={{
              color: "#56638D",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "start",
            }}
          >
            Hello Admin.
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#D1D5DB",
          fontSize: "14px",
          fontWeight: "500",
          textAlign: "end",
          width: "30%",
        }}
      >
        10:44 PM
      </Typography>
    </Button>
  );
};

export default User;
