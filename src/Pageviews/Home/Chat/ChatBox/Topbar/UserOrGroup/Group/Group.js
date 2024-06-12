import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import Name from "../Group/NameAndMessage/Name";
const Group = ({ chat, users, isSuccess }) => {
  // console.log(chat);

  if (!isSuccess) {
    return <h1>loading</h1>;
  }
  return (
    <Button
      sx={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: "24px",
        textTransform: "none",
      }}
    >
      <Profile groupPhotoUrl={chat?.group?.groupPhotoUrl} users={users} />

      <Name
        chat={chat}
        group={chat?.group}
        users={users}
        isSuccess={isSuccess}
      />
    </Button>
  );
};

export default Group;
