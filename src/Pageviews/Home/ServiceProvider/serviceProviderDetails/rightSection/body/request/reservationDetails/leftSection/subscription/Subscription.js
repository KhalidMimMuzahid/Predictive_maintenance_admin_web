import { Box, Typography } from "@mui/material";
import React from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
export const Subscription = ({ subscriptionPackage }) => {
  return (
    <Box
      sx={{
        border: "1px solid #F2F2F2",
        borderRadius: "4px",
        padding: "16px 12px 16px 12px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          borderBottom: "1px solid #F2F2F2",
          fontSize: "18px",
          fontWeight: "500",
          paddingBottom: "8px",
        }}
      >
        Subscription
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 12px 20px 12px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography
            variant="p"
            sx={{ color: "#24459C", fontSize: "16px", fontWeight: "600" }}
          >
            Standard
          </Typography>
          <Typography variant="p" sx={{ color: "#7B7B7B", fontSize: "12px" }}>
            1 washing machine, Sensor Module
          </Typography>
        </Box>
        <EventAvailableIcon sx={{ width: "36px", height: "34px" }} />
      </Box>
    </Box>
  );
};
