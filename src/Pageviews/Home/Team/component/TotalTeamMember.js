import { Box, Typography } from "@mui/material";
import React from "react";

const TotalTeamMember = ({ props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        position: "absolute",
      }}
    >
      {props?.members?.map((member, i) => (
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
