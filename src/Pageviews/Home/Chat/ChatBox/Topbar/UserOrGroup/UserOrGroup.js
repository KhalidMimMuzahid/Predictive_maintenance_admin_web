import { Box } from "@mui/material";
import React, { useEffect } from "react";
import User from "./User/User";
import Group from "./Group/Group";

const UserOrGroup = ({ chat, users, isSuccessForGetUserInformation }) => {
  if (!isSuccessForGetUserInformation) {
    return <h1>loading</h1>;
  }
  // console.log(chat);
  return (
    <Box sx={{ width: "100%" }}>
      {chat?.group?.groupAdmin ? (
        <Group
          users={users}
          chat={chat}
          isSuccess={isSuccessForGetUserInformation}
        />
      ) : (
        <User
          isSuccessForGetUserInformation={isSuccessForGetUserInformation}
          chat={chat}
          users={users}
          // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
          // isSuccessForUsers={isSuccessForUsers}
        />
      )}
    </Box>
  );
};

export default UserOrGroup;
