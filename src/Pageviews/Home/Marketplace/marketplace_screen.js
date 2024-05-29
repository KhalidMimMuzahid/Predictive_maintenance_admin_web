import { Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Main from "./LeftSide/LeftSideMain";
import LeftSideMain from "./LeftSide/LeftSideMain";
import RightSideMain from "./RightSide/RightSideMain";

const ShopScreen = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Marketplace
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Marketplace
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "14px" }}>
          <Button
            // onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
            startIcon={<Download />}
          >
            Import
          </Button>
          <Button
            // onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "#D7E0E7",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "0px 32px",
              height: "34px",
              fontWeight: "600",
            }}
          >
            Category
          </Button>
          <Button
            sx={{
              backgroundColor: "#24459c",
              textTransform: "none",
              color: "white",
              borderRadius: "8px",
              padding: "6px 32px",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Add Product
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "10px",
          display: "flex",
          padding: "36px",
        }}
      >
        <LeftSideMain />

        <RightSideMain />
      </Box>
    </Box>
  );
};

export default ShopScreen;
