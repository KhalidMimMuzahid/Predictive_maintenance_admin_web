import React, { useEffect, useState } from "react";
import Topbar from "./Topbar/Topbar";
import { Box } from "@mui/material";
import SendMessage from "./SendMessage";
import Messages from "./Messages/Messages";
import {
  useGetChatByChatIdQuery,
  useGetMessagesByChatQuery,
  useGetUsersInformationByUsersMutation,
} from "../../../../features/chat/chatSlice";
import { useOutletContext, useParams } from "react-router-dom";

const MainScreen = () => {
  const [refetchForGetMyAllChat, setShouldRefreshChatId] = useOutletContext();

  const { _id } = useParams();
  const {
    data: messages,
    isSuccess,
    error,
    isError,

    refetch: refetchForGetMessagesByChat,
  } = useGetMessagesByChatQuery(_id);

  useEffect(() => {
    if (isSuccess) {
      console.log({ messages });
    } else if (isError) {
      console.log({ error });
    }
  }, [isSuccess, isError]);
  const [isSuccessForChatByChat_id, setIsSuccessForChatByChat_id] =
    useState(false);

  const [chatById, setChatById] = useState();
  // const [usersData, setUsersData] = useState();
  // const [isSuccessForGetUserInformation, setIsSuccessForGetUserInformation] =
  //   useState(false);

  const [
    fetchUserData,
    { data: usersData, isSuccess: isSuccessForGetUserInformation },
  ] = useGetUsersInformationByUsersMutation();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("user-token");
      const responseForChatById = await fetch(
        `${process.env.REACT_APP_BASE_URL}/messenger/chat/get-chat-by-chat_id?chat_id=${_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
      const parsedChatById = await responseForChatById.json();
      setChatById(parsedChatById);
      setIsSuccessForChatByChat_id(true);

      // url: `/user/get-users-info-by-users-array?rootUserFields=_id phone role&extendedUserFields=name photoUrl`,
      // method: "POST",
      // body: usersArrayObject,

      // const responseForUsers = await fetch(
      //   `${process.env.REACT_APP_BASE_URL}/user/get-users-info-by-users-array?rootUserFields=_id phone role&extendedUserFields=name photoUrl`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       authorization: `Bearer ${JSON.parse(token)}`,
      //     },
      //     body: JSON.stringify({ usersArray: parsedChatById?.data?.users }),
      //   }
      // );

      // const parsedUsersData = await responseForUsers.json();

      // console.log({ parsedUsersData });
      // setUsersData(parsedUsersData);
      // setIsSuccessForGetUserInformation(true);
      fetchUserData({ usersArray: parsedChatById?.data?.users });
    })();
  }, [_id]);

  return (
    <Box sx={{ width: "70%", position: "relative" }}>
      <Topbar
        // chatBox={chatById?.data}
        chat={chatById?.data}
        users={usersData?.data}
        isSuccessForGetUserInformation={isSuccessForGetUserInformation}
        // isSuccessForChatByChat_id={isSuccessForChatByChat_id}
      />
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Messages
        messages={messages}
        chat={_id}
        users={usersData?.data}
        isSuccessForGetUserInformation={isSuccessForGetUserInformation}
      />
      <SendMessage
        chat={_id}
        refetchForGetMyAllChat={refetchForGetMyAllChat}
        setShouldRefreshChatId={setShouldRefreshChatId}
        refetchForGetMessagesByChat={refetchForGetMessagesByChat}
      />
    </Box>
  );
};

export default MainScreen;
