import { Typography } from "@mui/material";

const StatusComponent = ({ props }) => {
  return (
    <Typography
      sx={{
        marginLeft: "8px",
        textTransform: "none",
        fontSize: "12px",
        fontWeight: "600",
        textAlign: "center",
        background: props?.row?.status === "completed" && "#2FD573",
        color:
          (props?.row?.status === "completed" && "White") ||
          (props?.row?.status === "accepted" && "#24459C") ||
          (props?.row?.status === "pending" && "#FFA503") ||
          (props?.row?.status === "ongoing" && "purple") ||
          (props?.row?.status === "canceled" && "#FF4858"),
        border:
          (props?.row?.status === "completed" && "1px solid White") ||
          (props?.row?.status === "accepted" && "1px solid #24459C") ||
          (props?.row?.status === "pending" && "1px solid #FFA503") ||
          (props?.row?.status === "ongoing" && "1px solid purple") ||
          (props?.row?.status === "canceled" && "1px solid #FF4858"),
        padding: "2px 6px",
        width: "96px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      {props?.row?.status.charAt(0).toUpperCase() + props?.row?.status.slice(1)}
    </Typography>
  );
};

export default StatusComponent;
