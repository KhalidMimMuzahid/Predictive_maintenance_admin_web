import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useGetShowaUserInfoQuery } from "../../../../../../../features/reservation/reservationSlice";

const CustomerNamePhoneComponent = ({ props }) => {
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useGetShowaUserInfoQuery(props?.row?.user?.showaUser);

  return (
    <Box>
      <Typography
        sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
      >
        {userData?.data?.name
          ? userData?.data?.name?.firstName +
            " " +
            userData?.data?.name?.lastName
          : "No Data Found"}
      </Typography>
      <Typography sx={{ color: "#6E6893", fontSize: "12px" }}>
        {userData?.data?.user?.phone || "No Data Found"}
      </Typography>
    </Box>
  );
};

export default CustomerNamePhoneComponent;
