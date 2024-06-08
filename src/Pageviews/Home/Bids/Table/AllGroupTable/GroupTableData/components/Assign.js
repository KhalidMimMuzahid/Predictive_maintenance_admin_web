import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AssignVendor from "./assignComponents/AssignVendor";
import BidOnGoing from "./assignComponents/BidOnGoing";
import CompanyName from "./assignComponents/CompanyName";
import SendForBiding from "./assignComponents/SendForBiding";

const Assign = ({ resGroup, refetchForGetALlResGroup }) => {
  console.log({ resGroup });
  const [assignComponent, setAssignComponent] = useState(
    <div style={{ display: "flex", justifyContent: "center" }}>-</div>
  );
  // const bidStartingDate = resGroup?.biddingDate?.startDate
  //   ? new Date(resGroup?.biddingDate?.startDate)
  //   : null;
  // const bidEndingDate = resGroup?.biddingDate?.endDate
  //   ? new Date(resGroup?.biddingDate?.endDate)
  //   : null;
  const currentDate = new Date();
  // console.log({ bidStartingDate });
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
      setAssignComponent(
        <CompanyName
          serviceProviderCompany={
            resGroup?.postBiddingProcess?.serviceProviderCompany
          }
        />
      );
    } else if (
      !(
        resGroup?.biddingDate?.startDate
          ? new Date(resGroup?.biddingDate?.startDate)
          : null
      )?.toString()
    ) {
      //Send for bidding
      // we need to set bidding start date : current time and optional to set end date

      setAssignComponent(
        <SendForBiding
          biddingDate={resGroup?.bidEndingDate}
          _id={resGroup?._id}
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      );
    } else if (
      currentDate <
      (resGroup?.biddingDate?.startDate
        ? new Date(resGroup?.biddingDate?.startDate)
        : null)
    ) {
      //Send for bidding
      // we need to set bidding start date : current time and optional to set end date

      setAssignComponent(
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "none",
            background: "#00FFFD",
            borderRadius: "20px",
            color: "#222C2B",
            fontWeight: "600",
            fontSize: "12px",
            width: "150px",
            padding: "2px",
          }}
        >
          Bid Upcoming
        </Typography>
      );
    } else if (
      currentDate >
        (resGroup?.biddingDate?.startDate
          ? new Date(resGroup?.biddingDate?.startDate)
          : null) &&
      (currentDate <
        (resGroup?.biddingDate?.endDate
          ? new Date(resGroup?.biddingDate?.endDate)
          : null) ||
        !resGroup?.biddingDate?.endDate)
    ) {
      // Bid-ongoing

      setAssignComponent(<BidOnGoing />);
    } else if (
      currentDate >
        (resGroup?.biddingDate?.endDate
          ? new Date(resGroup?.biddingDate?.endDate)
          : null) &&
      resGroup?.biddingDate?.endDate
    ) {
      //Assign Vendor
      setAssignComponent(
        <AssignVendor
          allBids={resGroup?.allBids}
          reservationRequestGroup={resGroup?._id}
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      );
    }
  }, [resGroup]);

  return assignComponent;
};

export default Assign;
