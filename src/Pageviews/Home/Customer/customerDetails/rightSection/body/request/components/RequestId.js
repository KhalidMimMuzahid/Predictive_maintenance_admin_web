import { Box, Typography } from "@mui/material";
import React from "react";

const RequestId = (props) => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="p" sx={{ fontSize: "12px", color: "#25213B" }}>
        {props.row.washingMachineId}
      </Typography>
    </Box>
  );
};

export default RequestId;
