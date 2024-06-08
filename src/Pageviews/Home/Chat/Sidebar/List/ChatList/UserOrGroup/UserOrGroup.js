import { Box } from "@mui/material";
import React, { useEffect } from "react";
import User from "./User/User";
import Group from "./Group/Group";
import {
  useGetLastMessageByChatQuery,
  useGetUsersInformationByUsersMutation,
} from "../../../../../../../features/chat/chatSlice";

const UserOrGroup = ({ chat }) => {
  const [fetchUserData, { data: usersData, isLoading, isSuccess }] =
    useGetUsersInformationByUsersMutation();
  const { data: lastMessageData, isSuccess: lastMessageIsSuccess } =
    useGetLastMessageByChatQuery(chat?._id);
  console.log(usersData);

  useEffect(() => {
    fetchUserData({ usersArray: chat?.users });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {chat?.group?.groupAdmin ? (
        <Group
          chat={chat}
          users={usersData?.data}
          isSuccess={isSuccess}
          lastMessage={lastMessageData?.data}
          lastMessageIsSuccess={lastMessageIsSuccess}
        />
      ) : (
        <User
          chat={chat}
          users={usersData?.data}
          isSuccess={isSuccess}
          lastMessage={lastMessageData?.data}
          lastMessageIsSuccess={lastMessageIsSuccess}
        />
      )}
    </Box>
  );
};

export default UserOrGroup;
