import { Typography } from "@mui/material";

const StatusComponent = ({ props }) => {
  return (
    <Typography
      sx={{
        textTransform: "none",
        fontSize: "12px",
        fontWeight: "600",
        textAlign: "center",
        background: props?.status === "Completed" && "#2FD573",
        color:
          (props?.status === "Completed" && "White") ||
          (props?.status === "Approved" && "#24459C") ||
          (props?.status === "Pending" && "#FFA503") ||
          (props?.status === "Ongoing" && "purple") ||
          (props?.status === "Declined" && "#FF4858"),
        border:
          (props?.status === "completed" && "1px solid White") ||
          (props?.status === "Approved" && "1px solid #24459C") ||
          (props?.status === "Pending" && "1px solid #FFA503") ||
          (props?.status === "Ongoing" && "1px solid purple") ||
          (props?.status === "Declined" && "1px solid #FF4858"),
        padding: "2px 6px",
        width: "96px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {props?.status.charAt(0).toUpperCase() + props?.status.slice(1)}
    </Typography>
  );
};

export default StatusComponent;
