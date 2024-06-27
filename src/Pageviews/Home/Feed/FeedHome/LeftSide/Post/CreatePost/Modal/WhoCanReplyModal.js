import {
  Close,
  Language,
  PeopleOutline,
  PersonAddOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const WhoCanReplyModal = ({
  whoCanReplyModalOpen,
  setWhoCanReplyModalOpen,
  reply,
  setReply,
}) => {
  const getValue = (e) => {
    setReply(e.target.value);
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={whoCanReplyModalOpen}
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
            Who Can Reply?
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
              setWhoCanReplyModalOpen(!whoCanReplyModalOpen);
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
          <Typography sx={{ color: "#474F56", fontWeight: "600" }}>
            Select who can reply to this this post. Keep in mind that anyone
            mentioned can always reply
          </Typography>
          <FormControl sx={{ width: "100%", marginTop: "16px" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={reply}
              name="radio-buttons-group"
              sx={{ display: "flex", gap: "16px" }}
              onChange={(e) => getValue(e)}
            >
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: reply === "everyone" ? "#D9E3FF" : "",
                  padding: "14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      background: "#24459C",
                      borderRadius: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Language sx={{ color: "white" }} />
                  </Box>
                  <Typography sx={{ color: "black", fontWeight: "600" }}>
                    Everyone
                  </Typography>
                </Box>
                <FormControlLabel value="everyone" control={<Radio />} />
              </FormLabel>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: reply === "people_you_follow" ? "#D9E3FF" : "",
                  padding: "14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      background: "#24459C",
                      borderRadius: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PersonAddOutlined sx={{ color: "white" }} />
                  </Box>
                  <Typography sx={{ color: "black", fontWeight: "600" }}>
                    People you follow
                  </Typography>
                </Box>
                <FormControlLabel
                  value="people_you_follow"
                  control={<Radio />}
                />
              </FormLabel>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: reply === "people_you_mention" ? "#D9E3FF" : "",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      background: "#24459C",
                      borderRadius: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "white" }}>@</Typography>
                  </Box>
                  <Typography sx={{ color: "black", fontWeight: "600" }}>
                    Only people you mention
                  </Typography>
                </Box>
                <FormControlLabel
                  value="people_you_mention"
                  control={<Radio />}
                />
              </FormLabel>
            </RadioGroup>
          </FormControl>
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
              setWhoCanReplyModalOpen(!whoCanReplyModalOpen);
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
            onClick={() => {
              setWhoCanReplyModalOpen(!whoCanReplyModalOpen);
            }}
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

export default WhoCanReplyModal;
