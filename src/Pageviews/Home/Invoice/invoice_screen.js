import { Upload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const InvoiceScreen = () => {
  return (
    <Box sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Invoice
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard/ </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Invoice{" "}
            </Typography>
          </Box>
        </Box>
        <Box sx={{}}>
          <Button sx={{ background: "white", color: "black" }}>
            <Upload sx={{ marginRight: "6px" }} />
            Import
          </Button>
          <Button
            sx={{
              background: "#24459C",
              "&:hover": {
                background: "#24459C",
              },
              color: "#E6E8EB",
              fontSize: "14px",
              fontWeight: "600  ",
              marginLeft: "16px",
            }}
          >
            Create Invoice
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InvoiceScreen;
