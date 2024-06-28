import {
  Close,
  CloseOutlined,
  ImageOutlined,
  Language,
  PersonAddOutlined,
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
import WhoCanReplyModal from "./WhoCanReplyModal";
import TagLocationModal from "./TagLocationModal";

const CreatePostModal = ({ createPostModalOpen, setCreatePostModalOpen }) => {
  const [chooseAudienceModalOpen, setChooseAudienceModalOpen] = useState(false);
  const [whoCanReplyModalOpen, setWhoCanReplyModalOpen] = useState(false);
  const [tagLocationModalOpen, setTagLocationModalOpen] = useState(false);
  const [audience, setAudience] = useState("public");
  const [reply, setReply] = useState("everyone");
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      {chooseAudienceModalOpen && (
        <ChooseAudienceModal
          chooseAudienceModalOpen={chooseAudienceModalOpen}
          setChooseAudienceModalOpen={setChooseAudienceModalOpen}
          audience={audience}
          setAudience={setAudience}
        />
      )}
      {whoCanReplyModalOpen && (
        <WhoCanReplyModal
          whoCanReplyModalOpen={whoCanReplyModalOpen}
          setWhoCanReplyModalOpen={setWhoCanReplyModalOpen}
          reply={reply}
          setReply={setReply}
        />
      )}
      {tagLocationModalOpen && (
        <TagLocationModal
          tagLocationModalOpen={tagLocationModalOpen}
          setTagLocationModalOpen={setTagLocationModalOpen}
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
                {audience === "public" ? "Public" : "Showa Circle"} ⬇️
              </Button>
            </Box>
            <TextField
              variant="standard"
              margin="normal"
              multiline={true}
              rows={4}
              fullWidth
              id="Konbanwa, What’s happening?"
              name="Konbanwa, What’s happening?"
              autoFocus
              placeholder="Konbanwa, What’s happening?"
              InputProps={{ disableUnderline: true }}
            />
            {image !== null && (
              <Box sx={{ position: "relative" }}>
                <img alt="preview img" src={image} style={{ width: "256px" }} />
                <button
                  style={{
                    position: "absolute",
                    left: 5,
                    top: 5,
                    background: "#3A3A3A",
                    color: "white",
                    borderRadius: "100%",
                    border: "none",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <CloseOutlined />
                </button>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => {
                  setWhoCanReplyModalOpen(!whoCanReplyModalOpen);
                }}
                sx={{
                  textTransform: "none",
                  fontWeight: "600",
                  color: "#24459C",
                  gap: "4px",
                }}
              >
                {reply === "everyone" && (
                  <>
                    <Language />
                    Everyone can reply
                  </>
                )}
                {reply === "people_you_follow" && (
                  <>
                    <PersonAddOutlined />
                    People You Follow
                  </>
                )}
                {reply === "people_you_mention" && (
                  <>
                    <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
                      @
                    </Typography>
                    People You mention
                  </>
                )}
              </Button>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <label
                  style={{
                    textTransform: "none",
                    fontWeight: "600",
                    background: "#24459C",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    cursor: "pointer",
                  }}
                >
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                  <ImageOutlined />
                </label>

                <button
                  onClick={() => setTagLocationModalOpen(!tagLocationModalOpen)}
                  style={{
                    fontWeight: "600",
                    background: "#24459C",
                    color: "white",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "100%",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <PlaceOutlined />
                </button>
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
