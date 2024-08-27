import { Box, Typography } from "@mui/material";
import React from "react";
import ThresholdTable from "./ThresholdTable/ThresholdTable";
import { useGetThresholdQuery } from "../../../../features/ai/aiSlice";
import Loader from "../../../../Utils/Loader";

const Threshold = () => {
  const { data: thresholdData, isLoading, refetch } = useGetThresholdQuery();

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "8px",
        width: "50%",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}>
        Threshold
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading && <Loader />}
        {thresholdData?.data?.length > 0 ? (
          <ThresholdTable
            thresholdData={thresholdData?.data}
            refetch={refetch}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "600", fontSize: "24px", color: "#F15F5F" }}
            >
              No Threshold
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Threshold;
