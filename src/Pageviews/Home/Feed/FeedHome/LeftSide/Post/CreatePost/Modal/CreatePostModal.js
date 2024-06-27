import {
  Close,
  ImageOutlined,
  Language,
  PlaceOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import userPhoto from "../../../../../../../../Assets/Home/customer/chat_girl.png";
import ChooseAudienceModal from "./ChooseAudienceModal";

const CreatePostModal = ({ createPostModalOpen, setCreatePostModalOpen }) => {
  const [chooseAudienceModalOpen, setChooseAudienceModalOpen] = useState(false);
  return (
    <>
      {chooseAudienceModalOpen && (
        <ChooseAudienceModal
          chooseAudienceModalOpen={chooseAudienceModalOpen}
          setChooseAudienceModalOpen={setChooseAudienceModalOpen}
        />
      )}
      <Modal
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={createPostModalOpen}
      >
        <Container
          sx={{
            width: "30%",
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
              Create Post
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
                setCreatePostModalOpen(!createPostModalOpen);
              }}
            >
              <Close />
            </Button>
          </Box>

          <Box
            sx={{
              padding: "8px 16px",
              marginY: "48px",
              boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                background: "white",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img src={userPhoto} alt="" />
                <Typography sx={{ color: "#030303", fontWeight: "600" }}>
                  Fujiwara Nori
                </Typography>
              </Box>
              <Button
                onClick={() =>
                  setChooseAudienceModalOpen(!chooseAudienceModalOpen)
                }
                sx={{
                  textTransform: "none",
                  border: "1px solid #24459C",
                  borderRadius: "50px",
                  padding: "2px 8px",
                }}
              >
                Public ⬇️
              </Button>
            </Box>
            <TextField
              variant="standard" // <== changed this
              margin="normal"
              fullWidth
              multiline={true}
              rows={6}
              id="Konbanwa, What’s happening?"
              name="Konbanwa, What’s happening?"
              autoFocus
              placeholder="Konbanwa, What’s happening?"
              InputProps={{ disableUnderline: true }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: "600",
                  color: "#24459C",
                  gap: "4px",
                }}
              >
                <Language />
                Everyone can reply
              </Button>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Button
                  sx={{
                    textTransform: "none",
                    fontWeight: "600",
                    background: "#24459C",
                    color: "white",
                  }}
                >
                  <ImageOutlined />
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                    fontWeight: "600",
                    background: "#24459C",
                    color: "white",
                  }}
                >
                  <PlaceOutlined />
                </Button>
              </Box>
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
                setCreatePostModalOpen(!createPostModalOpen);
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
              Post
            </Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
};

export default CreatePostModal;
