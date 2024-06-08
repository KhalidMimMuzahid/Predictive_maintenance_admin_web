import { Box, Button, Typography } from "@mui/material";
import React from "react";
import chatGirl from "../../../../Assets/Home/customer/chat_girl.png";
import { DeleteOutline, InfoOutlined, MoreHoriz } from "@mui/icons-material";

const Topbar = () => {
  return (
    <Box
      sx={{
        padding: "0px 24px 8px 75px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <img src={chatGirl} alt="" />
        <Box>
          <Typography
            sx={{ color: "#24459C", fontSize: "20px", fontWeight: "600" }}
          >
            Abigali Kelly
          </Typography>
          <Typography
            sx={{ color: "#24459C", fontSize: "16px", fontWeight: "500" }}
          >
            🟢 Active
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <DeleteOutline />
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <InfoOutlined />
        </Button>
        <Button
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            border: "1px solid #E9EBFA",
            padding: "0px",
          }}
        >
          <MoreHoriz />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
