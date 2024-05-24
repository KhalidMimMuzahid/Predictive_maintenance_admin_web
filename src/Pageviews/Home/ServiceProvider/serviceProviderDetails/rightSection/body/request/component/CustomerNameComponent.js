import { Box, Typography } from "@mui/material";
import React from "react";
import { useGetCustomerDetailsQuery } from "../../../../../../../../features/customers/customersSlice";

const CustomerNameComponent = ({ props }) => {
  const { data: customerDetails } = useGetCustomerDetailsQuery(props?.user);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0 16px",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
        >
          {customerDetails?.data?.showaUser?.name?.firstName +
            " " +
            customerDetails?.data?.showaUser?.name?.lastName}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "12px", color: "#6E6893" }}>
          {customerDetails?.data?.showaUser?.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerNameComponent;
