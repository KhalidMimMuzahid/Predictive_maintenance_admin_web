import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../../../../../../../Assets/Home/service_provider/editIcon.png";

const Reservation = () => {
  return (
    <Box sx={{ paddingY: "12px", paddingX: "24px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
        >
          Reservation Details
        </Typography>
        {/* <Button>
          <img src={editIcon} alt="" />
        </Button> */}
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "25%",
          }}
        >
          Status
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#FFA503",
            fontSize: "14px",
          }}
        >
          Pending
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "25%",
          }}
        >
          Schedule
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#65748B",
            fontSize: "14px",
          }}
        >
          On Demand
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "25%",
          }}
        >
          Invoice
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#2196F3",
            fontSize: "14px",
          }}
        >
          Create
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px 24px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            color: "#111827",
            fontSize: "14px",
            width: "25%",
          }}
        >
          Issues
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#7FC008",
            fontSize: "14px",
          }}
        >
          View Issues List
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Reservation;
