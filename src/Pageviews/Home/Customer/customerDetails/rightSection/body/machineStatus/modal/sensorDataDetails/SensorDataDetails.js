import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";

const SensorDataDetails = ({ selectedSensorID }) => {
  const [sensorDataAll, setSensorDataAll] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/iot/get-sensor-data-paginate/6601218b388cbec918c1f815?page=1&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setSensorDataAll(data);
        }
      });
  }, []);

  const newArray = sensorDataAll?.sensorData?.map(
    (sensor) => sensor?.temperature1
  );
  console.log(newArray);

  return (
    <Box sx={{ padding: "16px 16px" }}>
      <Box>
        <Box>
          <Typography
            sx={{
              color: "#5A6B85",
              fontSize: "18px",
              fontWeight: "700",
              padding: "16px 12px",
            }}
          >
            Sensor Data of. {selectedSensorID}
          </Typography>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
                textAlign: "start",
                padding: "10px 32px 0 32px",
              }}
            >
              Temperature Chart
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 18, 22, 26, 30] }]}
              series={[
                {
                  data: [30, 42, 8, 45, 30, 31, 15, 35, 40, 39, 30, 38],
                },
              ]}
              width={500}
              height={200}
            />
          </Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#111827",
                fontSize: "14px",
                fontWeight: "600",
                width: "40%",
                textAlign: "start",
                padding: "10px 32px 0 32px",
              }}
            >
              Vibration Chart
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 18, 22, 26, 30] }]}
              series={[
                {
                  data: [30, 42, 8, 45, 30, 31, 15, 35, 40, 39, 30, 38],
                },
              ]}
              width={500}
              height={200}
            />
          </Box>
          <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SensorDataDetails;
