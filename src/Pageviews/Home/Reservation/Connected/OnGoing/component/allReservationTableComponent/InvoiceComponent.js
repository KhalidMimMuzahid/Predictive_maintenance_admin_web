import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateInvoiceModal from "../../../../../Invoice/modal/CreateInvoiceModal";

const InvoiceComponent = ({ props }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // This Modal Is Coming From Invoice Route > Create Invoice Button
  return (
    <>
      {isCreateModalOpen && (
        <CreateInvoiceModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
      )}
      <Box sx={{ fontSize: "12px" }}>
        {props?.row?.invoice ? (
          <Typography>props?.row?.invoice</Typography>
        ) : (
          <Box>
            <Button
              onClick={() => setIsCreateModalOpen(!isCreateModalOpen)}
              sx={{
                textTransform: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: "#2196F3",
              }}
            >
              Create
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default InvoiceComponent;
