import React from "react";
import { Close, Delete } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import map from "../../../../../../../../Assets/Home/service_provider/MapsicleMap.png";

const LocationModal = ({ locationOpen, setLocationOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={locationOpen}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#5A6872",
              mt: "8px",
            }}
          >
            Location
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
            }}
            onClick={() => {
              setLocationOpen(!locationOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box>
          <Box sx={{ padding: "32px", textAlign: "center" }}>
            <Typography sx={{ fontSize: "18px", color: "#5A6872" }}>
              1265-11, Nihon Ohdori, Naka-ku
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#5A6872" }}>
              yokohama, Kanagawa, Japan
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src={map}
            style={{
              width: "100%",
            }}
            alt=""
          />
          <Button
            sx={{
              padding: "4px 20px",
              borderRadius: "20px",
              fontSize: "14px",
              background: "#24459C",
              color: "#FFFFFF",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
          >
            Direction
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default LocationModal;
