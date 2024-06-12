import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { DeleteOutline, InfoOutlined, MoreHoriz } from "@mui/icons-material";
import UserOrGroup from "./UserOrGroup/UserOrGroup";

const Topbar = ({ chat, users, isSuccessForGetUserInformation }) => {
  return (
    <Box
      sx={{
        padding: "0px 24px 8px 75px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <UserOrGroup
          chat={chat}
          users={users}
          isSuccessForGetUserInformation={isSuccessForGetUserInformation}
          // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <DeleteOutline />
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <InfoOutlined />
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <MoreHoriz />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
