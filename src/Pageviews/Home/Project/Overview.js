import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Overview = () => {
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Typography sx={{ fontSize: "24px", marginBottom: "24px" }}>
        Overview
      </Typography>
      <Grid container sx={{ display: "flex", gap: "24px", width: "100%" }}>
        <Grid
          item
          sx={{
            width: "23%",
            height: "125px",
            background: "#24459C",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "700" }}
          >
            14
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
          >
            In Progress Task
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "23%",
            height: "125px",
            background: "#9C8563",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "700" }}
          >
            2
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
          >
            Ongoing Task
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "23%",
            height: "125px",
            background: "#20C18D",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "700" }}
          >
            540
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
          >
            Completed Task
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            width: "23%",
            height: "125px",
            background: "#FB7181",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", fontWeight: "700" }}
          >
            6
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
          >
            Canceled Task
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
