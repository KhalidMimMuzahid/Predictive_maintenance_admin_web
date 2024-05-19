import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Body from "./body/Body";

const RightSection = ({ customerDetailsData, props }) => {
  const [headerName, setHeaderName] = useState("customer");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
      }}
    >
      <Box>
        <Header headerName={headerName} setHeaderName={setHeaderName} />
      </Box>
      <Box>
        <Body
          headerName={headerName}
          setHeaderName={setHeaderName}
          customerDetailsData={customerDetailsData}
          props={props}
        />
      </Box>
    </Box>
  );
};

export default RightSection;
