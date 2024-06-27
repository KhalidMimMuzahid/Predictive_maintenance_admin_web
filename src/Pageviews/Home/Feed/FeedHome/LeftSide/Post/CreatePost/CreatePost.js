import React, { useState } from "react";
import addImage from "../../../../../../../Assets/Home/feed/addImage.png";
import userPhoto from "../../../../../../../Assets/Home/customer/chat_girl.png";
import { Box, Button } from "@mui/material";
import CreatePostModal from "./Modal/CreatePostModal";

const CreatePost = () => {
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false);
  return (
    <Box>
      {createPostModalOpen && (
        <CreatePostModal
          createPostModalOpen={createPostModalOpen}
          setCreatePostModalOpen={setCreatePostModalOpen}
        />
      )}
      <Button
        onClick={() => setCreatePostModalOpen(!createPostModalOpen)}
        sx={{
          width: "100%",
          background: "white",
          borderRadius: "4px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img src={userPhoto} alt="" />
        <input
          type="text"
          placeholder="Konbanwa, What’s happening?"
          style={{
            width: "100%",
            borderRadius: "50px",
            padding: "10px 24px",
            border: "0.5px solid #CACDCC",
            fontSize: "14px",
            color: "#CACDCC",
          }}
        />
        <img src={addImage} alt="" style={{ width: "20px", height: "20px" }} />
      </Button>
    </Box>
  );
};

export default CreatePost;
