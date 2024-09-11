import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const LastMessageTime = ({ lastMessage }) => {
  const { width, breakpoint } = useSelector((state) => state.browser);
  return (
    <Typography
      sx={{
        color: "#D1D5DB",
        fontSize: breakpoint === "lg" ? "10px" : "16px",
        fontWeight: "500",
        textAlign: "end",
        width: "30%",
      }}
    >
      {formatDateTime(lastMessage?.createdAt)}
    </Typography>
  );
};

export default LastMessageTime;

function formatDateTime(dateString) {
  const inputDate = new Date(dateString);
  const now = new Date();

  // Compare the dates (without time) to check if the input date is today
  const isToday = inputDate.toDateString() === now.toDateString();

  if (isToday) {
    // Format time as "HH:MM AM/PM"
    let hours = inputDate.getHours();
    let minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  } else {
    // Format date as "DD/MM/YYYY"
    const day = String(inputDate.getDate()).padStart(2, "0");
    const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = inputDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
