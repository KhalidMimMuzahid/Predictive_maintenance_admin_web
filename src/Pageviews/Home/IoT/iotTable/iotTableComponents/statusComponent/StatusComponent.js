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
            ? "#F3FAE7"
            : status == "In Store"
            ? "#FFE9C2"
            : status == "In Active"
            ? "#FDCCD1"
            : "#24459c",
        color:
          status == "Active"
            ? "#7FC008"
            : status == "In Store"
            ? "#000000"
            : status == "In Active"
            ? "#000000"
            : "#24459c",
      }}
    >
      {status}
    </div>
  );
};

export default StatusComponent;
