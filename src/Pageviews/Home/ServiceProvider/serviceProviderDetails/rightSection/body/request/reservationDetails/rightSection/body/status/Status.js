import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../../../../../../../Assets/Home/service_provider/editIcon.png";

const Status = () => {
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
          Machine Status
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
          Machine Status
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#F15F5F",
            fontSize: "14px",
          }}
        >
          Abnormal
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
          Temperature 1
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#65748B",
            fontSize: "14px",
          }}
        >
          85° C
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
          Vibration 1
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#2196F3",
            fontSize: "14px",
          }}
        >
          22 Hz
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
          Temperature Chart
        </Typography>
        <Box>Chart Is Coming ...</Box>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
          Vibration Chart
        </Typography>
        <Box>Chart Is Coming ...</Box>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Status;
