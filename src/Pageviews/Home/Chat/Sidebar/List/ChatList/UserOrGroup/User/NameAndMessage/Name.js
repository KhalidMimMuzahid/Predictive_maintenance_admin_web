import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Name = ({ chat, group, users, isSuccess }) => {
  const [title, setTitle] = useState("User");
  const { user } = useSelector((state) => state.auth);
  const { width, breakpoint } = useSelector((state) => state.browser);

  useEffect(() => {
    if (isSuccess && users?.length) {
      const secondPerson = users?.find(
        (each) => each?._id?.toString() !== user?._id?.toString()
      );

      const role = secondPerson?.role;
      const firstName =
        secondPerson[
          role === "showaUser" ||
          role === "showaAdmin" ||
          role === "showaSubAdmin"
            ? "showaUser"
            : role
        ]?.name?.firstName;
      const lastName =
        secondPerson[
          role === "showaUser" ||
          role === "showaAdmin" ||
          role === "showaSubAdmin"
            ? "showaUser"
            : role
        ]?.name?.lastName;

      const fullName = firstName + " " + lastName;
      if (fullName) {
        setTitle(fullName);
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
