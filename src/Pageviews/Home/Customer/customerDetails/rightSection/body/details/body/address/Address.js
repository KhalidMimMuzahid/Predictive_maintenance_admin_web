import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";

const Address = () => {
  const [user, setUser] = useState(null);
  const { uid } = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/profile/user/find-user-with-id/${uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.user);
      });
  }, [uid]);

  return (
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
          Postal Code:
        </Typography>
        <Typography
          variant="p"
          sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
        >
          {user?.postalCode}
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
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          {user?.prefecture}
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
          Address1:
        </Typography>
        <Typography
          variant="p"
          sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
        >
          {user?.streetAddress + ", " + user?.cityAddress}
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
          Address2:
        </Typography>
        <Typography variant="p">
          <Typography
            variant="p"
            sx={{
              fontWeight: "600",
              color: "#6B7280",
              fontSize: "14px",
              textTransform: "uppercase",
            }}
          >
            {user?.cityAddress}
          </Typography>
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
          Occupation:
        </Typography>
        <Typography variant="p">
          <Typography
            variant="p"
            sx={{
              fontWeight: "600",
              color: "#6B7280",
              fontSize: "14px",
            }}
          >
            {user?.occupation}
          </Typography>
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Address;
