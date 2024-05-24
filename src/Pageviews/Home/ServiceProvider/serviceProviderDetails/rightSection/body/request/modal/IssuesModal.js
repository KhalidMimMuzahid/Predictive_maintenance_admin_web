import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";

const EditModal = ({ issuesOpen, setIssuesOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={issuesOpen}
    >
      <Container
        sx={{
          width: "35%",
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
            onClick={() => {
              setIssuesOpen(!issuesOpen);
            }}
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box sx={{ padding: "8px 16px" }}>
          <hr style={{ background: "#E6E8F0", opacity: "40%" }} />
          <Box sx={{ padding: "14px 12px", background: "#F4F2FF" }}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#6E6893" }}
            >
              ISSUES
            </Typography>
          </Box>
          {props?.issues?.map((issue, i) => (
            <>
              {" "}
              <hr style={{ background: "#E6E8F0", opacity: "40%" }} />
              <Box sx={{ padding: "14px 12px", display: "flex", gap: "18px" }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "600", color: "#6E6893" }}
                >
                  {i + 1}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "#5A6872" }}
                >
                  {issue}
                </Typography>
              </Box>
            </>
          ))}
          <hr style={{ background: "#E6E8F0", opacity: "40%" }} />
        </Box>
        <Box sx={{ padding: "8px 16px" }}>
          <Box
            sx={{
              padding: "12px 14px 44px 14px",
              background: "#F6F6F6",
              borderRadius: "4px",
            }}
          >
            <Typography sx={{ color: "#C7CCD8" }}>Comment</Typography>
            <Typography sx={{ color: "#5A6872" }}>
              {props?.problemDescription}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: "8px 16px" }}>
          <Box
            sx={{
              padding: "12px 14px",
              background: "#F6F6F6",
              borderRadius: "4px",
            }}
          >
            <Typography sx={{ color: "#C7CCD8" }}>Attachments</Typography>
            <Box>
              {props?.image?.map((img, i) => (
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ padding: "2px", background: "#FFF" }}>
                    <img src={img?.image} alt="" />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default EditModal;
