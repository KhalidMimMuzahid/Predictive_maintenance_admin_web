import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";

const ViewModal = ({ viewOpen, setViewOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewOpen}
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
            View Request
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
              setViewOpen(!viewOpen);
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
                  Product
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  Temperature Sensor
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
                  MAC Address
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                ></Typography>
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
                  Module Type
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  Temperature Sensor{" "}
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
                  Machine Type
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  Temperature Sensor{" "}
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
                  State
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  Temperature Sensor{" "}
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
                  Status
                </Typography>
                <Typography
                  sx={{ color: "#7FC008", fontSize: "14px", fontWeight: "600" }}
                >
                  🟢 Active
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: "8px 16px" }}>
          <Box>
            <Typography
              sx={{
                color: "#5A6B85",
                fontSize: "18px",
                fontWeight: "700",
                padding: "16px 12px",
              }}
            >
              Customer Details
            </Typography>
            <Box>
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
                  Customer
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  {props?.row?.customer}
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
                  Customer Phone
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  Temperature Sensor{" "}
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

export default ViewModal;
