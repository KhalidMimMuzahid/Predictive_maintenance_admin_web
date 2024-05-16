import { CategoryOutlined, Download } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import IotData from "./iotData/IotData";
import { useStyle } from "./styles/iotStyle";
import IotTable from "./iotTable/IotTable";
import AddNewProductModal from "./component/AddNewProductModal";

const IotScreen = () => {
  const [addNewProductModalOpen, setAddNewProductModalOpen] = useState(false);
  const classes = useStyle();

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
            <div className={classes.title}>IOT</div>
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
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "8px",
              }}
            >
              <Download />
              Import
            </Button>
            <div className={classes.spacerSmall} />
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                color: "#24459C",
              }}
            >
              <CategoryOutlined /> Category
            </Button>
            <div className={classes.spacerSmall} />
            <Button
              sx={{
                backgroundColor: "#24459c",
                color: "white",
                borderRadius: "8px",
                "&:hover": {
                  background: "#24459C",
                },
              }}
              onClick={() => {
                setAddNewProductModalOpen(!addNewProductModalOpen);
              }}
            >
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
          <Box
            sx={{ background: "white", padding: "20px", borderRadius: "4px" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
                Recent Products
              </Typography>
              <Button sx={{ color: "#24459C" }}>See All</Button>
            </Box>
            <IotTable />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default IotScreen;
