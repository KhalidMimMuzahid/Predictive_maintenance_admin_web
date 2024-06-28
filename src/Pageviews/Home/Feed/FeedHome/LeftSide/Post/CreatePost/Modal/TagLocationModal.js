import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const TagLocationModal = ({
  tagLocationModalOpen,
  setTagLocationModalOpen,
}) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={tagLocationModalOpen}
    >
      <Container
        sx={{
          width: "25%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            Tag Location
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setTagLocationModalOpen(!tagLocationModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <TextField
          variant="standard"
          id="Konbanwa, What’s happening?"
          name="Konbanwa, What’s happening?"
          autoFocus
          placeholder="Konbanwa, What’s happening?"
          InputProps={{ disableUnderline: true }}
          sx={{
            padding: "18px 0px",
            border: "1px solid #E6E8F0",
            width: "100%",
            marginY: "8px",
          }}
        />
        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setTagLocationModalOpen(!tagLocationModalOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default TagLocationModal;
