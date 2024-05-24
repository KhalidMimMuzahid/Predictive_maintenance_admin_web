import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateInvoiceModal from "../modal/CreateInvoiceModal";
import { StyledMenu } from "../../../../../../Customer/styleComponents";

const InvoiceAction = ({ props }) => {
  const [viewCreateInvoice, setViewCreateInvoice] = useState(false);

  return (
    <>
      {viewCreateInvoice && (
        <CreateInvoiceModal
          viewCreateInvoice={viewCreateInvoice}
          setViewCreateInvoice={setViewCreateInvoice}
          props={props}
        />
      )}
      <Box>
        <Button
          sx={{ color: "#2196F3", textTransform: "none", fontWeight: "600" }}
          onClick={() => {
            setViewCreateInvoice(!viewCreateInvoice);
          }}
        >
          Create
        </Button>
      </Box>
    </>
  );
};

export default InvoiceAction;
