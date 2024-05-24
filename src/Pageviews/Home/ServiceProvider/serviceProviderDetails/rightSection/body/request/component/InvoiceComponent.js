import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateInvoiceModal from "../../schedule/modal/CreateInvoiceModal";

const InvoiceComponent = ({ props }) => {
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
        {/* {props?.invoiceNo === "Create" && (
        <Typography sx={{ color: "#2196F3" }}>{props?.invoiceNo}</Typography>
      )}
      {props?.invoiceNo === "Send" && (
        <Typography sx={{ color: "#14B8A6" }}>{props?.invoiceNo}</Typography>
      )}
      {props?.invoiceNo === "Ongoing" && (
        <Typography sx={{ color: "#7FC008" }}>{props?.invoiceNo}</Typography>
      )} */}
        {props?.reservationRequest?.invoice ? (
          <Button
            sx={{ color: "#14B8A6", textTransform: "none", fontWeight: "600" }}
          >
            Send
          </Button>
        ) : (
          <Button
            onClick={() => {
              setViewCreateInvoice(!viewCreateInvoice);
            }}
            sx={{ color: "#2196F3", textTransform: "none", fontWeight: "600" }}
          >
            Create
          </Button>
        )}
      </Box>
    </>
  );
};

export default InvoiceComponent;
