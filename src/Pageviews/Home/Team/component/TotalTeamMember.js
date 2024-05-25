import { Box, Typography } from "@mui/material";
import React from "react";

const TotalTeamMember = ({ props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Typography
        variant="p"
        sx={{
          fontSize: "12px",
          color: "#25213B",
        }}
      >
        {/* {params?.row?.totalMember?.length} */}
      </Typography>
    </Box>
  );
};

export default TotalTeamMember;
