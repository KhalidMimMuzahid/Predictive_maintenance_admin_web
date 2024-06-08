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
import VibrationChart from "./VibrationChart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useGetSensorDataByMacAddressQuery } from "../../../../../../../../../features/sensorModuleAttached/sensorModuleAttachedSlice";
import { toast } from "react-toastify";
const SensorDataDetails = ({ selectedSensorID }) => {
  const [sensorDataAll, setSensorDataAll] = useState([]);
  const [selectedPeriod, setSelectPeriod] = useState(1);
  const [tempArray, setTempArray] = useState([]);
  const [vibrationArray, setVibrationArray] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  console.log({ selectedSensorID });
  const [shouldRefreshPeriodData, setShouldRefreshPeriodData] = useState(true);

  const { data, isError, isLoading, isSuccess, error, refetch } =
    useGetSensorDataByMacAddressQuery({
      macAddress: selectedSensorID,
      page,
      limit,
    });

  useEffect(() => {
    refetch();
  }, [page, limit, selectedSensorID]);
  useEffect(() => {
    if (isSuccess) {
      setSensorDataAll(data?.data);
      setShouldRefreshPeriodData((prev) => !prev);
      setSelectPeriod(1);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);
  // useEffect(() => {
  //   fetch(
  //     `${process.env.REACT_APP_BASE_URL}/customer/iot/get-sensor-data-paginate/${selectedSensorID}?page=${page}&limit=${limit}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         setSensorDataAll(data);
  //         setShouldRefreshPeriodData((prev) => !prev);
  //         setSelectPeriod(1);
  //       }
  //     });
  // }, [selectedSensorID, page, limit]);

  const handleChange = (event) => {
    setSelectPeriod(event?.target?.value);
  };
  useEffect(() => {
    const periodTempArray = sensorDataAll?.sensorData?.map(
      (sensor) => sensor?.temperature[selectedPeriod]
    );
    setTempArray(periodTempArray);
    const periodVibrationArray = sensorDataAll?.sensorData?.map(
      (sensor) => sensor?.vibration[selectedPeriod]
    );
    setVibrationArray(periodVibrationArray);
  }, [selectedPeriod, shouldRefreshPeriodData]);

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
          disabled={!Boolean(sensorDataAll?.nextPage)}
          onClick={() => setPage(sensorDataAll?.nextPage)}
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
          disabled={!Boolean(sensorDataAll?.prevPage)}
          onClick={() => setPage(sensorDataAll?.prevPage)}
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
          >
            {/* Sensor Data of No. {selectedSensorID} */}
          </Typography>
          <FormControl variant="filled" fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Period</InputLabel>
            <Select
              value={selectedPeriod}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={handleChange}
            >
              <MenuItem value={1}>Period 1</MenuItem>
              <MenuItem value={2}>Period 2</MenuItem>
              <MenuItem value={3}>Period 3</MenuItem>
              <MenuItem value={4}>Period 4</MenuItem>
              <MenuItem value={5}>Period 5</MenuItem>
              <MenuItem value={6}>Period 6</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
              }}
            >
              Machine Status
            </Typography>
            <Typography
              sx={{ color: "#F15F5F", fontSize: "14px", fontWeight: "600" }}
            >
              {sensorDataAll?.status}
            </Typography>
          </Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              padding: "16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
              }}
            >
              Temperature 1
            </Typography>
            <Typography
              sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
            >
              85° C
            </Typography>
          </Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              padding: "16px 32px",
            }}
          >
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
              }}
            >
              Vibration 1
            </Typography>
            <Typography
              sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "600" }}
            >
              22 Hz
            </Typography>
          </Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          {tempArray?.length > 0 && <TemperatureChart tempArray={tempArray} />}
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          {vibrationArray?.length > 0 && (
            <VibrationChart vibrationArray={vibrationArray} />
          )}
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SensorDataDetails;
