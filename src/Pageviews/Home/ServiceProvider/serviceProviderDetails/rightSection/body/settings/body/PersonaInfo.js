import { EditOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import doc1 from "../../../../../../../../Assets/Home/service_provider/doc1.png";
import doc2 from "../../../../../../../../Assets/Home/service_provider/doc2.png";
import profileImage from "../../../../../../../../Assets/Home/service_provider/profile_image.png";

const PersonaInfo = () => {
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
            Personal Info
          </Typography>

          <Button>
            <img src={editIcon} alt="" />
          </Button>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={profileImage} alt="" />
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
            Company Name
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            ANTT Robotics Ltd.
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
            antt.dev.intern@gmail.com
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
            Select Type of Service
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            Washing Machine Service
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
            Total Number of Stuff
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            145
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
            Company’s Capital Size{" "}
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            ¥145
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
            Documents
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                background: "white",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                padding: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={doc1} alt="" />
            </Box>
            <Box
              sx={{
                background: "white",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                padding: "2px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={doc2} alt="" />
            </Box>
          </Box>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>
    </Box>
  );
};

export default PersonaInfo;
