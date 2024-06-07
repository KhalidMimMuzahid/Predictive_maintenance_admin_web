import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AssignServiceProviderModal from "../../../modal/AssignServiceProviderModal/AssignServiceProviderModal";

const AssignVendor = () => {
  const [assignServiceProviderModalOpens, setAssignServiceProviderModalOpens] =
    useState(false);
  return (
    <Box>
      {assignServiceProviderModalOpens && (
        <AssignServiceProviderModal
          assignServiceProviderModalOpens={assignServiceProviderModalOpens}
          setAssignServiceProviderModalOpens={
            setAssignServiceProviderModalOpens
          }
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
          padding: "2px 16px",
          fontWeight: "600",
          fontSize: "12px",
        }}
      >
        Assign Vendor
      </Button>
    </Box>
  );
};

export default AssignVendor;
