import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";

const AdminTable = ({ admin }) => {
  return (
    <Box sx={{ padding: "12px 60px" }}>
      <Box sx={{ paddingY: "12px" }}>
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
            Admin Info
          </Typography>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "160px",
              height: "160px",
              borderRadius: "100%",
              background: "#E6E8F0",
            }}
          >
            <img src={admin?.photoUrl} alt="Admin Img" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            padding: "16px 24px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "14px",
              width: "15%",
            }}
          >
            Name
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {admin?.name?.firstName + " " + admin?.name?.lastName}
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
            variant="p"
            sx={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "14px",
              width: "15%",
            }}
          >
            Company Reg No.
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            109890354398945345
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            padding: "16px 24px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "14px",
              width: "15%",
            }}
          >
            Email
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {admin?.user?.email}
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
            variant="p"
            sx={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "14px",
              width: "15%",
            }}
          >
            Role
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            {admin?.user?.role}
          </Typography>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>
    </Box>
  );
};

export default AdminTable;
