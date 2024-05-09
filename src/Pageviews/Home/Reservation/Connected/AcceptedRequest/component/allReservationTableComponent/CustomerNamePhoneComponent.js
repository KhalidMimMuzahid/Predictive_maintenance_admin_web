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
      <Typography>
        {userData?.data?.name?.firstName + " " + userData?.data?.name?.lastName}
      </Typography>
      <Typography>{userData?.data?.phone}</Typography>
    </Box>
  );
};

export default CustomerNamePhoneComponent;
