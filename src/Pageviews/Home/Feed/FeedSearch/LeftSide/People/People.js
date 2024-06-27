import { Box, Button, Typography } from "@mui/material";
import React from "react";
import userPhoto from "../../../../../../Assets/Home/customer/chat_girl.png";
import { PeopleAltOutlined } from "@mui/icons-material";

const People = () => {
  const people = [
    {
      name: "ABC",
      location: "Pekua, Cox's Bazar",
      photoUrl: userPhoto,
    },
    {
      name: "ABC",
      location: "Pekua, Cox's Bazar",
      photoUrl: userPhoto,
    },
    {
      name: "ABC",
      location: "Pekua, Cox's Bazar",
      photoUrl: userPhoto,
    },
    {
      name: "ABC",
      location: "Pekua, Cox's Bazar",
      photoUrl: userPhoto,
    },
  ];
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
        People
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {people?.map((ppl) => (
          <Box
            sx={{
              border: "0.5px solid #CCCCCC",
              borderRadius: "5px",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src={ppl?.photoUrl} alt="" />
              <Box>
                <Typography sx={{ color: "#030303", fontWeight: "600" }}>
                  {ppl?.name}
                </Typography>
                <Typography>{ppl?.location}</Typography>
              </Box>
            </Box>
            <Button
              sx={{
                textTransform: "none",
                background: "#C3D4FF",
                width: "150px",
                height: "36px",
                borderRadius: "50px",
              }}
            >
              <PeopleAltOutlined />
              Follow
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default People;
