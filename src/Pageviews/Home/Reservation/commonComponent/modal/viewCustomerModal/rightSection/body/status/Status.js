import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import editIcon from "../../../../../../../../../Assets/Home/customer/customer_edit.png";
import { useGetSensorModuleByMachineQuery } from "../../../../../../../../../features/sensorModuleAttached/sensorModuleAttachedSlice";
import { toast } from "react-toastify";
import SensorDataDetails from "./SensorDataDetails";

const Status = () => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetSensorModuleByMachineQuery("6644c77711556e95209e225e"); // Static _id
  const [sensorList, setSensorList] = useState([]);
  const [selectedSensorID, setSelectedSensorID] = useState(
    sensorList[0]?._id || null
  );

  useEffect(() => {
    if (isSuccess) {
      setSensorList(data?.data);

      setSelectedSensorID(data?.data[0]?.macAddress || null);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedSensorID(event.target.value);
  };

  return (
    <>
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
            Machine Status
          </Typography>
        </Box>
        <Box sx={{ padding: "16px 24px" }}>
          <Box>
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
              }}
            >
              Select Sensor
            </Typography>
            <FormControl
              variant="filled"
              fullWidth
              sx={{ m: 1, minWidth: 120 }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Sensor
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectedSensorID}
                onChange={handleChange}
                label="Sensor"
              >
                {sensorList?.map((sensorData, i) => (
                  <MenuItem key={i} value={sensorData?.macAddress}>
                    Sensor {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        {selectedSensorID && (
          <SensorDataDetails selectedSensorID={selectedSensorID} />
        )}
      </Box>
    </>
  );
};

export default Status;
