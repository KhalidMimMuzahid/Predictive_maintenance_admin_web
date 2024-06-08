import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import IssuesListModal from "../modal/IssueListModal";

const IssueListComponent = ({ reservation }) => {
  const [issuesModalOpen, setIssuesModalOpen] = useState(false);
  return (
    <Box>
      {issuesModalOpen && (
        <IssuesListModal
          issuesModalOpen={issuesModalOpen}
          setIssuesModalOpen={setIssuesModalOpen}
          problem={reservation?.problem}
        />
      )}
      <Button
        onClick={() => setIssuesModalOpen(!issuesModalOpen)}
        sx={{
          textTransform: "none",
          padding: "2px 12px",
          color: "#7FC008",
          background: "#F3FAE7",
          borderRadius: "20px",
          fontWeight: "600",
        }}
      >
        View Issue List
      </Button>
    </Box>
  );
};

export default IssueListComponent;
