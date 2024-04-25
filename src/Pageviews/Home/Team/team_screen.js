import { Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const TeamScreen = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Tea,
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Team
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button sx={{ background: "white", color: "black" }}>
            <Download sx={{ marginRight: "6px" }} />
            Export
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      ></Box>
    </Box>
  );
};

export default TeamScreen;
