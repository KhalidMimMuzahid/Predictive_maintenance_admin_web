import { Box, Typography } from "@mui/material";
import React from "react";

const Message = ({ users }) => {
  return (
    <Box
      sx={{
        marginTop: "24px",
        boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      {users?.map((user, i) => (
        <Box>
          <Box
            sx={{
              padding: "16px",
              display: "flex",
            }}
          >
            <Box sx={{ width: "20%" }}>
              <img
                src={user?.image}
                style={{ width: "50px", height: "50px", borderRadius: "100%" }}
                alt="User"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{ color: "#56638D", fontSize: "20px", fontWeight: "600" }}
              >
                {user?.name}
              </Typography>
              <Typography
                sx={{ color: "#56638D", fontSize: "16px", fontWeight: "500" }}
              >
                {user?.message}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#D1D5DB",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "end",
                width: "30%",
              }}
            >
              {user?.active_time}
            </Typography>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        </Box>
      ))}
    </Box>
  );
};

export default Message;
