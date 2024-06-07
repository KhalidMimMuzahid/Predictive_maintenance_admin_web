import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import SendForBidingModal from "../../../modal/AssignServiceProviderModal/component/SendForBidingModal";

const SendForBiding = () => {
  const [sendForBidding, setSendForBidding] = useState(false);
  return (
    <Box>
      {sendForBidding && (
        <SendForBidingModal
          sendForBidding={sendForBidding}
          setSendForBidding={setSendForBidding}
        />
      )}
      <Button
        onClick={() => setSendForBidding(!sendForBidding)}
        sx={{
          textTransform: "none",
          background: "#D9E3FF",
          "&:hover": {
            background: "#D9E3FF",
          },
          borderRadius: "20px",
          color: "#24459C",
          fontWeight: "600",
          fontSize: "12px",
          width: "150px",
          padding: "2px",
        }}
      >
        Send For Biding
      </Button>
    </Box>
  );
};

export default SendForBiding;
