import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CompanyName = ({ serviceProviderCompany }) => {
  console.log(serviceProviderCompany);
  return (
    <Box>
      <Link
        to={`/service-provider/${serviceProviderCompany?._id}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          textDecoration: "none",
          color: "#24459C",
        }}
      >
        <img
          src={serviceProviderCompany?.photoUrl}
          style={{ width: "30px", height: "30px", borderRadius: "100%" }}
          alt=""
        />
        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
          {serviceProviderCompany?.companyName}
        </Typography>
      </Link>
    </Box>
  );
};

export default CompanyName;
