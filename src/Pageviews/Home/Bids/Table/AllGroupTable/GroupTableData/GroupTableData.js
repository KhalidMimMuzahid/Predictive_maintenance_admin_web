import { MoreVert } from "@mui/icons-material";
import React from "react";
import StatusComponentForGroup from "../component/StatusComponentForGroup";
import Assign from "./components/Assign";

const GroupTableData = ({
  resGroup,
  groupExpanded,
  setGroupExpanded,
  refetchForGetALlResGroup,
}) => {
  return (
    <tr
      onClick={() => setGroupExpanded(resGroup?.groupId)}
      style={{
        cursor: "pointer",
        borderTop: "1px solid #D9D9D9",
        padding: "14px",
        background: resGroup?.groupId === groupExpanded ? "#F6F8FD" : "",
      }}
    >
      <td
        style={{
          padding: "14px",
          color: "#25213B",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {resGroup?.groupName.charAt(0).toUpperCase() +
          resGroup?.groupName.slice(1)}
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        {resGroup?.groupId}
      </td>
      <td
        style={{ padding: "14px", display: "flex", justifyContent: "center" }}
      >
        <StatusComponentForGroup reservation={resGroup} />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>-</td>
      <td style={{ padding: "14px", textAlign: "center" }}>-</td>
      <td style={{ padding: "14px", textAlign: "center" }}>-</td>
      <td style={{ padding: "14px", textAlign: "center" }}>-</td>
      <td style={{ padding: "14px", textAlign: "center" }}>-</td>
      <td
        style={{ padding: "14px", display: "flex", justifyContent: "center" }}
      >
        <Assign
          resGroup={resGroup}
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      </td>
      <td style={{ padding: "14px", textAlign: "center" }}>
        <MoreVert />
      </td>
    </tr>
  );
};

export default GroupTableData;
