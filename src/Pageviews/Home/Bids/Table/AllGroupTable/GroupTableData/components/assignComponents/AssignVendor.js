import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AssignServiceProviderModal from "../../../modal/AssignServiceProviderModal/AssignServiceProviderModal";

const AssignVendor = ({
  allBids,
  reservationRequestGroup,
  refetchForGetALlResGroup,
}) => {
  const [assignServiceProviderModalOpens, setAssignServiceProviderModalOpens] =
    useState(false);
  return (
    <Box>
      {assignServiceProviderModalOpens && (
        <AssignServiceProviderModal
          allBids={allBids}
          reservationRequestGroup={reservationRequestGroup}
          assignServiceProviderModalOpens={assignServiceProviderModalOpens}
          setAssignServiceProviderModalOpens={
            setAssignServiceProviderModalOpens
          }
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      )}
      <Button
        onClick={() =>
          setAssignServiceProviderModalOpens(!assignServiceProviderModalOpens)
        }
        sx={{
          textTransform: "none",
          background: "#D9E3FF",
          "&:hover": {
            background: "#D9E3FF",
          },
          borderRadius: "20px",
          color: "#24459C",
          fontWeight: "600",
          fontSize: "12px",
          width: "150px",
          padding: "2px",
        }}
      >
        Assign Vendor
      </Button>
    </Box>
  );
};

export default AssignVendor;
