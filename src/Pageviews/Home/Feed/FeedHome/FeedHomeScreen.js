import { Box, Button, Typography } from "@mui/material";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import { useState } from "react";
import PostAddModal from "./modal/PostAddModal";

const FeedHomeScreen = () => {
  const [postAddModalOpen, setPostAddModalOpen] = useState(false);
  return (
    <>
      {postAddModalOpen && (
        <PostAddModal
          setPostAddModalOpen={setPostAddModalOpen}
          postAddModalOpen={postAddModalOpen}
        />
      )}
      <Box sx={{ padding: "40px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Feed
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Typography>Dashboard / </Typography>
              <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
                Feed
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button
              onClick={() => setPostAddModalOpen(!postAddModalOpen)}
              sx={{
                backgroundColor: "#24459C",
                "&:hover": {
                  background: "#24459C",
                },
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                padding: "6px 32px",
                fontWeight: "600",
              }}
            >
              Post Ad
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            justifyContent: "space-between",
            marginTop: "32px",
          }}
        >
          <LeftSide />
          <RightSide />
        </Box>
      </Box>
    </>
  );
};

export default FeedHomeScreen;
