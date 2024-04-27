import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CsvUploaderLogo from "../../../../Assets/Home/iot/csv_uploader_logo.svg";

const AddNewProductModal = ({
  addNewProductModalOpen,
  setAddNewProductModalOpen,
}) => {
  const [csvFile, setCsvFile] = useState(null);
  const [singleIotData, setSingleIotData] = useState({
    name: "",
    module: "",
    macID: "",
    price: "",
  });
  const inputRef = useRef();
  const [newIot, setNewIot] = useState({});

  function displayCsvUploader() {
    if (csvFile)
      return (
        <div>
          {Array.from(csvFile).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </div>
      );
  }

  const uploadSingleIotData = () => {
    // let macId = newIot.macId.toLowerCase();
    // let price = newIot.price;
    // let module = newIot.module;
    // fetch("https://api.showaapp.com/admin/iot/add-sensor", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     iotProductId,
    //     macId,
    //     price,
    //     module,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setOpen(false);
    //     alert("Successfully added new IoT Sensor");
    //   })
    //   .catch((error) => {
    //     alert("Error: " + error);
    //   });
  };

  const uploadCsvFile = () => {
    // const formData = new FormData();
    // formData.append("IotCsvFile", csvFile);
    // axios
    //   .post("https://api.showaapp.com/admin/iot/add-iot-from-csv", formData)
    //   .then((res) => {
    //     console.log(res);
    //     setOpen(false);
    //     alert("IoT data uploaded successfully");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Error : " + err);
    //   });
  };

  const handleSubmit = () => {
    if (singleIotData?.name === "") {
      alert("Please provide the Sensor name");
      return;
    } else if (singleIotData?.module === "") {
      alert("Please provide the module");
      return;
    } else if (singleIotData?.macID === "") {
      alert("Please provide macID");
      return;
    } else if (singleIotData?.price === "") {
      alert("Please provide the price");
      return;
    } else {
      console.log(singleIotData);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
    setCsvFile(event.dataTransfer.files);
  };

  let fileName;
  if (csvFile) {
    fileName = csvFile[0]?.name;
  } else {
    fileName = "Drop files here or click to upload.";
  }
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addNewProductModalOpen}
    >
      <Container
        sx={{
          width: "35%",
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
            Add IoT Sensor
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
              setAddNewProductModalOpen(!addNewProductModalOpen);
              //   setCsvFile(null);
            }}
          >
            <Close />
          </Button>
        </Box>

        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "16px",
          }}
        >
          <TextField
            onChange={(e) =>
              setSingleIotData({ ...singleIotData, name: e.target.value })
            }
            sx={{ background: "#F6F6F6" }}
            id="outlined-basic"
            size="medium"
            label="Sensor Name"
            variant="outlined"
          />
          <TextField
            sx={{ background: "#F6F6F6" }}
            select
            id="demo-simple-select"
            label="Module"
            size="medium"
            onChange={(e) =>
              setSingleIotData({ ...singleIotData, module: e.target.value })
            }
          >
            <MenuItem value="Module 1">Module 1</MenuItem>
            <MenuItem value="Module 2">Module 2</MenuItem>
            <MenuItem value="Module 3">Module 3</MenuItem>
            <MenuItem value="Module 4">Module 4</MenuItem>
          </TextField>

          <TextField
            sx={{ background: "#F6F6F6" }}
            size="medium"
            placeholder="MAC ID"
            label="MAC ID"
            onChange={(e) =>
              setSingleIotData({ ...singleIotData, macAddress: e.target.value })
            }
          />

          <TextField
            sx={{ background: "#F6F6F6" }}
            size="medium"
            label="Price (Yen)"
            placeholder="Price (Yen)"
            onChange={(e) => {
              setSingleIotData({ ...singleIotData, price: e.target.value });
            }}
          />
          <Box
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => inputRef.current.click()}
            sx={{
              display: "flex",
              gap: "10px",
              background: "#F1FAFF",
              padding: "8px 14px",
              border: "dashed 1px #009EF7",
              borderRadius: "7px",
              cursor: "pointer",
            }}
          >
            <img src={CsvUploaderLogo} alt="" />
            <Box>
              <input
                type="file"
                accept=".csv"
                onChange={(event) => setCsvFile(event.target.files)}
                hidden
                ref={inputRef}
              />
              <Box
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {fileName}
              </Box>
              <Box
                style={{
                  color: "#009EF7",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                You can upload CSV file
              </Box>
            </Box>
          </Box>
        </FormControl>

        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setAddNewProductModalOpen(!addNewProductModalOpen);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "white",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit()}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default AddNewProductModal;
