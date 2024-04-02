import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import RightSection from "./rightSection/RightSection";
import { useParams } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";

const ServiceProviderDetails = () => {
  const [serviceProviderDetails, setServiceProviderDetails] = useState({});
  const { uid } = useParams();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/admin/service-provider/get-service-provider-with-id/${uid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setServiceProviderDetails(data);
        } else {
        }
      })
      .catch((err) => {});
  }, [uid]);

  console.log(serviceProviderDetails);
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      {/* left sidebar  */}
      <Box
        sx={{
          bgcolor: "white",
          padding: "12px",
          width: "22%",
          borderRadius: "5px",
        }}
      >
        <LeftSection
          serviceProviderDetails={serviceProviderDetails}
          // wallet={wallet}
          // subscriptionPackage={subscriptionPackage}
        />
      </Box>
      {/* right sidebar  */}
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        <RightSection serviceProviderDetails={serviceProviderDetails} />
      </Box>
    </Box>
  );
};

export default ServiceProviderDetails;
