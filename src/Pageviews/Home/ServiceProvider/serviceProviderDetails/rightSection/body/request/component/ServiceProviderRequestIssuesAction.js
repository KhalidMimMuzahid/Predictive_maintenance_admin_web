import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationModal from "../modal/LocationModal";
import IssuesModal from "../modal/IssuesModal";

const ServiceProviderRequestIssuesComponent = ({ props }) => {
  const [issuesOpen, setIssuesOpen] = useState(false);
  return (
    <Box>
      <>
        {issuesOpen && (
          <IssuesModal issuesOpen={issuesOpen} setIssuesOpen={setIssuesOpen} />
        )}
      </>
      <Box>
        <Button
          onClick={() => {
            setIssuesOpen(!issuesOpen);
          }}
          sx={{
            fontSize: "11px",
            background: "#F3FAE7",
            padding: "3px 8px",
            borderRadius: "20px",
            color: "#7FC008",
          }}
        >
          {props?.row?.issues}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceProviderRequestIssuesComponent;
