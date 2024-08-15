import { Box, Typography } from "@mui/material";

export const columns = [
  {
    field: "customerName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        CUSTOMER NAME
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={props?.row?.showaUser?.photoUrl}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
        <Box>
          <Typography
            sx={{ fontWeight: "600", color: "#25213B", fontSize: "14px" }}
          >
            {props?.row?.showaUser?.name?.firstName +
              " " +
              props?.row?.showaUser?.name?.lastName}
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "#6E6893" }}>
            {props?.row?.phone}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "email",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        EMAIL
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Typography sx={{ fontSize: "12px", color: "#6E6893" }}>
        {props?.row?.email}
      </Typography>
    ),
  },
  {
    field: "location",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Box>
        <Typography sx={{ fontSize: "12px", color: "#6E6893" }}>
          {props?.row?.showaUser?.addresses[0]?.address?.details +
            ", " +
            props?.row?.showaUser?.addresses[0]?.address?.prefecture}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#6E6893" }}>
          {props?.row?.showaUser?.addresses[0]?.address?.city +
            ", " +
            props?.row?.showaUser?.addresses[0]?.address?.country}
        </Typography>
      </Box>
    ),
  },
  {
    field: "action",
    alignItems: "center",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Box>
        <label key={props?.row?._id} style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            name="options" // Same name attribute for all radio buttons
            value={props?.row?._id}
            style={{ transform: "scale(1.5)", cursor: "pointer" }}
            // checked={selectedOption === option} // Controlled component
            // onChange={handleChange} // Update state on change
          />
        </label>
      </Box>
    ),
  },
];
