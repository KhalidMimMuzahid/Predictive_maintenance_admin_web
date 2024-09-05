import {
  Box,
  Button,
  duration,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FirstGraph from "./component/Graph/FirstGraph";
import SecondGraph from "./component/Graph/SecondGraph";
import ThirdGraph from "./component/Graph/ThirdGraph";
import { usePostPdfDataMutation } from "../../../../features/addFiles/addFilesSlice";
import TableGenerator from "../../../../Utils/PdfGenerator/TableGenerator";

const RequestVsTimeGraph = () => {
  const [whichGraph, setWhichGraph] = useState("bar");

  const postData = {
    _id: "666185187ab7957fbf81dfc1",
    duration: {
      startDate: "2024-07-04T16:55:54.081+00:00",
      endDate: "2024-09-04T16:55:55.081+00:00",
    },
    limit: 8,
  };
  const [
    postPdfData,
    { data: responseData, isError, error, isLoading, isSuccess },
  ] = usePostPdfDataMutation();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px 25px 20px",
          borderRadius: "6px",
          marginTop: "12px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0 12px" }}>
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#81C926",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Orders
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0 12px",
              marginLeft: "20px",
            }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                background: "#26C1C9",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#5A6872" }}
            >
              Completed
            </Typography>
          </Box>
        </Box>
        <Box>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 220,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Style: Bar</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={style}
                  label="Style: Bar"
                  onChange={(e) => setWhichGraph(e?.target?.value)}
                >
                  <MenuItem value={"bar"}>Bar</MenuItem>
                  <MenuItem value={"line"}>Line</MenuItem>
                  <MenuItem value={"pie"}>Pie</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <TableGenerator
                postPdfData={postPdfData}
                data={responseData?.data}
                postData={postData}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Box>
      </Box>
      {whichGraph === "bar" && <FirstGraph />}
      {whichGraph === "line" && <SecondGraph />}
      {whichGraph === "pie" && <ThirdGraph />}
    </Box>
  );
};

export default RequestVsTimeGraph;
