import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TemperatureChart from "./TemperatureChart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useGetSensorDataByMacAddressQuery } from "../../../../../../../../../features/sensorModuleAttached/sensorModuleAttachedSlice";
import { toast } from "react-toastify";
import VibrationChart from "./VibeationChart";
const SensorDataDetails = ({ selectedSensorID }) => {
  const [selectedTempPeriod, setSelectedTempPeriod] = useState(1);
  const [selectedVibPeriod, setSelectedVibPeriod] = useState(1);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isError, isLoading, isFetching, isSuccess, error, refetch } =
    useGetSensorDataByMacAddressQuery({
      macAddress: selectedSensorID,
      page,
      limit,
    });
  console.log("Sensor data::::: ", data?.data?.sensorData);
  useEffect(() => {
    console.log({
      macAddress: selectedSensorID,
      page,
      limit,
    });
    refetch({
      macAddress: selectedSensorID,
      page,
      limit,
    });
  }, [page, limit, selectedSensorID]);
  useEffect(() => {
    setPage(1);
    setSelectedTempPeriod(1);
    setSelectedVibPeriod(1);
  }, [selectedSensorID]);

  const handleTempChange = (event) => {
    setSelectedTempPeriod(event?.target?.value);
  };

  const handleVibChange = (event) => {
    setSelectedVibPeriod(event?.target?.value);
  };

  return (
    <Box sx={{ padding: "16px 16px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          disabled={!Boolean(data?.data?.nextPage) || isFetching}
          onClick={() => setPage(data?.data?.nextPage)}
        >
          <KeyboardArrowLeftIcon />
          Prev
        </Button>
        <Select
          placeholder="Limit"
          value="default"
          onChange={(e) => setLimit(e?.target?.value)}
        >
          <MenuItem value="default" disabled>
            limit {`(${limit})`}
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
        <Button
          disabled={!Boolean(data?.data?.prevPage) || isFetching}
          onClick={() => setPage(data?.data?.prevPage)}
        >
          Next
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{
              color: "#111827",
              fontSize: "14px",
              fontWeight: "600",
              width: "40%",
            }}
          ></Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <FormControl
              variant="filled"
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Temp Period
              </InputLabel>
              <Select
                value={selectedTempPeriod}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleTempChange}
                label="Temp Period"
              >
                {[...Array(data?.data?.sensorData[0]?.temperature?.length)].map(
                  (_, i) => (
                    <MenuItem value={i + 1}>Period {i + 1}</MenuItem>
                  )
                )}
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Vib Period
              </InputLabel>
              <Select
                value={selectedVibPeriod}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleVibChange}
                label="Vib Period"
              >
                {[...Array(data?.data?.sensorData[0]?.vibration?.length)].map(
                  (_, i) => (
                    <MenuItem value={i + 1}>Period {i + 1}</MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          {data?.data?.sensorData?.map(
            (sensor) => sensor?.temperature[selectedTempPeriod - 1]
          )?.length > 0 && (
            <TemperatureChart
              tempArray={data?.data?.sensorData?.map(
                (sensor) => sensor?.temperature[selectedTempPeriod - 1]
              )}
            />
          )}
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          {data?.data?.sensorData?.map(
            (sensor) => sensor?.vibration[selectedVibPeriod - 1]
          )?.length > 0 && (
            <VibrationChart
              vibrationArray={data?.data?.sensorData?.map(
                (sensor) => sensor?.vibration[selectedVibPeriod - 1]
              )}
            />
          )}
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SensorDataDetails;
