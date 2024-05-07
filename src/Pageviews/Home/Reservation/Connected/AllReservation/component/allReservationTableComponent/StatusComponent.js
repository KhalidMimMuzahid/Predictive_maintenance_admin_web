import { Typography } from "@mui/material";

const StatusComponent = ({ props }) => {
  return (
    <div>
      <Typography
        sx={{ textTransform: "uppercase", fontSize: "12px", fontWeight: "600" }}
      >
        {props?.row?.status}
      </Typography>
    </div>
  );
};

export default StatusComponent;
