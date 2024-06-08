import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateInvoiceModal from "../modal/CreateInvoiceModal";

const InvoiceComponent = ({ reservation }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <Box>
      {isCreateModalOpen && (
        <CreateInvoiceModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
          reservation={reservation}
        />
      )}
      {reservation?.status === "pending" ? (
        <Button
          onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
          sx={{ color: "#2196F3", fontWeight: "600", textTransform: "none" }}
        >
          Create
        </Button>
      ) : (
        "-"
      )}
    </Box>
  );
};

export default InvoiceComponent;
