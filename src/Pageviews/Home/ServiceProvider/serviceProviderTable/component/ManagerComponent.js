import { Box, Typography } from "@mui/material";
import React from "react";

const ManagerComponent = ({ props }) => {
  console.log(props.serviceProviderAdmin?.serviceProviderAdmin);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0 8px" }}>
      <img
        src={props?.companyBasicInfo?.shopInfo?.companyRegDocumentPhotoAddress}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "100%",
          border: "1px solid yellow",
        }}
        alt="Manager"
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {props.serviceProviderAdmin?.serviceProviderAdmin?.name?.firstName}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {props.serviceProviderAdmin?.serviceProviderAdmin?.name?.lastName}
          </Typography>
        </Box>
        <Typography
          variant="p"
          sx={{
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          {props.serviceProviderAdmin?.phone || "Phone Not Found"}
        </Typography>
      </Box>
    </Box>
  );
};

export default ManagerComponent;
