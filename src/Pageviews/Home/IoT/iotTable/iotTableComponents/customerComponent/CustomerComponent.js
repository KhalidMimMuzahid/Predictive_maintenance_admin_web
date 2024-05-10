import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CustomerComponent = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [component, setComponent] = useState(<span>loading</span>);
  // console.log({ props });
  // if (props?.row?.status === "in-stock") {
  //   setComponent(<span>not sold yet</span>);
  // }

  // const [customer, setCustomer] = useState(null);
  // if (isLoading) {
  //   return (

  //   );
  // }
  // useEffect(() => {
  //   let url = `https://api.showaapp.com/customer/profile/user/find-user-with-id/${props?.row?.uid}`;
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log({ data });
  //       setCustomer(data?.user);
  //     });
  // }, [props?.row?.uid]);

  return;
};

export default CustomerComponent;
