import React from "react";

const StatusComponent = ({ props }) => {
  let status = props.row?.status;

  return (
    <div>
      <span>{status}</span>
    </div>
  );
};

export default StatusComponent;
