import React from "react";
import { Box, Button, Typography } from "@mui/material";
import editIcon from "../../../../../../../../../../../Assets/Home/service_provider/editIcon.png";

const CustomerDetails = ({ customerDetails }) => {
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
          Customer Details
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
          Email
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.email}
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
          Phone
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.showaUser?.phone}
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
          Country
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.showaUser?.addresses[0].address?.country}
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
          State/Region
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.showaUser?.addresses[0].address?.state}
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
          Address1
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.showaUser?.addresses[0].address?.street}
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
          Address2
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {customerDetails?.showaUser?.addresses[0].address?.details +
            " " +
            customerDetails?.showaUser?.addresses[0].address?.roomNumber}
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default CustomerDetails;
