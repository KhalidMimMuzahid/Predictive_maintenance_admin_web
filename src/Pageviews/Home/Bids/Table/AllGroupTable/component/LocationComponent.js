import { Button } from "@mui/material";
import React from "react";

const LocationComponent = () => {
  return (
    <Button
      sx={{
        textTransform: "none",
        padding: "2px 12px",
        color: "#24459C",
        background: "#DEE5F7",
        borderRadius: "20px",
        fontWeight: "600",
      }}
    >
      View Location
    </Button>
  );
};

export default LocationComponent;
