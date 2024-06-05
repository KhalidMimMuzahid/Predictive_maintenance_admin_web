import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AllGroupTable = () => {
  const bidsGroupData = [
    {
      groupName: "Sensor Problem",
      groupId: "0001",
      reservationRequest: [
        {
          customer: {
            name: "Khubaibul",
            phone: "01354796545",
          },
          requestId: "001",
          status: "pending",
          schedule: "date time",
          serviceType: "Container Washing Machine",
        },
        {
          customer: {
            name: "Khubaibul",
            phone: "01354796545",
          },
          requestId: "002",
          status: "acceoted",
          schedule: "date time",
          serviceType: "Container Washing Machine",
        },
      ],
      status: "pending",
      assign: "Send for bid",
    },
    {
      groupName: "Leak Detection",
      groupId: "0002",
      reservationRequest: [
        {
          customer: {
            name: "Ayesha",
            phone: "01789456123",
          },
          requestId: "002",
          status: "pending",
          schedule: "date time",
          serviceType: "Pipeline Leak Detection",
        },
        {
          customer: {
            name: "Rahim",
            phone: "01956325478",
          },
          requestId: "003",
          status: "pending",
          schedule: "date time",
          serviceType: "Tank Leak Detection",
        },
      ],
      status: "ongoing",
      assign: "Send for bid",
    },
    {
      groupName: "Maintenance",
      groupId: "0003",
      reservationRequest: [
        {
          customer: {
            name: "Fatima",
            phone: "01678541236",
          },
          requestId: "004",
          status: "pending",
          schedule: "date time",
          serviceType: "General Maintenance",
        },
        {
          customer: {
            name: "Khalid",
            phone: "01678541236",
          },
          requestId: "004",
          status: "pending",
          schedule: "date time",
          serviceType: "General Maintenance",
        },
        {
          customer: {
            name: "Uday",
            phone: "01678541236",
          },
          requestId: "004",
          status: "pending",
          schedule: "date time",
          serviceType: "General Maintenance",
        },
      ],
      status: "pending",
      assign: "Send for bid",
    },
    {
      groupName: "Inspection",
      groupId: "0004",
      reservationRequest: [
        {
          customer: {
            name: "Karim",
            phone: "01865478952",
          },
          requestId: "005",
          status: "pending",
          schedule: "date time",
          serviceType: "Safety Inspection",
        },
        {
          customer: {
            name: "Nurul",
            phone: "01578945623",
          },
          requestId: "006",
          status: "pending",
          schedule: "date time",
          serviceType: "Quality Inspection",
        },
      ],
      status: "pending",
      assign: "Send for bid",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              background: "#26C1C9",
              width: "18px",
              height: "18px",
              borderRadius: "2px",
            }}
          />
          <Typography
            sx={{ color: "#5A6872", fontSize: "14px", fontWeight: "600" }}
          >
            All Bidding
          </Typography>
        </Box>
        <Button
          //   onClick={() => setIsRootInvoiceScreen(false)}
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: "#24459C",
            textTransform: "none",
          }}
        >
          See All
        </Button>
      </Box>
    </Box>
  );
};

export default AllGroupTable;
