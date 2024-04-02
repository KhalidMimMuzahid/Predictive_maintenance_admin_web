import React from "react";
import { Box, Typography } from "@mui/material";
import orderRecieved from "../../../../../../Assets/Home/service_provider/OrderRecived.png";
import orderComplete from "../../../../../../Assets/Home/service_provider/CompleteOrders.png";
import cancellation from "../../../../../../Assets/Home/service_provider/Cancellation.png";
import revenue from "../../../../../../Assets/Home/service_provider/Revenue.png";

const Orders = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "8px",
      }}
    >
      <Box
        sx={{
          background: "#F1F4FB",
          height: "56px",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#243972" }}
          >
            Orders Received
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            7,890
          </Typography>
        </Box>
        <img
          src={orderRecieved}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        sx={{
          background: "#F1F4FB",
          height: "56px",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#243972" }}
          >
            Complete Orders
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            7,890
          </Typography>
        </Box>
        <img
          src={orderComplete}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        sx={{
          background: "#F1F4FB",
          height: "56px",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#243972" }}
          >
            Cancellation
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            7,890
          </Typography>
        </Box>
        <img
          src={cancellation}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        sx={{
          background: "#F1F4FB",
          height: "56px",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#243972" }}
          >
            Revenue
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            7,890
          </Typography>
        </Box>
        <img src={revenue} style={{ width: "32px", height: "32px" }} alt="" />
      </Box>
    </Box>
  );
};

export default Orders;
