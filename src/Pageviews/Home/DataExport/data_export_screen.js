import { Box, Typography } from "@mui/material";
import dataExportImage from "../../../Assets/Component/data_export.png";

const DataExportScreen = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Data Export
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Data Export
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          padding: "20px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        <Box
          sx={{
            background: "#F4F4F4",
            borderRadius: "100%",
            width: "175px",
            height: "175px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={dataExportImage} alt="" />
        </Box>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "600", color: "#25213B" }}
        >
          Coming Soon!
        </Typography>
      </Box>
    </Box>
  );
};

export default DataExportScreen;
