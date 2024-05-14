import {
  Add,
  Category,
  CategoryOutlined,
  Download,
  MoreVert,
} from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem } from "@mui/material";

import { useState } from "react";
import IotData from "./iotData/IotData";
import { useStyle } from "./styles/iotStyle";
import IotTable from "./iotTable/IotTable";
import { StyledMenu } from "./styles/styleMenu";
import AddNewProductModal from "./component/AddNewProductModal";

const IotScreen = () => {
  const [addNewProductModalOpen, setAddNewProductModalOpen] = useState(false);
  const classes = useStyle();

  // const [newIot, setNewIot] = useState({
  //   iotProductId: "",
  //   macId: "",
  //   price: "",
  //   module: "",
  // });

  // const [csvFile, setCsvFile] = useState(null);
  // const inputRef = useRef();

  // function makeid(length) {
  //   let result = "";
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   const charactersLength = characters.length;
  //   let counter = 0;
  //   while (counter < length) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     counter += 1;
  //   }
  //   return result;
  // }

  // const uploadSingleIotData = () => {
  //   if (newIot.macId === "") {
  //     alert("Please provide the sensor MAC ID to continue");
  //     return;
  //   }
  //   if (newIot.price === "") {
  //     alert("Please provide price of the sensor to continue");
  //     return;
  //   }
  //   if (newIot.module === "") {
  //     alert("Please select the module of the sensor to continue");
  //     return;
  //   }

  //   let iotProductId = makeid(36);
  //   let macId = newIot.macId.toLowerCase();
  //   let price = newIot.price;
  //   let module = newIot.module;

  //   fetch("https://api.showaapp.com/admin/iot/add-sensor", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       iotProductId,
  //       macId,
  //       price,
  //       module,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOpen(false);
  //       alert("Successfully added new IoT Sensor");
  //     })
  //     .catch((error) => {
  //       alert("Error: " + error);
  //     });
  // };

  // const uploadCsvFile = () => {
  //   const formData = new FormData();
  //   formData.append("IotCsvFile", csvFile);

  //   axios
  //     .post("https://api.showaapp.com/admin/iot/add-iot-from-csv", formData)
  //     .then((res) => {
  //       console.log(res);
  //       setOpen(false);
  //       alert("IoT data uploaded successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Error : " + err);
  //     });
  // };

  // const handleSubmit = () => {
  //   if (csvFile) {
  //     uploadCsvFile();
  //   } else {
  //     uploadSingleIotData();
  //   }
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   setCsvFile(event.dataTransfer.files);
  // };

  return (
    <>
      {addNewProductModalOpen && (
        <AddNewProductModal
          addNewProductModalOpen={addNewProductModalOpen}
          setAddNewProductModalOpen={setAddNewProductModalOpen}
        />
      )}

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
                {" "}
                IOT
              </div>
            </div>
          </div>

          <div className={classes.buttonHolder}>
            <Button style={{ backgroundColor: "white", color: "black" }}>
              <Download />
              Import
            </Button>
            <div className={classes.spacerSmall} />
            <Button style={{ backgroundColor: "white", color: "black" }}>
              <CategoryOutlined /> Category
            </Button>
            <div className={classes.spacerSmall} />
            <Button
              style={{ backgroundColor: "#24459c", color: "white" }}
              onClick={() => {
                setAddNewProductModalOpen(!addNewProductModalOpen);
              }}
            >
              <Add />
              Add Product
            </Button>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "18px",
          }}
        >
          <IotData />
          <Box>
            <IotTable />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default IotScreen;
