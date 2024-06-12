import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetMessage } from "../../../Sidebar/List/ChatList/UserOrGroup/Group/NameAndMessage/Message/useGetMessage.";

const Message = ({ message }) => {
  const { user } = useSelector((state) => state.auth);

  const { isLoading, message: message2 } = useGetMessage({
    lastMessage: message,
    lastMessageIsSuccess: true,
  });
  if (message?.type === "message") {
    //
  } else if (message?.type === "event") {
    //
  } else if (message?.type === "file") {
    // we are not working on it for now
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexDirection: message?.sender === user?._id ? "row-reverse" : "row",
        color: message?.sender === user?._id ? "white" : "row",
        alignSelf: message?.type === "event" ? "center" : "",
        alignItems: "center",
      }}
    >
      {message?.type !== "event" && (
        <img
          style={{ width: "40px", height: "40px", borderRadius: "100%" }}
          // src={
          //     message?.sender === user?._id ?
          //     ? messages?.users?.admin?.photoUrl
          //     : messages?.users?.user?.photoUrl
          // }

          src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/386460525_2129430194073992_5529452053896751566_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqVbwy2wFlzJ2lSvQT3A5ltTD349ZYTkS1MPfj1lhORJtEBKrMN-OkYV32QUb8V1h9S9RtXBK6Qi-og34QeQ3q&_nc_ohc=5iP3HhwMIhEQ7kNvgG3mQ41&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBZpZ7AjFlblkB9_I0aYqF5jwzQ3Wp7CWdHmx3SlrgYfA&oe=66609956"
          alt=""
        />
      )}
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
          {message2 || "loading..."}
        </h3>
      </Box>
    </Box>
  );
};

export default Message;
