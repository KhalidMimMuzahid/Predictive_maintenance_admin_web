import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import SensorDataDetails from "./sensorDataDetails/SensorDataDetails";
import { useGetSensorModuleByMachineQuery } from "../../../../../../../../features/sensorModuleAttached/sensorModuleAttachedSlice";
import { toast } from "react-toastify";

const SensorDataModal = ({ sensorDataOpen, setSensorDataOpen, props }) => {
  const { data, isError, isLoading, isSuccess, error } =
    useGetSensorModuleByMachineQuery(props?.row?._id);
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

  // useEffect(() => {
  //   fetch(
  //     `${
  //       process.env.REACT_APP_BASE_URL
  //     }/customer/iot/get-sensor-list-with-washing-machine-id/${"66012496388cbec918c26a1f"}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         setSensorList(data?.data);

  //         setSelectedSensorID(data?.data[0]?._id || null);
  //       }
  //     });
  // }, [props?.row?._id]);
  // useEffect(() => {
  //   setSelectedSensorID(sensorList[0]?._id || null);
  // }, [selectedSensorID]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedSensorID(event.target.value);
  };

  return (
    <Modal
      sx={{
        width: "100%",
        overflow: "scroll",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={sensorDataOpen}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            Sensor Data
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setSensorDataOpen(!sensorDataOpen);
            }}
          >
            <Close />
          </Button>
        </Box>
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
          <FormControl variant="filled" fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Sensor</InputLabel>
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

        {selectedSensorID && (
          <SensorDataDetails selectedSensorID={selectedSensorID} />
        )}
      </Container>
    </Modal>
  );
};

export default SensorDataModal;
