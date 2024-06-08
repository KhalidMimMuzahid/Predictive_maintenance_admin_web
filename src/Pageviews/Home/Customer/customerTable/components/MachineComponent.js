import React from "react";
import { useGetMachineDataQuery } from "../../../../../features/machine/machineSlice";
import { Box, Typography } from "@mui/material";

const MachineComponent = ({ props }) => {
  const {
    data: machineData,
    isLoading,
    isError,
    error,
  } = useGetMachineDataQuery(props?.row?._id);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ textAlign: "center" }}>
        {machineData?.data?.length}
      </Typography>
    </Box>
  );
};

export default MachineComponent;
