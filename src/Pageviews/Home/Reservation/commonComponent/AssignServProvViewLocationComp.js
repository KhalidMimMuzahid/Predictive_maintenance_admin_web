import { Button } from "@mui/material";
import React, { useState } from "react";
import LocationModal from "../../ServiceProvider/serviceProviderDetails/rightSection/body/request/modal/LocationModal";

const AssignServProvViewLocationComp = ({ props }) => {
  const [locationOpen, setLocationOpen] = useState(false);
  return (
    <>
      {locationOpen && (
        <LocationModal
          locationOpen={locationOpen}
          setLocationOpen={setLocationOpen}
        />
      )}
      <Button
        onClick={() => setLocationOpen(!locationOpen)}
        sx={{
          textTransform: "none",
          background: "#D9E3FF",
          "&:hover": {
            background: "#D9E3FF",
          },
          borderRadius: "20px",
          color: "#24459C",
          padding: "2px 24px",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        View Location
      </Button>
    </>
  );
};

export default AssignServProvViewLocationComp;
