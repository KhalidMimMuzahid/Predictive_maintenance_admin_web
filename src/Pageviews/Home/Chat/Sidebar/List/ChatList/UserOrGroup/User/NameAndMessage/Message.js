import { Box, Typography } from "@mui/material";
import React from "react";

const Message = ({ lastMessage }) => {
  console.log(lastMessage);
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
        {lastMessage?.message}
      </Typography>
    </Box>
  );
};

export default Message;
