import { Upload } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useGetAllResGroupsQuery } from "../../../../../features/resGroup/resGroupSlice";
import AllGroupTable from "../../Table/AllGroupTable/AllGroupTable";

const BidsNonConnectedAllGroup = () => {
  const {
    data: resGroupData,
    isLoading,
    refetch: refetchForGetALlResGroup,
  } = useGetAllResGroupsQuery({
    groupForMachineType: "non-connected",
    reservationGroupType: "all",
  });
  console.log("Non-Connected All Group", resGroupData);
  return (
    <Box sx={{ padding: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Bids
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography>Bids / </Typography>
            <Typography>Sensor Non-Connected / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              All Group
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            sx={{
              backgroundColor: "#24459c",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "500",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            General
          </Button>
          <Button
            // onClick={() => downloadTableData(downloadData, setDownloadData)}
            sx={{
              backgroundColor: "white",
              color: "#24459C",
              textTransform: "none",
              borderRadius: "8px",
              padding: "6px 32px",
              fontWeight: "600",
            }}
          >
            Packages
          </Button>
        </Box>
      </Box>
      <Box sx={{ paddingY: "28px" }}>
        <AllGroupTable
          resGroupData={resGroupData}
          isLoading={isLoading}
          refetchForGetALlResGroup={refetchForGetALlResGroup}
        />
      </Box>
    </Box>
  );
};

export default BidsNonConnectedAllGroup;
