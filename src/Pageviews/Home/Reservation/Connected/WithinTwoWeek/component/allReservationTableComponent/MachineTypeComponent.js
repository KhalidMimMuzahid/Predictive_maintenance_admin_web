import { useEffect, useState } from "react";

const MachineTypeComponent = ({ props }) => {
  return (
    <div style={{ color: "#24459C", fontSize: "12px" }}>
      {props?.row?.machineType}
    </div>
  );
};

export default MachineTypeComponent;
