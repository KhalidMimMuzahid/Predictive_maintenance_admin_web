import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetSensorModuleByMacAddressQuery } from "../../../../../../features/iot/iotSlice";

const CustomerComponent = ({ sensorModule }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [customer, setCustomer] = useState();
  const {
    data: iot,
    isLoading: isLoading2,
    isError,
    error,
    isSuccess,
  } = useGetSensorModuleByMacAddressQuery(sensorModule?.macAddress);

  useEffect(() => {
    if (sensorModule.status === "in-stock") {
      setCustomer(<span>-</span>);
      setIsLoading(false);
    } else {
      // console.log(iot?.data?.user);
      // if (iot?.data?.isAttached) {
      //   setStatus("assigned");
      //   setIsLoading(false);
      // } else {
      //   setStatus("un-assigned");
      //   setIsLoading(false);
      // }
    }
  }, [isSuccess]);

  if (isLoading) {
    return <span>loading</span>;
  } else {
    return (
      <div>
        <span>status</span>
      </div>
    );
  }
};
export default CustomerComponent;
