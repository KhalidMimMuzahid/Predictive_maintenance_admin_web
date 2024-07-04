import {
  DateRange,
  Money,
  MoneyOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Statics = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
        >
          Statics
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#868DAA",
            fontWeight: "600",
            gap: "4px",
          }}
        >
          <DateRange /> Last 30 day ⬇️
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "48px",
        }}
      >
        <Box
          sx={{
            background: "#FCF9EF",
            borderRadius: "10px",
            padding: "28px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <ShoppingCartOutlined
            sx={{ color: "#F68B1F", marginRight: "20px" }}
          />
          <Box>
            <Typography
              sx={{ color: "#868DAA", fontWeight: "400", fontSize: "16px" }}
            >
              Orders
            </Typography>
            <Typography
              sx={{ color: "#4D5983", fontWeight: "600", fontSize: "24px" }}
            >
              39,804
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#20C18D",
              fontWeight: "400",
              fontSize: "16px",
              marginLeft: "8px",
            }}
          >
            ⬆️ 13.78%
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#FCF9EF",
            borderRadius: "10px",
            padding: "28px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <MoneyOutlined sx={{ color: "#F68B1F", marginRight: "20px" }} />
          <Box>
            <Typography
              sx={{ color: "#868DAA", fontWeight: "400", fontSize: "16px" }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{ color: "#4D5983", fontWeight: "600", fontSize: "24px" }}
            >
              39,804
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#20C18D",
              fontWeight: "400",
              fontSize: "16px",
              marginLeft: "8px",
            }}
          >
            ⬆️ 13.78%
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#FCF9EF",
            borderRadius: "10px",
            padding: "28px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <ShoppingCartOutlined
            sx={{
              color: "#F68B1F",
              marginRight: "20px",
              background: "white",
            }}
          />
          <Box>
            <Typography
              sx={{ color: "#868DAA", fontWeight: "400", fontSize: "16px" }}
            >
              Earnings
            </Typography>
            <Typography
              sx={{ color: "#4D5983", fontWeight: "600", fontSize: "24px" }}
            >
              39,804
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#20C18D",
              fontWeight: "400",
              fontSize: "16px",
              marginLeft: "8px",
            }}
          >
            ⬆️ 13.78%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Statics;
