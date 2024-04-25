import { Box, Typography } from "@mui/material";
import React from "react";
import "./Status.Module.css";

const Status = () => {
  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      <Box
        sx={{
          padding: "10px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "23%",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#5D6396" }}
        >
          In Progress 2
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              padding: "10px",
              background: "#F6F6F6",
              borderRadius: "4px",
              borderTop: "2px solid #24459C",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
            >
              Dish Washing Machine not working
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  padding: "4px",
                  background: "#e2e5ee",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Maintenance
              </Typography>
              <div class="progress-bar">
                <progress
                  value="75"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: "0", width: "0" }}
                >
                  10%
                </progress>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              background: "#F6F6F6",
              borderRadius: "4px",
              borderTop: "2px solid #24459C",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
            >
              Plate Washing Machine Fixing{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  padding: "4px",
                  background: "#e2e5ee",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Maintenance
              </Typography>
              <div class="progress-bar">
                <progress
                  value="75"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: "0", width: "0" }}
                >
                  10%
                </progress>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "10px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "23%",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#5D6396" }}
        >
          Ongoing 1
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              padding: "10px",
              background: "#F6F6F6",
              borderRadius: "4px",
              borderTop: "2px solid #24459C",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
            >
              Plate Washing Machine Fixing{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  padding: "4px",
                  background: "#e2e5ee",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Maintenance
              </Typography>
              <div className="progress-bar">
                <progress
                  value="75"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: "0", width: "0" }}
                >
                  10%
                </progress>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "10px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "23%",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#5D6396" }}
        >
          Completed 1
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              padding: "10px",
              background: "#F6F6F6",
              borderRadius: "4px",
              borderTop: "2px solid #24459C",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
            >
              Plate Washing Machine Fixing
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  padding: "4px",
                  background: "#e2e5ee",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Maintenance
              </Typography>
              <div class="progress-bar">
                <progress
                  value="75"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: "0", width: "0" }}
                >
                  10%
                </progress>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "10px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "23%",
          borderRadius: "4px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#5D6396" }}
        >
          Cancelled 1
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              padding: "10px",
              background: "#F6F6F6",
              borderRadius: "4px",
              borderTop: "2px solid #24459C",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "500" }}
            >
              Plate Washing Machine Fixing
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  padding: "4px",
                  background: "#e2e5ee",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Maintenance
              </Typography>
              <div class="progress-bar">
                <progress
                  value="75"
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: "0", width: "0" }}
                >
                  10%
                </progress>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Status;
