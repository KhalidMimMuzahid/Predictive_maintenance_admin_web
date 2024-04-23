import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const OverView = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Typography sx={{ fontSize: "24px", marginBottom: "24px" }}>
        Overview
      </Typography>
      <Grid container sx={{ display: "flex", gap: "24px", width: "100%" }}>
        <Grid
          item
          sx={{
            width: "30%",
            background: "#F1F4FB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 102px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#3CBB8F", fontSize: "40px", fontWeight: "700" }}
          >
            7,890
          </Typography>
          <Typography
            sx={{ color: "#243972", fontSize: "18px", fontWeight: "800" }}
          >
            Total Created Invoice
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "30%",
            background: "#F1F4FB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 102px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#4B68B1", fontSize: "40px", fontWeight: "700" }}
          >
            7,890
          </Typography>
          <Typography
            sx={{ color: "#243972", fontSize: "18px", fontWeight: "800" }}
          >
            Total Customer Invoice
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "30%",
            background: "#F1F4FB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 102px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#26C1C9", fontSize: "40px", fontWeight: "700" }}
          >
            7,890
          </Typography>
          <Typography
            sx={{ color: "#243972", fontSize: "18px", fontWeight: "800" }}
          >
            Total Service Provider Invoice
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "30%",
            background: "#F1F4FB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 102px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#FB7181", fontSize: "40px", fontWeight: "700" }}
          >
            7,890
          </Typography>
          <Typography
            sx={{ color: "#243972", fontSize: "18px", fontWeight: "800" }}
          >
            Due Invoice
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "30%",
            background: "#F1F4FB",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 102px",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ color: "#89C24D", fontSize: "40px", fontWeight: "700" }}
          >
            7,890
          </Typography>
          <Typography
            sx={{ color: "#243972", fontSize: "18px", fontWeight: "800" }}
          >
            Paid Invoice
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverView;
