import { Box, Button, Typography } from "@mui/material";
import React from "react";
import userPhoto from "../../../../../../Assets/Home/customer/chat_girl.png";
import postImage from "../../../../../../Assets/Home/feed/postImage.png";

import {
  ChatBubbleOutlineOutlined,
  FolderOutlined,
  PeopleAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost/CreatePost";
import { useGetFeedPostsQuery } from "../../../../../../features/feed/feedSlice";

const Post = () => {
  const { data: feedPost } = useGetFeedPostsQuery();
  const { user } = useSelector((state) => state.auth);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <CreatePost />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Post 1 */}
        <Box sx={{ background: "white", borderRadius: "4px", padding: "20px" }}>
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
                Clothes Come Out Ripped, Not starting, Machine is noisy,
                Excessive vibrations, Making noise when draining, Water leaking,
                Display showing error on start-up, Not draining at all, Drainage
                problem
              </Typography>
            </Box>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          <img src={postImage} className="post_image" alt="" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "40px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <ThumbUpAltOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              10 Likes
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <ChatBubbleOutlineOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              4 Comments
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <FolderOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              156 View
            </Button>
          </Box>
        </Box>
        {/* Post 2 */}
        <Box sx={{ background: "white", borderRadius: "4px", padding: "20px" }}>
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
                Clothes Come Out Ripped, Not starting, Machine is noisy,
                Excessive vibrations, Making noise when draining, Water leaking,
                Display showing error on start-up, Not draining at all, Drainage
                problem
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
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <ThumbUpAltOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              2 Likes
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <ChatBubbleOutlineOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              0 Comments
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "#747474",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <FolderOutlined
                sx={{
                  textTransform: "none",
                  color: "#747474",
                  fontSize: "16px",
                }}
              />
              27 View
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
