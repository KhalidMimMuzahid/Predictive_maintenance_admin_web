import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const CustomerNameComponent = ({ props }) => {
  const dummyPhoto = "https://i.ibb.co/85Nc6x7/handsome-boy.webp";
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        gap: "17px",
      }}
    >
      <Box>
        <Avatar
          sx={{ width: "36px" }}
          src={props?.row?.showaUser?.photoUrl || dummyPhoto}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontSize: "12px", fontWeight: "900" }}
        >
          {props?.customer?.customerName}
        </Typography>{" "}
        <Typography variant="h6" component="h6" sx={{ fontSize: "12px" }}>
          {props?.customer?.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerNameComponent;
