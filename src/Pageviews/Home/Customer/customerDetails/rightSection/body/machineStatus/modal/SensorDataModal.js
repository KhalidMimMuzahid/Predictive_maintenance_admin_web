import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const SensorDataModal = ({ sensorDataOpen, setSensorDataOpen, props }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={sensorDataOpen}
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
            Sensor Data
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
              setSensorDataOpen(!sensorDataOpen);
            }}
          >
            <Close />
          </Button>
        </Box>

        <Box sx={{ padding: "16px 16px" }}>
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
                  Machine Status
                </Typography>
                <Typography
                  sx={{ color: "#F15F5F", fontSize: "14px", fontWeight: "600" }}
                >
                  Abnormal
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
                  Temperature 1
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  85° C
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
                  Vibration 1
                </Typography>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
                >
                  22 Hz
                </Typography>
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                    textAlign: "start",
                    padding: "10px 32px 0 32px",
                  }}
                >
                  Temperature Chart
                </Typography>
                <LineChart
                  xAxis={[
                    { data: [1, 2, 3, 5, 8, 10, 12, 15, 18, 22, 26, 30] },
                  ]}
                  series={[
                    {
                      data: [30, 42, 8, 45, 30, 31, 15, 35, 40, 39, 30, 38],
                    },
                  ]}
                  width={500}
                  height={200}
                />
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "600",
                    width: "40%",
                    textAlign: "start",
                    padding: "10px 32px 0 32px",
                  }}
                >
                  Vibration Chart
                </Typography>
                <LineChart
                  xAxis={[
                    { data: [1, 2, 3, 5, 8, 10, 12, 15, 18, 22, 26, 30] },
                  ]}
                  series={[
                    {
                      data: [30, 42, 8, 45, 30, 31, 15, 35, 40, 39, 30, 38],
                    },
                  ]}
                  width={500}
                  height={200}
                />
              </Box>
              <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default SensorDataModal;
