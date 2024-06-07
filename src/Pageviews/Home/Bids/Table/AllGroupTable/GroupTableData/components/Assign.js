import { Button } from "@mui/material";
import React from "react";

const Assign = ({ resGroup }) => {
  // Send for bidding:
  // If for this  res-req-group, bid starting date has not been set yet
  //  Bid-ongoing:
  // If now (current time) is in the middle of time range between bid starting and ending time
  // Assign Vendor: If the bidding ending date has finished but no bidding winner has been selected yet.
  // Company Name (Button):
  // If it has already been assigned to any company, after clicking it we are redirected to the user to the company details screen.

  return (
    <Button
      sx={{
        textTransform: "none",
        padding: "2px 12px",
        borderRadius: "20px",
        background: "#D9E3FF",
      }}
    >
      Send for bid
    </Button>
  );
};

export default Assign;
