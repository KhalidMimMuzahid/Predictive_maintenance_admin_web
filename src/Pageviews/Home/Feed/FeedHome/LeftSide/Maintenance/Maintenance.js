import { PeopleAltOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import userPhoto from "../../../../../../Assets/Home/customer/chat_girl.png";

import React from "react";

const Maintenance = () => {
  return (
    <Box sx={{ background: "white", padding: "20px" }}>
      <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
        Maintenance
      </Typography>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;
