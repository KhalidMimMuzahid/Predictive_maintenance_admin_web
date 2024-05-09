import { Button } from "@mui/material";
import React, { useState } from "react";
import IssuesModal from "../modal/IssuesModal";

const IssuesComponent = ({ props }) => {
  const [issuesModalOpen, setIssuesModalOpen] = useState(false);
  return (
    <>
      {issuesModalOpen && (
        <IssuesModal
          issuesModalOpen={issuesModalOpen}
          setIssuesModalOpen={setIssuesModalOpen}
          problem={props?.row?.problem}
        />
      )}
      {props?.row?.problem?.issues?.length > 0 ? (
        <Button
          onClick={() => setIssuesModalOpen(!issuesModalOpen)}
          sx={{
            fontSize: "10px",
            color: "#7FC008",
            background: "#F3FAE7",
            borderRadius: "20px",
            fontWeight: "600",
            padding: "8px 16px",
          }}
        >
          View Problems
        </Button>
      ) : (
        <Button sx={{ fontSize: "10px" }} disabled>
          View Problems
        </Button>
      )}
    </>
  );
};

export default IssuesComponent;
