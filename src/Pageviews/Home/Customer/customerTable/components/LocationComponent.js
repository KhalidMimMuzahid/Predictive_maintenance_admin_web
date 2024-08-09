import { Box, Typography } from "@mui/material";

const LocationComponent = ({ props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ color: "#111827", fontSize: "14px", fontWeight: "600" }}
      >
        {props?.row?.showaUser?.addresses[0]?.address?.street +
          ", " +
          props?.row?.showaUser?.addresses[0]?.address?.buildingName}
      </Typography>
      <Typography>
        {props?.row?.showaUser?.addresses[0]?.address?.city +
          ", " +
          props?.row?.showaUser?.addresses[0]?.address?.prefecture +
          "-" +
          props?.row?.showaUser?.addresses[0]?.address?.postalCode}
      </Typography>
    </Box>
  );
};

export default LocationComponent;
