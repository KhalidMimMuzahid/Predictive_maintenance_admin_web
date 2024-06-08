import { Box, Typography } from "@mui/material";
import React from "react";

const ScheduleComponent = ({ reservation }) => {
  const date = new Date(reservation?.schedule?.schedules[0]);
  return (
    <Box>
      <Typography>
        {`${date?.getDate()}-${date?.getMonth()}-${date?.getFullYear()}` ||
          "no-scheduled"}
      </Typography>
    </Box>
  );
};

export default ScheduleComponent;
