import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import IssuesModal from "../modal/IssuesModal";

const ServiceProviderRequestIssuesComponent = ({ props }) => {
  const [issuesOpen, setIssuesOpen] = useState(false);

  return (
    <Box>
      <>
        {issuesOpen && (
          <IssuesModal
            issuesOpen={issuesOpen}
            setIssuesOpen={setIssuesOpen}
            props={props?.reservationRequest?.problem}
          />
        )}
      </>
      <Box>
        <Button
          onClick={() => {
            setIssuesOpen(!issuesOpen);
          }}
          sx={{
            textTransform: "none",
            fontSize: "11px",
            background: "#F3FAE7",
            padding: "3px 8px",
            borderRadius: "20px",
            color: "#7FC008",
          }}
        >
          View Issue List
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceProviderRequestIssuesComponent;
