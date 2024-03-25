import React from "react";
import Wallet from "./wallet/Wallet";
import { Subscription } from "./subscription/Subscription";
import Profile from "./profile/Profile";

const LeftSection = ({ user, wallet, subscriptionPackage }) => {
  return (
    <div>
      <Profile user={user} />
      <Wallet wallet={wallet} />
      <Subscription />
    </div>
  );
};

export default LeftSection;
