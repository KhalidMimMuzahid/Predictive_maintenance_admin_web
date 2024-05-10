import { Typography } from "@mui/material";
import React, { useState } from "react";
import ViewInvoiceModal from "../../../../commonComponent/modal/ViewInvoiceModal";

const InvoiceComponent = ({ props }) => {
  const [viewOpen, setViewOpen] = useState(false);
  return (
    <div>
      <ViewInvoiceModal
        viewOpen={viewOpen}
        setViewOpen={setViewOpen}
        invoice={props?.row?.invoice}
      />
      <Typography sx={{ fontSize: "12px" }}>
        {props?.row?.invoice ? "view invoice" : "No Invoice"}
      </Typography>
    </div>
  );
};

export default InvoiceComponent;
