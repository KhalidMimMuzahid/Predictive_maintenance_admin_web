import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextApi/appProvider";
import { downloadTableData } from "../../../Utils/downloadTableData";
import { Download, Upload } from "@mui/icons-material";
import AddServiceProviderModal from "./component/AddServiceProviderModal";

const ServiceProviderScreen = () => {
  const [isRootServiceProviderPage, setIsRootServiceProviderPage] =
    useState(true);
  const [addServiceProviderModalOpen, setAddServiceProviderModalOpen] =
    useState(false);
  const { downloadData, setDownloadData } = useContext(AppContext);

  return (
    <Box sx={{ padding: "40px" }}>
      {addServiceProviderModalOpen && (
        <AddServiceProviderModal
          addServiceProviderModalOpen={addServiceProviderModalOpen}
          setAddServiceProviderModalOpen={setAddServiceProviderModalOpen}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Service Provider
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Service Provider
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "600",
            }}
            startIcon={<Upload />}
          >
            Export
          </Button>
          <Button
            onClick={() =>
              setAddServiceProviderModalOpen(!addServiceProviderModalOpen)
            }
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "500",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Add Service Provider
          </Button>
        </Box>
      </Box>
      <Box>
        <Outlet
          context={[isRootServiceProviderPage, setIsRootServiceProviderPage]}
        />
      </Box>
    </Box>
  );
};

export default ServiceProviderScreen;
