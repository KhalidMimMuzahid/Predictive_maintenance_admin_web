import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";

const IssuesModal = ({ issuesModalOpen, setIssuesModalOpen, problem }) => {
  console.log(problem?.images);
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={issuesModalOpen}
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
            Issue List
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
              setIssuesModalOpen(!issuesModalOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box sx={{ marginY: "16px" }}>
          <Box>
            <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
            <Typography
              sx={{
                padding: "12px",
                background: "#F4F2FF",
                fontWeight: "600",
                color: "#6E6893",
              }}
            >
              ISSUES
            </Typography>

            <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
            {problem?.issues?.map((issue, i) => (
              <>
                <Typography
                  sx={{
                    padding: "12px",
                    fontWeight: "600",
                    color: "#6E6893",
                  }}
                >
                  <span style={{ marginRight: "20px" }}>{i + 1 + " "}</span>
                  {issue}
                </Typography>

                <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              </>
            ))}
          </Box>
          <Box sx={{ padding: "8px 0" }}>
            <Box
              sx={{
                padding: "12px 14px 44px 14px",
                background: "#F6F6F6",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ color: "#C7CCD8" }}>Comment</Typography>
              <Typography sx={{ color: "#5A6872" }}>
                {problem?.problemDescription}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ padding: "8px 0px" }}>
            <Box
              sx={{
                padding: "12px 14px",
                background: "#F6F6F6",
                borderRadius: "4px",
              }}
            >
              <Typography sx={{ color: "#C7CCD8" }}>Attachments</Typography>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ padding: "2px", background: "#FFF" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                      }}
                    >
                      {problem?.images?.map((img, i) => (
                        <img
                          src={img?.image}
                          style={{ width: "120px", height: "90px" }}
                          alt=""
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default IssuesModal;
