import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./header/Header";
import PersonaInfo from "./body/PersonaInfo";
import Address from "./body/Address";
import BankInfo from "./body/BankInfo";
import AccountSetting from "./body/AccountSetting";

const Settings = () => {
  const [value, setValue] = useState("personal_info");
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      <Header value={value} setValue={setValue} />
      {value === "personal_info" && <PersonaInfo />}
      {value === "address" && <Address />}
      {value === "bank_info" && <BankInfo />}
      {value === "account_setting" && <AccountSetting />}
    </Box>
  );
};

export default Settings;
