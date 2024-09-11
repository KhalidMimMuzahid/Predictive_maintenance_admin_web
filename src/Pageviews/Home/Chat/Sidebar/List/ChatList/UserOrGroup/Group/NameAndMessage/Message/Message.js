import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetMessage } from "./useGetMessage.";
import { useSelector } from "react-redux";

const Message = ({ lastMessage, lastMessageIsSuccess, users }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  const { isLoading, message } = useGetMessage({
    lastMessage,
    lastMessageIsSuccess,
  });

  return (
    <Box>
      <Typography
        sx={{
          color: "#56638D",
          fontSize: breakpoint === "lg" ? "8px" : "12px",
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
