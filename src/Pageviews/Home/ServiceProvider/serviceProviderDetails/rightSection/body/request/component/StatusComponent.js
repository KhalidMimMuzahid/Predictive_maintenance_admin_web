import { Typography } from "@mui/material";

const StatusComponent = ({ props }) => {
  return (
    <Typography
      sx={{
        textTransform: "none",
        fontSize: "12px",
        fontWeight: "600",
        textAlign: "center",
        background:
          props?.reservationRequest?.status === "completed" && "#2FD573",
        color:
          (props?.reservationRequest?.status === "completed" && "White") ||
          (props?.reservationRequest?.status === "approved" && "#24459C") ||
          (props?.reservationRequest?.status === "pending" && "#FFA503") ||
          (props?.reservationRequest?.status === "ongoing" && "purple") ||
          (props?.reservationRequest?.status === "declined" && "#FF4858"),
        border:
          (props?.reservationRequest?.status === "completed" &&
            "1px solid White") ||
          (props?.reservationRequest?.status === "approved" &&
            "1px solid #24459C") ||
          (props?.reservationRequest?.status === "pending" &&
            "1px solid #FFA503") ||
          (props?.reservationRequest?.status === "ongoing" &&
            "1px solid purple") ||
          (props?.reservationRequest?.status === "declined" &&
            "1px solid #FF4858"),
        padding: "2px 6px",
        width: "96px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {props?.reservationRequest?.status.charAt(0).toUpperCase() +
        props?.reservationRequest?.status.slice(1)}
    </Typography>
  );
};

export default StatusComponent;
