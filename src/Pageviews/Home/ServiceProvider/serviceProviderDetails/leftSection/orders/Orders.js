import React from "react";
import { Box, Typography } from "@mui/material";
import orderRecieved from "../../../../../../Assets/Home/service_provider/OrderRecived.png";
import orderComplete from "../../../../../../Assets/Home/service_provider/CompleteOrders.png";
import cancellation from "../../../../../../Assets/Home/service_provider/Cancellation.png";
import revenue from "../../../../../../Assets/Home/service_provider/Revenue.png";
import { useGetReservationCountByServiceProviderCompanyQuery } from "../../../../../../features/reservation/reservationSlice";

import { useParams } from "react-router-dom";

const Orders = () => {
  const { _id } = useParams();

  const {
    data: reservationCountData,
    isLoading,
    isError,
  } = useGetReservationCountByServiceProviderCompanyQuery(_id);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "8px",
      }}
    >
      <Box
        className="orders_card"
        sx={{
          background: "#F1F4FB",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="orders_title"
            sx={{ fontWeight: "400", color: "#243972" }}
          >
            Orders Received
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            {reservationCountData?.data?.orderReceivedReservationsCount || 0}
          </Typography>
        </Box>
        <img
          src={orderRecieved}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        className="orders_card"
        sx={{
          background: "#F1F4FB",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="orders_title"
            sx={{ fontWeight: "400", color: "#243972" }}
          >
            Complete Orders
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            {reservationCountData?.data?.orderCompletedReservationsCount || 0}
          </Typography>
        </Box>
        <img
          src={orderComplete}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        className="orders_card"
        sx={{
          background: "#F1F4FB",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="orders_title"
            y
            sx={{ fontWeight: "400", color: "#243972" }}
          >
            Cancellation
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            {reservationCountData?.data?.orderCanceledReservationsCount || 0}
          </Typography>
        </Box>
        <img
          src={cancellation}
          style={{ width: "32px", height: "32px" }}
          alt=""
        />
      </Box>
      <Box
        className="orders_card"
        sx={{
          background: "#F1F4FB",
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            className="orders_title"
            y
            sx={{ fontWeight: "400", color: "#243972" }}
          >
            Revenue
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#243972" }}
          >
            ...
          </Typography>
        </Box>
        <img src={revenue} style={{ width: "32px", height: "32px" }} alt="" />
      </Box>
    </Box>
  );
};

export default Orders;
