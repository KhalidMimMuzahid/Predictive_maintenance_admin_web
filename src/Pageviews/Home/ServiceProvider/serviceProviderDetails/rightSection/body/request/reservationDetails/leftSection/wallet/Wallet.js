import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import balanceIcon from "../../../../../../../../../../Assets/Home/customer/customer_wallet__balance.png";
import pointsIcon from "../../../../../../../../../../Assets/Home/customer/customer_wallet__points.png";

const Wallet = ({ wallet }) => {
  return (
    <Box
      sx={{
        border: "1px solid #F2F2F2",
        borderRadius: "4px",
        padding: "16px 12px 16px 12px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          borderBottom: "1px solid #F2F2F2",
          fontSize: "18px",
          fontWeight: "500",
          paddingBottom: "8px",
        }}
      >
        Wallet
      </Typography>

      <Box sx={{ padding: "8px" }}>
        <List sx={{ padding: "12px" }}>
          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 12px 20px 12px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "#7B7B7B", fontSize: "12px" }}
                >
                  Showa Balance
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: "#24459C", fontSize: "16px", fontWeight: "600" }}
                >
                  ¥50,000.50
                </Typography>
              </Box>
              <img
                src={balanceIcon}
                alt=""
                style={{ width: "36px", height: "25px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 12px 20px 12px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "#7B7B7B", fontSize: "12px" }}
                >
                  Showa Point
                </Typography>
                <Typography
                  variant="p"
                  sx={{ color: "#24459C", fontSize: "16px", fontWeight: "600" }}
                >
                  50,000.50
                </Typography>
              </Box>
              <img
                src={pointsIcon}
                alt=""
                style={{ width: "36px", height: "25px" }}
              />
            </Box>
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Wallet;
