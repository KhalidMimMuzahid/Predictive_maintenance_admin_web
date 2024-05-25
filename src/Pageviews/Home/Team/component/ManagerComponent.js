import { Box, Typography } from "@mui/material";
import React from "react";

const ManagerComponent = ({ props }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0 8px" }}>
      <img
        src={
          props?.row?.companyBasicInfo?.shopInfo?.companyRegDocumentPhotoAddress
        }
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "100%",
          border: "1px solid yellow",
        }}
        alt="Manager"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {props?.row?.manager?.name || "Coming"}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
          }}
        >
          {props?.row?.manager?.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default ManagerComponent;
