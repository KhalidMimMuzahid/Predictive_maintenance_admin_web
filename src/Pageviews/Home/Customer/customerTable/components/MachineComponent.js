import React from "react";
import { useGetMachineDataQuery } from "../../../../../features/machine/machineSlice";

const MachineComponent = ({ props }) => {
  const {
    data: machineData,
    isLoading,
    isError,
    error,
  } = useGetMachineDataQuery(props?.row?._id);
  return <div>{machineData?.data?.length}</div>;
};

export default MachineComponent;
