import { Box, Typography } from "@mui/material";
import React from "react";

const CompanyNameComponent = ({ props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0 16px",
      }}
    >
      <Box
        sx={{
          width: "36px",
          height: "36px",
          borderRadius: "100%",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={props?.company?.photoUrl}
          style={{ width: "32px", height: "32px", borderRadius: "100%" }}
          alt=""
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            color: "#25213B",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {props?.company?.companyName}
        </Typography>
      </Box>
    </Box>
  );
};

export default CompanyNameComponent;
