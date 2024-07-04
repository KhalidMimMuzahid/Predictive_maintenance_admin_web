import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Review = ({ steps, setSteps }) => {
  return (
    <Box sx={{ marginTop: "32px" }}>
      <Typography sx={{ textAlign: "center", marginY: "124px" }}>
        Review Is Coming...
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "14px",
          marginTop: "32px",
        }}
      >
        <Button
          onClick={() => setSteps("add_photo")}
          sx={{
            textTransform: "none",
            background: "#EBEEF3",
            color: "#868DAA",
            fontWeight: "600",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
          }}
        >
          Previous
        </Button>
        <Button
          sx={{
            textTransform: "none",
            background: "#24459C",
            color: "#FFFFFF",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
            fontWeight: "600",
          }}
        >
          Publish
        </Button>
      </Box>
    </Box>
  );
};

export default Review;
