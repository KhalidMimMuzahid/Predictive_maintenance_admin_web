import { Close, Group, Language, PeopleOutline } from "@mui/icons-material";
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
import React from "react";

const ChooseAudienceModal = ({
  chooseAudienceModalOpen,
  setChooseAudienceModalOpen,
}) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={chooseAudienceModalOpen}
    >
      <Container
        sx={{
          width: "20%",
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
            Choose Audience
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
              setChooseAudienceModalOpen(!chooseAudienceModalOpen);
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
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ display: "flex", gap: "24px" }}
            >
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "300px",
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
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Language sx={{ color: "white" }} />
                  </Box>
                  <Typography sx={{ color: "black", fontWeight: "600" }}>
                    Public
                  </Typography>
                </Box>
                <FormControlLabel value="public" control={<Radio />} />
              </FormLabel>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "300px",
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
                      background: "#00B77A",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PeopleOutline sx={{ color: "white" }} />
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                  >
                    <Box>
                      <Typography sx={{ color: "black", fontWeight: "600" }}>
                        Showa Circle
                      </Typography>
                      <Typography sx={{ color: "black", fontSize: "12px" }}>
                        10 People
                      </Typography>
                    </Box>
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#5B646B",
                        border: "0.5px solid #D0D6D4",
                        width: "56px",
                        height: "28px",
                        borderRadius: "50px",
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
                <FormControlLabel value="showa_circle" control={<Radio />} />
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
              setChooseAudienceModalOpen(!chooseAudienceModalOpen);
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

export default ChooseAudienceModal;
