import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetMessage } from "./useGetMessage.";

const Message = ({ lastMessage, lastMessageIsSuccess, users }) => {
  const { isLoading, message } = useGetMessage({
    lastMessage,
    lastMessageIsSuccess,
  });

  return (
    <Box>
      <Typography
        sx={{
          color: "#56638D",
          fontSize: "12px",
          fontWeight: "500",
          textAlign: "start",
        }}
      >
        {message?.split(" ").slice(0, 5).join(" ") + " ..."}
      </Typography>
    </Box>
  );
};

export default Message;
