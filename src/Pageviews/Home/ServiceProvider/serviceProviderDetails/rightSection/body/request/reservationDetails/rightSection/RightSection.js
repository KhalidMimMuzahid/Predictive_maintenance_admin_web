import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./header/Header";
import CustomerDetails from "./body/customerDetails/CustomerDetails";
import Machine from "./body/machine/Machine";
import Status from "./body/status/Status";
import Reservation from "./body/reservation/Reservation";

const RightSection = () => {
  const [header, setHeader] = useState("customer");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      <Box>
        <Header header={header} setHeader={setHeader} />
      </Box>
      <Box>
        {header === "customer" && <CustomerDetails />}
        {header === "machine" && <Machine />}
        {header === "reservation" && <Reservation />}
        {header === "status" && <Status />}
      </Box>
    </Box>
  );
};

export default RightSection;
