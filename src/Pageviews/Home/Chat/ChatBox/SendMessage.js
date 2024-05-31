import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import sendMessageIcon from "../../../../Assets/Home/chat/send.png";
import { usePostSendMessageToChatMutation } from "../../../../features/chat/chatSlice";
import { toast } from "react-toastify";

const SendMessage = () => {
  const [postSendMessage, { data, isError, error, isLoading, isSuccess }] =
    usePostSendMessageToChatMutation();
  const onSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const messageData = {
      type: "message",
      message,
    };
    postSendMessage({ messageData, chat: "6656c7eaa9d29926d83b72a5" });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);
  console.log(data);
  return (
    <Box
      sx={{ padding: "15px", position: "absolute", bottom: "0", width: "100%" }}
    >
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", position: "relative" }}
      >
        <input
          placeholder="What's on your mind?"
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            background: "#F5F6F7",
            padding: "16px 12px",
          }}
          name="message"
        />
        <button
          type="submit"
          style={{
            border: "none",
            background: "none",
            position: "absolute",
            right: "5px",
            top: "7px",
            cursor: "pointer",
          }}
        >
          <img src={sendMessageIcon} style={{}} alt="" />
        </button>
      </form>
    </Box>
  );
};

export default SendMessage;
