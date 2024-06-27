import { Box, Button, Typography } from "@mui/material";
import React from "react";
import userPhoto from "../../../../../../Assets/Home/customer/chat_girl.png";
import { PeopleAltOutlined } from "@mui/icons-material";

const Post = () => {
  return (
    <Box sx={{ background: "white", padding: "20px" }}>
      <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>Post</Typography>
      <Box>
        <Box sx={{ borderRadius: "5px", padding: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src={userPhoto} alt="" />
            <Box>
              <Typography sx={{ color: "#030303", fontWeight: "600" }}>
                Fujiwara Nori
              </Typography>
              <Typography sx={{ display: "flex", gap: "4px" }}>
                2h ago <PeopleAltOutlined />
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography>
              Clothes Come Out Ripped, Not starting, Machine is noisy, Excessive
              vibrations, Making noise when draining, Water leaking, Display
              showing error on start-up, Not draining at all, Drainage problem
            </Typography>
          </Box>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "40px",
          }}
        >
          <Button
            sx={{ textTransform: "none", color: "#747474", fontSize: "12px" }}
          >
            Likes
          </Button>
          <Button
            sx={{ textTransform: "none", color: "#747474", fontSize: "12px" }}
          >
            Comments
          </Button>
          <Button
            sx={{ textTransform: "none", color: "#747474", fontSize: "12px" }}
          >
            View
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
