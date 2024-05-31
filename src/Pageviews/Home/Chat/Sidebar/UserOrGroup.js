import { Box } from "@mui/material";
import React from "react";
import User from "./User";
import Group from "./Group";

const UserOrGroup = ({ chat }) => {
  // console.log(chat);
  return (
    <Box sx={{ width: "100%" }}>
      {chat?.group?.groupAdmin ? <Group chat={chat} /> : <User chat={chat} />}
    </Box>
  );
};

export default UserOrGroup;
