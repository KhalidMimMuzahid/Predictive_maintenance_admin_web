import { MoreVert, PermContactCalendarOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddNewContactModal from "./modal/AddNewContactModal";

const ContactList = ({ users, setChatOrContact }) => {
  const [isAddNewContactModalOpen, setIsAddNewContactModalOpen] =
    useState(false);

  return (
    <>
      {isAddNewContactModalOpen && (
        <AddNewContactModal
          isAddNewContactModalOpen={isAddNewContactModalOpen}
          setIsAddNewContactModalOpen={setIsAddNewContactModalOpen}
          setChatOrContact={setChatOrContact}
        />
      )}
      <Box
        sx={{
          marginTop: "24px",
          boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.1)",
          height: "630px",
          overflow: "scroll",
        }}
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
              onClick={() =>
                setIsAddNewContactModalOpen(!isAddNewContactModalOpen)
              }
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
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          {users?.map((user, i) => (
            <Box>
              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                }}
              >
                <Button
                  sx={{
                    padding: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%",
                  }}
                >
                  <img
                    src={user?.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                    }}
                    alt="User"
                  />
                  <Box sx={{ width: "70%" }}>
                    <Typography
                      sx={{
                        color: "#56638D",
                        fontSize: "18px",
                        fontWeight: "600",
                        textAlign: "start",
                      }}
                    >
                      {user?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#56638D",
                        fontSize: "14px",
                        fontWeight: "500",
                        textAlign: "start",
                      }}
                    >
                      {user?.message}
                    </Typography>
                  </Box>
                </Button>
                <Button>
                  <MoreVert />
                </Button>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ContactList;
