import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const TeamViewModal = ({ teamViewOpen, setTeamViewOpen, props }) => {
  console.log(props);
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={teamViewOpen}
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
            View Member
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
              setTeamViewOpen(!teamViewOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "8px 16px" }}>
          <Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "",
                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Profile Picture
                </Typography>
                <img
                  src={props?.photoUrl}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    background: "#D9E3FF",
                    border: "1px solid #D9E3FF",
                  }}
                  alt=""
                />
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Member Name
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  {props?.name?.firstName + " " + props?.name?.lastName}
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Position
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  {props?.currentState?.designation}
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  {props?.user?.phone || "No Data Found"}
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Serviced
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  {props?.row?.serviced}
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  padding: "16px 32px",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                  }}
                >
                  Joined
                </Typography>
                <Typography
                  sx={{ color: "#2196F3", fontSize: "14px", fontWeight: "600" }}
                >
                  {/* {props?.row?.joined} */}
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default TeamViewModal;
