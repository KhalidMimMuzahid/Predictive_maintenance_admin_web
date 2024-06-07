import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import AssignVendor from "./assignComponents/AssignVendor";
import SendForBidding from "./assignComponents/SendForBidding";
import BidOnGoing from "./assignComponents/BidOnGoing";
import CompanyName from "./assignComponents/CompanyName";
import SendForBiding from "./assignComponents/SendForBiding";

const Assign = ({ resGroup, refetchForGetALlResGroup }) => {
  console.log(resGroup);
  const [assignComponent, setAssignComponent] = useState(
    <SendForBiding
      biddingDate={resGroup?.biddingDate}
      _id={resGroup?._id}
      refetchForGetALlResGroup={refetchForGetALlResGroup}
    />
  );
  const bidStartingDate = new Date(resGroup?.biddingDate?.startDate) || null;
  const bidEndingDate = new Date(resGroup?.biddingDate?.endDate) || null;
  const currentDate = new Date();

  // Send for bidding:
  // If for this  res-req-group, bid starting date has not been set yet
  //  Bid-ongoing:
  // If now (current time) is in the middle of time range between bid starting and ending time
  // Assign Vendor: If the bidding ending date has finished but no bidding winner has been selected yet.
  // Company Name (Button):
  // If it has already been assigned to any company, after clicking it we are redirected to the user to the company details screen.
  useEffect(() => {
    if (resGroup?.postBiddingProcess?.serviceProviderCompany) {
      //Company Name
      // after clicking company wee gonna riderected to company details
      setAssignComponent(<CompanyName />);
    } else if (!bidStartingDate) {
      //Send for bidding
      // we need to set bidding start date : current time and optional to set end date

      setAssignComponent(<SendForBidding />);
    } else if (
      currentDate > bidStartingDate &&
      (currentDate < bidEndingDate || !bidEndingDate)
    ) {
      // Bid-ongoing

      setAssignComponent(<BidOnGoing />);
    } else if (currentDate > bidEndingDate && bidEndingDate) {
      //Assign Vendor
      setAssignComponent(<AssignVendor allBids={resGroup?.allBids} />);
    }
  }, []);

  return assignComponent;
};

export default Assign;
