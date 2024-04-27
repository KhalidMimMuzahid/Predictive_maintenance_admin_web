import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CustomerComponent = ({ props }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    let url = `https://api.showaapp.com/customer/profile/user/find-user-with-id/${props?.row?.uid}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        setCustomer(data?.user);
      });
  }, [props?.row?.uid]);

  function displayCustomer() {
    if (customer == null) {
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );
    } else {
      return (
        <Box>
          <Typography
            sx={{
              color: "#25213B",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            {customer?.firstNameAlphabet + " " + customer?.lastNameAlphabet}
          </Typography>
          <div sx={{ color: "#6E6893" }}>{customer?.phone}</div>
        </Box>
      );
    }
  }

  return <div style={{ display: "flex" }}>{displayCustomer()}</div>;
};

export default CustomerComponent;
