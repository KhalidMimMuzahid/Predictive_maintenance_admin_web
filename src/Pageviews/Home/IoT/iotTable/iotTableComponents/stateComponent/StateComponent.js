import React from "react";

const StateComponent = ({ bid }) => {
  return (
    <div>
      <span>{bid?.isDeleted?.value ? "TRUE" : "FALSE"}</span>
    </div>
  );
};

export default StateComponent;
