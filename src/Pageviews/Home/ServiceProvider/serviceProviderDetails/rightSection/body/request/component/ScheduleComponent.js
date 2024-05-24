import { Box, Typography } from "@mui/material";
import React from "react";

const ScheduleComponent = ({ props }) => {
  // Create a Date object from the date string
  let dateObj = new Date(props?.reservationRequest?.schedule?.schedules[0]);

  // Format the date to show only the date part
  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="p"
        sx={{
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {formattedDate}
      </Typography>
      <Typography
        variant="p"
        sx={{
          px: "16px",
          py: "4px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {/* {props?.schedule?.date} */}
      </Typography>
    </Box>
  );
};

export default ScheduleComponent;
