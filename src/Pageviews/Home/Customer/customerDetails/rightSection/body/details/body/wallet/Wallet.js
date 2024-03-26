import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const { uid } = useParams();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/wallet/get-user-wallet-info/${uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setUser(data?.user);
        if (data?.message === "success") {
          setWallet(data?.user_wallet_info);
        } else {
          // throww error
        }
      });
  }, [uid]);

  return (
    <Box sx={{ paddingY: "12px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
        >
          Wallet
        </Typography>
        <Button>
          <img src={editIcon} alt="" />
        </Button>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "15%",
          }}
        >
          Account No.
        </Typography>
        <Typography
          variant="p"
          sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
        >
          {wallet?.uid}
        </Typography>
      </Box>
    </Box>
  );
};

export default Wallet;
