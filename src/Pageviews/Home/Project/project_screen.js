import { Upload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Overview from "./Overview";
import Status from "./Status";

const ProjectScreen = () => {
  const [isCreateNewTaskOpen, setIsCreateNewTaskOpen] = useState(false);
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Project
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Project
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button sx={{ background: "white", color: "black" }}>
            <Upload sx={{ marginRight: "6px" }} />
            Import
          </Button>
          <Button
            onClick={() => setIsCreateNewTaskOpen(!isCreateNewTaskOpen)}
            sx={{
              background: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              color: "#E6E8EB",
              fontSize: "14px",
              fontWeight: "600  ",
              marginLeft: "16px",
            }}
          >
            ADD NEW TASK
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
      >
        <Overview />
        <Status />
      </Box>
    </Box>
  );
};

export default ProjectScreen;
