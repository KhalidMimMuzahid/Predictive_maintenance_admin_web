import { Box, Button, Typography } from "@mui/material";
import React from "react";
import topSellingItem from "../../../../../../Assets/Home/feed/topSellingItem.png";

const TopSelling = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
          Top Selling
        </Typography>
        <Button
          sx={{
            textTransform: "none",
          }}
        >
          See More
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box sx={{ marginTop: "8px", display: "flex", gap: "12px" }}>
        <Box
          sx={{
            border: "0.5px solid #E9E9F3",
            padding: "0px 12px 12px 12px",
            position: "relative",
            overflow: "hidden",
            width: "150px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Box sx={{ background: "#FAFAFA", padding: "6px 20px" }}>
              <img
                src={topSellingItem}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              background: "#476ED3",
              width: "76px",
              height: "26px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              right: -5,
              top: 0,
            }}
          >
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              24% Off
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              Nike Air Max
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "600", color: "#24459C" }}
              >
                ¥299,43
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>¥534,33</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            border: "0.5px solid #E9E9F3",
            padding: "0px 12px 12px 12px",
            position: "relative",
            overflow: "hidden",
            width: "150px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Box sx={{ background: "#FAFAFA", padding: "6px 20px" }}>
              <img
                src={topSellingItem}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              background: "#476ED3",
              width: "76px",
              height: "26px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              right: -5,
              top: 0,
            }}
          >
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              24% Off
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              Nike Air Max
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "600", color: "#24459C" }}
              >
                ¥299,43
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>¥534,33</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            border: "0.5px solid #E9E9F3",
            padding: "0px 12px 12px 12px",
            position: "relative",
            overflow: "hidden",
            width: "150px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: "16px" }}>
            <Box sx={{ background: "#FAFAFA", padding: "6px 20px" }}>
              <img
                src={topSellingItem}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              background: "#476ED3",
              width: "76px",
              height: "26px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              right: -5,
              top: 0,
            }}
          >
            <Typography sx={{ color: "white", fontSize: "14px" }}>
              24% Off
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              Nike Air Max
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: "600", color: "#24459C" }}
              >
                ¥299,43
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>¥534,33</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSelling;
