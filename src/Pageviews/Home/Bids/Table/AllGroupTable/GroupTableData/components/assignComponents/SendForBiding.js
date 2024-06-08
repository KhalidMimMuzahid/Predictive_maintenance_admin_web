import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import SendForBidingModal from "../../../modal/AssignServiceProviderModal/component/SendForBidingModal";

const SendForBiding = ({ biddingDate, _id, refetchForGetALlResGroup }) => {
  const [sendForBidding, setSendForBidding] = useState(false);
  return (
    <Box>
      {sendForBidding && (
        <SendForBidingModal
          sendForBidding={sendForBidding}
          setSendForBidding={setSendForBidding}
          biddingDate={biddingDate}
          _id={_id}
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      )}
      <Button
        onClick={() => setSendForBidding(!sendForBidding)}
        sx={{
          textTransform: "none",
          background: "#F3FAE9",
          "&:hover": {
            background: "#F3FAE9",
          },
          borderRadius: "20px",
          color: "#7FC008",
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
