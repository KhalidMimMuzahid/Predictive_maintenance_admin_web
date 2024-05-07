import { Typography } from "@mui/material";

const StatusComponent = ({ props }) => {
  return (
    <div>
      <Typography sx={{ textTransform: "uppercase" }}>
        {props?.row?.status}
      </Typography>
    </div>
  );
};

export default StatusComponent;
