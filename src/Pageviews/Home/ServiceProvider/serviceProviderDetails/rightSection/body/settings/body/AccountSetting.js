import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";

const AccountSetting = () => {
  return (
    <Box sx={{ padding: "12px 60px" }}>
      {" "}
      <Box sx={{ paddingY: "12px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "16px 24px",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
          >
            Bank Info
          </Typography>

          <Button>
            <img src={editIcon} alt="" />
          </Button>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            padding: "16px 24px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "14px",
              width: "15%",
            }}
          >
            Password
          </Typography>

          <Button
            sx={{
              color: "#24459C",
              border: "1px solid #24459c",
              textTransform: "none",
              borderRadius: "20px",
              padding: "2px 24px",
              fontWeight: "500",
              background: "none",
            }}
          >
            Reset Password
          </Button>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>
    </Box>
  );
};

export default AccountSetting;
