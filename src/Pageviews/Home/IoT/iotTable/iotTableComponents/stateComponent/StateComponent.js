import React, { useEffect, useState } from "react";
import { useGetSensorModuleByMacAddressQuery } from "../../../../../../features/iot/iotSlice";

const StateComponent = ({ sensorModule }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("");
  const {
    data: iot,
    isLoading: isLoading2,
    isError,
    error,
    isSuccess,
  } = useGetSensorModuleByMacAddressQuery(sensorModule?.macAddress);
console.log({ iot });
useEffect(() => {
  if (sensorModule.status === "in-stock") {
    setStatus("not-sold-yet");
    setIsLoading(false);
  } else {
    if (iot?.data?.isAttached) {
      setStatus("assigned");
      setIsLoading(false);
    } else {
      setStatus("un-assigned");
      setIsLoading(false);
    }
  }
}, [isSuccess, iot]);

  if (isLoading) {
    return <span>loading</span>;
  } else {
    return (
      <div>
        <span>{status}</span>
      </div>
    );
  }
};

export default StateComponent;
