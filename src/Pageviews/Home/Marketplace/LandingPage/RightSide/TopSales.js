import { Box, Typography } from "@mui/material";
import React from "react";
import stradivarius from "../../../../../Assets/Home/marketplace/stardivarius.png";
import lego from "../../../../../Assets/Home/marketplace/lego.png";
import dell from "../../../../../Assets/Home/marketplace/dell.png";

const TopSales = () => {
  return (
    <Box sx={{ marginTop: "48px" }}>
      <Box>
        <Typography
          sx={{ color: "#4D5983", fontSize: "20px", fontWeight: "700" }}
        >
          Top Sales
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <img
            src={stradivarius}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#4D5983" }}
            >
              Stradivarius
            </Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Typography sx={{ color: "#868DAA" }}>39,804</Typography>
              <Typography sx={{ color: "#20C18D" }}>⬆️ 13.78%</Typography>
            </Box>
          </Box>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <img src={lego} alt="" style={{ width: "50px", height: "50px" }} />
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#4D5983" }}
            >
              Stradivarius
            </Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Typography sx={{ color: "#868DAA" }}>39,804</Typography>
              <Typography sx={{ color: "#20C18D" }}>⬆️ 13.78%</Typography>
            </Box>
          </Box>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <img src={dell} alt="" style={{ width: "50px", height: "50px" }} />
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#4D5983" }}
            >
              Stradivarius
            </Typography>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Typography sx={{ color: "#868DAA" }}>39,804</Typography>
              <Typography sx={{ color: "#20C18D" }}>⬆️ 13.78%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSales;
