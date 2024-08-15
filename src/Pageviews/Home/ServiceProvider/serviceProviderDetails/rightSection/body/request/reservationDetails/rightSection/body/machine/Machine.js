import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import editIcon from "../../../../../../../../../../../Assets/Home/service_provider/editIcon.png";
import { useGetMachineDataByIdQuery } from "../../../../../../../../../../../features/machine/machineSlice";

const Machine = ({ machine }) => {
  const { data: machineData } = useGetMachineDataByIdQuery(machine);
  console.log(machineData?.data);
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
          Machine Details
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
          Shop Name
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.usedFor?.name}
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
          Address
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.usedFor?.address?.street +
            "," +
            machineData?.data?.usedFor?.address?.city +
            "," +
            machineData?.data?.usedFor?.address?.country}
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
          Type of shop
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.usedFor?.type}
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
          Type of Machine
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.category}
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
          Brand
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.brand}
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
          Model
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          {machineData?.data?.model}
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
          Sensor Section
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          No Data
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
          Sensor Purpose
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          No Data
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
          Mac Address
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            color: "#6B7280",
            fontSize: "14px",
          }}
        >
          No Data
        </Typography>
      </Box>
      <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
    </Box>
  );
};

export default Machine;
