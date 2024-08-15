import { Upload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import OverView from "./OverView";
import Comparison from "./Comparison";
import InvoiceRequestTable from "./InvoiceRequestTable";
import CreateInvoiceModal from "./modal/CreateInvoiceModal";

const InvoiceScreen = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isRootInvoiceScreen, setIsRootInvoiceScreen] = useState(true);
  return (
    <Box sx={{ padding: "40px" }}>
      {isCreateModalOpen && (
        <CreateInvoiceModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Invoice
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Invoice{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button
            sx={{
              background: "white",
              color: "black",
              textTransform: "none",
              padding: "4px 20px",
            }}
          >
            <Upload sx={{ marginRight: "6px" }} />
            Import
          </Button>
          <Button
            onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
            sx={{
              background: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              color: "#E6E8EB",
              fontSize: "14px",
              fontWeight: "600  ",
              marginLeft: "16px",
              textTransform: "none",
              padding: "4px 20px",
            }}
          >
            Create Invoice
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
        {isRootInvoiceScreen && (
          <>
            <OverView />
            <Comparison />
          </>
        )}
        <InvoiceRequestTable
          isRootInvoiceScreen={isRootInvoiceScreen}
          setIsRootInvoiceScreen={setIsRootInvoiceScreen}
        />
      </Box>
    </Box>
  );
};

export default InvoiceScreen;
