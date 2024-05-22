import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import shop1 from "../../../../../../../../Assets/Home/service_provider/shop_photo1.png";
import shop2 from "../../../../../../../../Assets/Home/service_provider/shop_photo1.png";

const Address = () => {
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
            Address
          </Typography>

          <Button>
            <img src={editIcon} alt="" />
          </Button>
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
            Postal Code
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            12345
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
            Prefecture
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            OSAKA - 大阪府
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
            Address1
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            Hakonora - 箱の浦, Hannanshi - 阪南市
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
            Address2
          </Typography>

          <Typography
            variant="p"
            sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
          >
            208-1294, Kamishingashi, Kamgashi, #879
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
            Map Location
          </Typography>

          <Button
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              textTransform: "none",
              borderRadius: "20px",
              padding: "4px 24px",
              fontWeight: "500",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Google Map Location
          </Button>
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
            Shop Photo
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
              <img src={shop1} alt="" />
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
              <img src={shop2} alt="" />
            </Box>
          </Box>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>
    </Box>
  );
};

export default Address;
