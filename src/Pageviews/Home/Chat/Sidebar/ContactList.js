import { MoreVert, PermContactCalendarOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ContactList = ({ users }) => {
  return (
    <Box
      sx={{ marginTop: "24px", boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Box
            style={{
              color: "white",
              background: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              border: "none",
              borderRadius: "100%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <PermContactCalendarOutlined />
          </Box>
          <Button
            sx={{
              color: "#56638D",
              fontSize: "20px",
              fontWeight: "600",
              textTransform: "none",
            }}
          >
            Add New Contact
          </Button>
        </Box>
      </Box>
      <Box>
        {users?.map((user, i) => (
          <Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px",
                display: "flex",
              }}
            >
              <Box sx={{ width: "20%" }}>
                <img
                  src={user?.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                  }}
                  alt="User"
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography
                  sx={{
                    color: "#56638D",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#56638D",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {user?.gmail}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button>
                  <MoreVert />
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default ContactList;
