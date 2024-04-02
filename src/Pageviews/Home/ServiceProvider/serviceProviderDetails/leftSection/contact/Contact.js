import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import { Box, Typography } from "@mui/material";
const Contact = ({ serviceProviderDetails }) => {
  console.log(serviceProviderDetails);
  return (
    <Box sx={{ border: "solid 1px #F2F2F2", borderRadius: "4px" }}>
      <Box sx={{ color: "#000000", fontWeight: "500", padding: "12px" }}>
        Contact
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box
        sx={{
          padding: "12px 32px",
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            height: "56px",
            padding: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CallIcon
            sx={{
              background: "#A1A9E1",
              padding: "8px",
              borderRadius: "100%",
              color: "#4454C3",
              mr: "6px",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "#728096" }}
            >
              Phone
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", color: "#424E79" }}
            >
              01832302170
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "56px",
            padding: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EmailOutlinedIcon
            sx={{
              background: "#A1A9E1",
              padding: "8px",
              borderRadius: "100%",
              color: "#4454C3",
              mr: "6px",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "#728096" }}
            >
              Email
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", color: "#424E79" }}
            >
              antt@.dev.gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "56px",
            padding: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DnsOutlinedIcon
            sx={{
              background: "#A1A9E1",
              padding: "8px",
              borderRadius: "100%",
              color: "#4454C3",
              mr: "6px",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", color: "#728096" }}
            >
              Phone
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", color: "#424E79" }}
            >
              01832302170
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
