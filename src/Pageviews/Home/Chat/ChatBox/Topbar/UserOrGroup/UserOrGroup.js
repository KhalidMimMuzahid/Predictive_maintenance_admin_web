import { Box } from "@mui/material";
import React, { useEffect } from "react";
import User from "./User/User";
import { useGetUsersInformationByUsersMutation } from "../../../../../../features/chat/chatSlice";
import Group from "./Group/Group";

const UserOrGroup = ({
  // chat,
  selectedChat,
  //  isSuccessForChatByChat_id
}) => {
  // const [
  //   fetchUserData,
  //   { data: usersData, isLoading, isSuccess: isSuccessForUsers },
  // ] = useGetUsersInformationByUsersMutation();
  // useEffect(() => {
  //   if (isSuccessForChatByChat_id) {
  //     fetchUserData({ usersArray: chat?.users });
  //   }
  // }, [isSuccessForChatByChat_id]);
  return (
    <Box sx={{ width: "100%" }}>
      {selectedChat?.chat?.group?.groupAdmin ? (
        <Group users={selectedChat?.users} />
      ) : (
        <User
        selectedChat={selectedChat}
          // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
          // isSuccessForUsers={isSuccessForUsers}
        />
      )}
    </Box>
  );
};

export default UserOrGroup;
