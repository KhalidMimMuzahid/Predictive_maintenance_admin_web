import { Box, Typography } from "@mui/material";
import { useState } from "react";
import RequestVsTimeGraph from "./RequestVsTimeGraph/RequestVsTimeGraph";
import Cards from "./RequestVsTimeGraph/component/Cards";

import React from "react";
import AllTransaction from "./pageviews/AllTransaction/AllTransaction";

const WalletScreen = () => {
  const [isWalletRootScreen, setIsWalletRootScreen] = useState(true);
  return (
    <Box sx={{ padding: "40px" }}>
      <Box>
        <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
          Wallet
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Typography>Dashboard / </Typography>
          <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
            Wallet
          </Typography>
        </Box>
      </Box>
      {isWalletRootScreen && (
        <>
          <Cards />
          <RequestVsTimeGraph />
        </>
      )}
      <AllTransaction
        isWalletRootScreen={isWalletRootScreen}
        setIsWalletRootScreen={setIsWalletRootScreen}
      />
    </Box>
  );
};

export default WalletScreen;
