import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetMessage } from "../../../Sidebar/List/ChatList/UserOrGroup/Group/NameAndMessage/Message/useGetMessage.";
import Message from "./Message/Message";
import Event from "./Event/Event";

const EachMessage = ({ message, users, isSuccessForGetUserInformation }) => {
  const { user } = useSelector((state) => state.auth);

  const component =
    message?.type === "message" ? (
      <Message
        user={user}
        users={users}
        isSuccessForGetUserInformation={isSuccessForGetUserInformation}
        message={message}
      />
    ) : message?.type === "event" ? (
      <Event user={user} message={message} />
    ) : (
      <div>file</div>
    );

  return component;
};

export default EachMessage;
