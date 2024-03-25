import React, { useEffect, useState } from "react";

const MachineComponent = (props) => {
  const [machineCount, setMachineCount] = useState(0);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/:${props?.row?.details?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setMachineCount(data?.data?.length);
        } else {
          setMachineCount(0);
        }
      });
  }, []);
  return <div>{machineCount}</div>;
};

export default MachineComponent;
