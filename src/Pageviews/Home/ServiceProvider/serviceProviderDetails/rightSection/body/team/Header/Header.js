import { Box, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{
              //   borderBottom: "4px solid #24459C",
              color: "#24459C",
              fontSize: "18px",
              fontWeight: "500",
              paddingBottom: "20px",
            }}
          >
            All
          </Button>
          <Button
            sx={{
              borderBottom: "4px solid #24459C",
              color: "#24459C",
              fontSize: "18px",
              fontWeight: "500",
              paddingBottom: "20px",
            }}
          >
            Support Engineers
          </Button>
          <Button
            sx={{
              //   borderBottom: "4px solid #24459C",
              color: "#24459C",
              fontSize: "18px",
              fontWeight: "500",
              paddingBottom: "20px",
            }}
          >
            Others
          </Button>
        </Box>
        <Button
          sx={{
            background: "#24459C",
            color: "#E6E8EB",
            fontSize: "14px",
            fontWeight: "600",
            "&:hover": {
              background: "#24459C",
            },
          }}
        >
          Add Member
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Header;
