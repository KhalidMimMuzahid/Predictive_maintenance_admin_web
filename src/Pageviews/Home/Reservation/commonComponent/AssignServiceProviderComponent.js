import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AssignServiceProviderModal from "./modal/AssignServiceProviderModal";

const AssignServiceProviderComponent = ({ props }) => {
  const [assignServiceProviderModalOpens, setAssignServiceProviderModalOpens] =
    useState(false);
  return (
    <>
      {assignServiceProviderModalOpens && (
        <AssignServiceProviderModal
          assignServiceProviderModalOpens={assignServiceProviderModalOpens}
          setAssignServiceProviderModalOpens={
            setAssignServiceProviderModalOpens
          }
        />
      )}
      {props?.row?.status === "pending" ? (
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
            padding: "2px 32px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Assign
        </Button>
      ) : (
        <Typography
          sx={{
            border: "1px solid #FF4858",
            borderRadius: "20px",
            color: "#FF4858",
            padding: "2px 16px",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Can't Assign
        </Typography>
      )}
    </>
  );
};

export default AssignServiceProviderComponent;
