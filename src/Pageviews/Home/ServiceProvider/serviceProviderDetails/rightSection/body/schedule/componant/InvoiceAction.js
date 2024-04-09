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
        <Box>
          {props?.row?.invoice === "Create" && (
            <Button
              onClick={() => {
                setViewCreateInvoice(!viewCreateInvoice);
              }}
              sx={{ color: "#2196F3" }}
            >
              {props?.row?.invoice}
            </Button>
          )}
          {props?.row?.invoice === "Send" && (
            <Button sx={{ color: "#14B8A6" }}>{props?.row?.invoice}</Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default InvoiceAction;
