import React from "react";

const StatusComponent = (props) => {
  let status = props.value;

  return (
    <div
      style={{
        padding: "2px 16px",
        color: "white",
        borderRadius: "15px",
        fontSize: "16px",
        fontWeight: "400",
        backgroundColor:
          status == "Active"
            ? "#14B8A6"
            : status == "In Store"
            ? "#FFB020"
            : status == "In Active"
            ? "#F15F5F"
            : "#24459c",
      }}
    >
      {status}
    </div>
  );
};

export default StatusComponent;
