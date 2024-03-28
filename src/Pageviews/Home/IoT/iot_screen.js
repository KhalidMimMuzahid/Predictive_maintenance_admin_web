import { Add, Category, Close, Dehaze, Delete, Download, Edit, MoreVert, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import {  useState } from "react";
import CsvUploaderLogo from "../../../Assets/Home/iot/csv_uploader_logo.svg";
import { useRef } from "react";
import axios from "axios";
import IotData from "./iotData/IotData";
import { useStyle } from "./styles/iotStyle";
import IotTable from "./iotTable/IotTable";
import { StyledMenu } from "./styles/styleMenu";

const IotScreen = () => {
  const classes = useStyle();
  const [isRootIOTPage, setIsRootIOTPage] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);
  const [newIot, setNewIot] = useState({
    iotProductId: "",
    macId: "",
    price: "",
    module: "",
  });

  const [csvFile, setCsvFile] = useState(null);
  const inputRef = useRef();

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const uploadSingleIotData = () => {
    if (newIot.macId === "") {
      alert("Please provide the sensor MAC ID to continue");
      return;
    }
    if (newIot.price === "") {
      alert("Please provide price of the sensor to continue");
      return;
    }
    if (newIot.module === "") {
      alert("Please select the module of the sensor to continue");
      return;
    }

    let iotProductId = makeid(36);
    let macId = newIot.macId.toLowerCase();
    let price = newIot.price;
    let module = newIot.module;

    fetch("https://api.showaapp.com/admin/iot/add-sensor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        iotProductId,
        macId,
        price,
        module,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpen(false);
        alert("Successfully added new IoT Sensor");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const uploadCsvFile = () => {
    const formData = new FormData();
    formData.append("IotCsvFile", csvFile);

    axios
      .post("https://api.showaapp.com/admin/iot/add-iot-from-csv", formData)
      .then((res) => {
        console.log(res);
        setOpen(false);
        alert("IoT data uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error : " + err);
      });
  };

  const handleSubmit = () => {
    if (csvFile) {
      uploadCsvFile();
    } else {
      uploadSingleIotData();
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setCsvFile(event.dataTransfer.files);
  };

  function displayCsvUploader() {
    if (csvFile)
      return (
        <div className={classes.csvFileContainer}>
          {Array.from(csvFile).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </div>
      );

    return (
      <div
        className={classes.csvEmptyHolder}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <img src={CsvUploaderLogo} />
        <div className={classes.spacerSmall} />
        <div>
          <input
            type="file"
            accept=".csv"
            onChange={(event) => setCsvFile(event.target.files)}
            hidden
            ref={inputRef}
          />
          <div
            style={{ color: "#000000", fontSize: "16px", fontWeight: "600" }}
          >
            Drop files here or click to upload.
          </div>
          <div
            style={{ color: "#009EF7", fontSize: "14px", fontWeight: "500" }}
          >
            You can upload from CSV file
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Modal open={open}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "24px", fontWeight: "700" }}>
              Add New IoT
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setOpen(false);
                setCsvFile(null);
              }}
            >
              <Close />
            </div>
          </div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                value={newIot.module}
                label="Module"
                size="small"
                onChange={(e) => {
                  setNewIot({ ...newIot, module: e.target.value });
                }}
              >
                <MenuItem value="Module 1">Module 1</MenuItem>
                <MenuItem value="Module 2">Module 2</MenuItem>
                <MenuItem value="Module 3">Module 3</MenuItem>
                <MenuItem value="Module 4">Module 4</MenuItem>
              </TextField>
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                placeholder="MAC ID"
                label="MAC ID"
                onChange={(e) => {
                  setNewIot({ ...newIot, macId: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                label="Price (Yen)"
                placeholder="Price (Yen)"
                onChange={(e) => {
                  setNewIot({ ...newIot, price: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />
          </div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div>{displayCsvUploader()}</div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div
              className={classes.cancelButton}
              onClick={(e) => {
                setOpen(false);
                setCsvFile(null);
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                handleSubmit();
                setCsvFile(null);
              }}
            >
              Save
            </div>
          </div>
        </Container>
      </Modal>

      <div className={classes.holder}>
        <div className={classes.topHolder}>
          <div>
            <div className={classes.title}>IoT</div>
            <div className={classes.spacerSmall}></div>
            <div style={{ display: "flex" }}>
              <div style={{ color: "black" }} className={classes.subtitle}>
                Dashboard /{" "}
              </div>
              <div style={{ color: "#24459c" }} className={classes.subtitle}>
                IOT
              </div>
            </div>
          </div>

          <div className={classes.buttonHolder}>
            <Button style={{ backgroundColor: "white", color: "black" }}>
              Import
            </Button>
            <div className={classes.spacerSmall} />
            <Button style={{ backgroundColor: "white", color: "black" }}>
              Category
            </Button>
            <div className={classes.spacerSmall} />
            <Button
              style={{ backgroundColor: "#24459c", color: "white" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Add Product
            </Button>
          </div>

          <div className={classes.smallMenuHolder}>
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={openEl}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <Download style={{ color: "#313E6A" }} />
                <div className={classes.spacerSmall} />
                Import
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <Category style={{ color: "#313E6A" }} />
                <div className={classes.spacerSmall} />
                Category
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setOpen(true);
                  handleClose();
                }}
              >
                <Add style={{ color: "#313E6A" }} />
                <div className={classes.spacerSmall} />
                Add Product
              </MenuItem>
            </StyledMenu>
          </div>
        </div>

        <div className={classes.spacerSmall}></div>
        <div className={classes.spacerSmall}></div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {isRootIOTPage && (
            <Box sx={{}}>
              <IotData />
            </Box>
          )}

          <div className={classes.tableHolder}>
            <IotTable />
          </div>
        </Box>
      </div>
    </>
  );
};

export default IotScreen;