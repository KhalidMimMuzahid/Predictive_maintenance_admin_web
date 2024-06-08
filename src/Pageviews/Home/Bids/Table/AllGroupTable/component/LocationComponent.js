import { Close } from "@mui/icons-material";
import { Container, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LocationComponent = ({ props }) => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [mapAdds, setMapAdds] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0782002738088!2d90.4224907760236!3d23.780229487629235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e0a1bcc1a9%3A0x7017272f157c7e1!2sANTT%20Robotics%20R%26D%20office!5e0!3m2!1sen!2sbd!4v1716126460894!5m2!1sen!2sbd"
  );

  function displayLocation() {
    return (
      <div
        style={{
          color: "#24459C",
          backgroundColor: "#DEE5F7",
          cursor: "pointer",
          padding: "6px 12px",
          borderRadius: "25px",
          fontSize: "14px",
        }}
        onClick={(e) => {
          setShowLocationModal(!showLocationModal);
        }}
      >
        View Location
      </div>
    );
  }

  return (
    <div>
      <Modal
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={showLocationModal}
      >
        <Container
          sx={{
            width: "50%",
            background: "white",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#24459c", fontSize: "24px", fontWeight: "700" }}
            >
              Show Location
            </Typography>

            <IconButton
              style={{ right: "10" }}
              onClick={() => setShowLocationModal(false)}
            >
              <Close />
            </IconButton>
          </div>

          <div style={{ marginTop: "12px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0782002738088!2d90.4224907760236!3d23.780229487629235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e0a1bcc1a9%3A0x7017272f157c7e1!2sANTT%20Robotics%20R%26D%20office!5e0!3m2!1sen!2sbd!4v1716126460894!5m2!1sen!2sbd"
              width="100%"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="ANTT Robotics Ltd."
            ></iframe>
          </div>
        </Container>
      </Modal>
      {displayLocation()}
    </div>
  );
};

export default LocationComponent;
