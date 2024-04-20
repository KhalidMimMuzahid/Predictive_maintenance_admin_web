import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const SubscriptionComponent = ({ props }) => {
  const [subscriptionPackage, setSubscriptionPackage] = useState(null);
  useEffect(() => {
    if (props?.value !== "") {
      let url =
        `${process.env.REACT_APP_BASE_URL}/customer/subscription/get-current-packages/` +
        props?.row?.uid;
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
            setSubscriptionPackage("error");
          }
        });
    }
  }, [props?.row?.uid]);
  return (
    <div>
      {/* check  subscriptionPackage; and according the the value make different color */}
      {/* <span>{subscriptionPackage}</span> */}
      <Box>
        <Box
          sx={{
            background: "#D9E3FF",
            borderRadius: "20px",
            padding: "4px 36px",
            color: "#24459C",
            fontWeight: "600",
          }}
        >
          Basic
        </Box>
        {/* <Box
          sx={{
            background: "#DCFFD9",
            borderRadius: "20px",
            padding: "4px 36px",
            color: "#24459C",
            fontWeight: "600",
          }}
        >
          Normal
        </Box> */}
        {/* <Box
          sx={{
            background: "#DCFFD9",
            borderRadius: "20px",
            padding: "4px 36px",
            color: "#24459C",
            fontWeight: "600",
          }}
        >
          Premium
        </Box> */}
      </Box>
    </div>
  );
};

export default SubscriptionComponent;
