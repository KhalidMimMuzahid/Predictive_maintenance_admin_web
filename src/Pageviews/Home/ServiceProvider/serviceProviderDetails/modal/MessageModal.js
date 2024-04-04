import React from "react";
import { Close, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const MessageModal = ({ messageModalOpen, setMessageModalOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={messageModalOpen}
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
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
            }}
          >
            Message
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              right: "0",
            }}
            onClick={() => {
              setMessageModalOpen(!messageModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box
          sx={{
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "20px 0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "700",
              color: "#65748B",
              background: "#F6F6F6",
              padding: "4px",
            }}
            id="standard-multiline-static"
            label="Write Message"
            multiline
            rows={4}
            defaultValue="Thanks for contacting Almina Concept, we’ll be with you as soon as we can! We typically respond within 30 minutes."
            variant="standard"
          />
        </Box>
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
              setMessageModalOpen(!messageModalOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
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
              background: "#14B8A6",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#14B8A6",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default MessageModal;
