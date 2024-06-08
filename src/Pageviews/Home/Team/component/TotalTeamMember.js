import { Box, Typography } from "@mui/material";
import React from "react";

const TotalTeamMember = ({ props }) => {
  const teamMembers = [
    { _id: 1, photoUrl: "https://i.ibb.co/B3mqdt6/contact1.jpg" },
    { _id: 2, photoUrl: "https://i.ibb.co/FxRn4tM/contact2.jpg" },
    { _id: 3, photoUrl: "https://i.ibb.co/BsYtyRf/contact3.jpg" },
    { _id: 4, photoUrl: "https://i.ibb.co/WttXsXv/contact4.jpg" },
    { _id: 5, photoUrl: "https://i.ibb.co/T864x8W/contact5.jpg" },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        position: "absolute",
      }}
    >
      {teamMembers?.map((member, i) => (
        <img
          src={member?.photoUrl}
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "100%",
            border: "4px solid white",
            position: "relative",
            right: `${i * 10}px`,
          }}
          alt=""
        />
      ))}
    </Box>
  );
};

export default TotalTeamMember;
