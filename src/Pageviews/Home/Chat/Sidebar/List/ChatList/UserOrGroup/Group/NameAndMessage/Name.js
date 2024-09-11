import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Name = ({ chat, group, users, isSuccess }) => {
  const [title, setTitle] = useState(group?.groupName);
  const { width, breakpoint } = useSelector((state) => state.browser);
  useEffect(() => {
    if (isSuccess && users?.length) {
      if (!group?.groupName) {
        const user1 = users[0];
        const role1 = user1.role;

        const firstName1 =
          users[0][
            role1 === "showaUser" ||
            role1 === "showaAdmin" ||
            role1 === "showaSubAdmin"
              ? "showaUser"
              : role1
          ].name?.firstName;

        const user2 = users[1];
        const role2 = user2.role;

        const firstName2 =
          users[1][
            role2 === "showaUser" ||
            role2 === "showaAdmin" ||
            role2 === "showaSubAdmin"
              ? "showaUser"
              : role2
          ].name?.firstName;

        const user3 = users[2];
        const role3 = user3.role;

        const firstName3 =
          users[2][
            role3 === "showaUser" ||
            role3 === "showaAdmin" ||
            role3 === "showaSubAdmin"
              ? "showaUser"
              : role3
          ].name?.firstName;

        setTitle(`${firstName1}, ${firstName2}, ${firstName3}`);
      }
    }
  }, [isSuccess]);

  return (
    <Typography
      sx={{
        fontSize: breakpoint === "lg" ? "10px" : "16px",
        color: "#56638D",
        fontWeight: "600",
        textAlign: "start",
      }}
    >
      {title || "Loading..."}
    </Typography>
  );
};

export default Name;
