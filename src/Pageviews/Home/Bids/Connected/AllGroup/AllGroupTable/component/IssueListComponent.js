import { Button } from "@mui/material";
import React from "react";

const IssueListComponent = () => {
  return (
    <div>
      <Button
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
    </div>
  );
};

export default IssueListComponent;
