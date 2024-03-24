import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
import { Wallet } from "@mui/icons-material";

const CustomerDetails = () => {
  const { uid } = useParams();
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [subscriptionPackage, setSubscriptionPackage] = useState(null);
  const [allMachines, setAllMachines] = useState(null);
  console.log({ uid });

  //   fetch those data

  // subscription
  // machiens

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/profile/user/find-user-with-id/${uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.user);
      });
  }, [uid]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/wallet/get-user-wallet-info/${uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        // setUser(data?.user);
        if (data?.success) {
          setWallet(data?.user_wallet_info);
        } else {
          // throww error
        }
      });
  }, [uid]);

  useEffect(() => {
    let url =
      `${process.env.REACT_APP_BASE_URL}/customer/subscription/get-current-packages/` +
      uid;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubscriptionPackage(data?.currentPackages);
        } else {
          // throw error
        }
      });
  }, [uid]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          //   setWallet(data?.user_wallet_info);
          setAllMachines(data?.data);
        } else {
          // throww error
        }
      });
  }, [uid]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* left sidebar  */}
      <Box sx={{ border: "1px solid black" }}>
        <LeftSection
          user={user}
          wallet={wallet}
          subscriptionPackage={subscriptionPackage}
        />
      </Box>
      {/* right sidebar  */}
      <Box sx={{ border: "1px solid black", width: "100%" }}>
        <RightSection />
      </Box>
    </Box>
  );
};

export default CustomerDetails;
