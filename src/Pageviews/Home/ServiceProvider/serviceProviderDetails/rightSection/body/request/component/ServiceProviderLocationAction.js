import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationModal from "../modal/LocationModal";

const ServiceProviderLocationAction = ({ props }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  return (
    <Box>
      <>
        {locationOpen && (
          <LocationModal
            locationOpen={locationOpen}
            setLocationOpen={setLocationOpen}
          />
        )}
      </>
      <Button
        onClick={() => {
          setLocationOpen(!locationOpen);
        }}
        sx={{
          padding: "3px 10px",
          background: "#DEE5F7",
          color: "#24459C",
          fontSize: "10px",
          fontWeight: "600",
          borderRadius: "20px",
        }}
      >
        View Location
      </Button>
    </Box>
  );
};

export default ServiceProviderLocationAction;
