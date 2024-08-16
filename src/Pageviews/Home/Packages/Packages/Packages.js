import { DeleteOutline } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import EditPackageModal from "../modal/EditPackageModal";
import DeleteModal from "../modal/DeleteModal";

const Packages = () => {
  const [editPackageModal, setEditPackageModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dummy = [1, 2, 3, 4, 5, 6, 1];
  return (
    <Box
      sx={{ marginTop: "28px", display: "flex", gap: "24px", flexWrap: "wrap" }}
    >
      {editPackageModal && (
        <EditPackageModal
          editPackageModal={editPackageModal}
          setEditPackageModal={setEditPackageModal}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
      {dummy?.map((d) => (
        <Box
          sx={{
            padding: "20px",
            background: "white",
            borderRadius: "16px",
            width: "330px",
            height: "480px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  border: "1px solid #24459C",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  color: "#24459C",
                  fontWeight: "600",
                }}
              >
                Monthly
              </Typography>
            </Box>
            <Button
              onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
              sx={{ position: "absolute", right: 18, top: 14 }}
            >
              <DeleteOutline sx={{ color: "red", fontSize: "28px" }} />
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "16px",
                gap: "4px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>BEST CHOICE</Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700", color: "#090A0A" }}
              >
                Basic Package
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  color: "#090A0A",
                  fontWeight: "700",
                }}
              >
                ¥ 5000
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>30 days</Typography>
            </Box>
            <ul
              style={{
                listStyleType: "disc",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "24px",
                padding: "4px",
              }}
            >
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; The number of machines:{" "}
                <span style={{ fontWeight: "600" }}>01</span>
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; The number of Sensor Modules:{" "}
                <span style={{ fontWeight: "600" }}>01</span>
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; Only Applicable for Sensor:{" "}
                <span style={{ fontWeight: "600" }}>Module 01</span>
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; Price 50,000 yen/Year
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; 24/7 Data visualization 
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; Free monthly maintenance
              </li>
              <li sx={{ color: "#090A0A", fontSize: "14px" }}>
                &#8226; Recommended for Dish washing Machine.
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => setEditPackageModal(!editPackageModal)}
              sx={{
                background: "#24459C",
                width: "220px",
                borderRadius: "48px",
                color: "white",
                textTransform: "none",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Packages;
