import { Box, Typography } from "@mui/material";
import React from "react";
import { LinearProgress } from "@mui/material";
import aws_icon from "../../../../Assets/Home/iot/aws.png";

const SystemHealth = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "8px",
        width: "50%",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}>
        System Health
      </Typography>
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "2px",
              marginBottom: "4px",
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
                  height: "36px",
                  width: "36px",
                  borderRadius: "100%",
                  background: "#F3F4F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={aws_icon} alt="" />
              </Box>
              <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
                AWS
              </Typography>
            </Box>
            <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
              {95}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={95}
            sx={{
              width: "100%",
              height: "8px",
              borderRadius: "8px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#20C18D", // Active color
              },
              backgroundColor: "#E5E6EB", // Inactive color
              boxShadow: "none", // Ensure no shadow
              border: "none", // Ensure no border
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "2px",
              marginBottom: "4px",
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
                  height: "36px",
                  width: "36px",
                  borderRadius: "100%",
                  background: "#F3F4F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={aws_icon} alt="" />
              </Box>
              <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
                AWS
              </Typography>
            </Box>
            <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
              {70}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              width: "100%",
              height: "8px",
              borderRadius: "8px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FFC25C", // Active color
              },
              backgroundColor: "#E5E6EB", // Inactive color
              boxShadow: "none", // Ensure no shadow
              border: "none", // Ensure no border
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "2px",
              marginBottom: "4px",
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
                  height: "36px",
                  width: "36px",
                  borderRadius: "100%",
                  background: "#F3F4F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={aws_icon} alt="" />
              </Box>
              <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
                AWS
              </Typography>
            </Box>
            <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
              {24}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={24}
            sx={{
              width: "100%",
              height: "8px",
              borderRadius: "8px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF6F79", // Active color
              },
              backgroundColor: "#E5E6EB", // Inactive color
              boxShadow: "none", // Ensure no shadow
              border: "none", // Ensure no border
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: "2px",
              marginBottom: "4px",
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
                  height: "36px",
                  width: "36px",
                  borderRadius: "100%",
                  background: "#F3F4F6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={aws_icon} alt="" />
              </Box>
              <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
                AWS
              </Typography>
            </Box>
            <Typography sx={{ color: "#4D5983", fontWeight: "600" }}>
              {70}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              width: "100%",
              height: "8px",
              borderRadius: "8px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#F68B1F", // Active color
              },
              backgroundColor: "#E5E6EB", // Inactive color
              boxShadow: "none", // Ensure no shadow
              border: "none", // Ensure no border
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SystemHealth;
