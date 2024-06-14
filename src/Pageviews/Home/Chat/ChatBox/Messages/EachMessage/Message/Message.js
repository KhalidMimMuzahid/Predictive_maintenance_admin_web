import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetMessage } from "../../../../Sidebar/List/ChatList/UserOrGroup/Group/NameAndMessage/Message/useGetMessage.";
import { PermIdentity } from "@mui/icons-material";

const Message = ({ user, message, users, isSuccessForGetUserInformation }) => {
  const { isLoading, message: message2 } = useGetMessage({
    lastMessage: message,
    lastMessageIsSuccess: true,
  });

  const [profileElement, setProfileElement] = useState(
    <Box>
      <PermIdentity />
    </Box>
  );
  useEffect(() => {
    if (users?.length) {
      const sender = users?.find((each) => each?._id === message?.sender);
      // console.log(":::::::::::", sender);

      const role = sender?.role;
      const photoUrl =
        sender[
          role === "showaUser" ||
          role === "showaAdmin" ||
          role === "showaSubAdmin"
            ? "showaUser"
            : role
        ]?.photoUrl;
      if (photoUrl) {
        setProfileElement(
          <Box sx={{ display: "flex" }}>
            <img
              src={photoUrl}
              style={{ width: "40px", height: "40px", borderRadius: "100%" }}
              alt=""
            />
            {/* <Name users={users} isSuccess={isSuccessForGetUserInformation} /> */}
          </Box>
        );
      }
    }
  }, [isSuccessForGetUserInformation]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexDirection: message?.sender === user?._id ? "row-reverse" : "row",
        color: message?.sender === user?._id ? "white" : "row",
        alignItems: "center",
      }}
    >
      {profileElement}

      <Box
        sx={{
          width: "60%",
        }}
      >
        <h3
          className={`${
            message?.sender === user?._id ? "talkbubbleAdmin" : "talkbubbleUser"
          }`}
          style={{
            background: message?.sender === user?._id ? "#24459C" : "#EAEEFA",
            borderRadius: "4px",
            padding: "10px",
            fontSize: "14px",
          }}
        >
          {isLoading ? "loading..." : message2 || "loading..."}
        </h3>
      </Box>
    </Box>
  );
};

export default Message;
