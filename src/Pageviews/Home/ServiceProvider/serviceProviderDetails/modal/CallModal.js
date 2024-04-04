import React from "react";
import { Close, Delete } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const CallModal = ({ callModalOpen, setCallModalOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={callModalOpen}
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
            justifyContent: "end",
          }}
        >
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
            }}
            onClick={() => {
              setCallModalOpen(!callModalOpen);
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
          <Box
            sx={{
              border: "2px solid #03A600",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
            }}
          >
            <PhoneOutlinedIcon
              sx={{ color: "#03A600", fontSize: "36px" }}
            ></PhoneOutlinedIcon>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12px 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", color: "#646565", fontWeight: "700" }}
            >
              Proceed to Call
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#9BA1AD", fontWeight: "400" }}
            >
              You are about to call at +8183-817-6365 . Are you sure ?
            </Typography>
          </Box>
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
              setCallModalOpen(!callModalOpen);
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
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Confirm
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default CallModal;
