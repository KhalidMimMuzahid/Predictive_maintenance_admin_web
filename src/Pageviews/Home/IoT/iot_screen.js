import {
  Cancel,
  CategoryOutlined,
  Download,
  Search,
  Tune,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import IotData from "./iotData/IotData";
import { useStyle } from "./styles/iotStyle";
import IotTable from "./iotTable/IotTable";
import AddNewProductModal from "./component/AddNewProductModal";

const IotScreen = () => {
  const [isIOTRootPage, setIsIOTRootPage] = useState(true);
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

      <div style={{ padding: "40px" }}>
        <div className={classes.topHolder}>
          <div>
            <div className={classes.title}>IOT</div>
            <div className={classes.spacerSmall}></div>
            <div style={{ display: "flex", gap: "4px" }}>
              <div style={{ color: "black" }} className={classes.subtitle}>
                Dashboard /{" "}
              </div>
              <div
                style={{
                  color: isIOTRootPage ? "#24459c" : "black",
                }}
                className={classes.subtitle}
              >
                IOT
              </div>
              {isIOTRootPage === false && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ color: "black" }} className={classes.subtitle}>
                    /
                  </div>
                  <div
                    style={{ color: "#24459c", marginLeft: "2px" }}
                    className={classes.subtitle}
                  >
                    All IOT
                  </div>
                </Box>
              )}
            </div>
          </div>

          <div className={classes.buttonHolder}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "#24459C",
                textTransform: "none",
                borderRadius: "8px",
                padding: "6px 32px",
                fontWeight: "600",
              }}
            >
              <Download />
              Import
            </Button>
            <div className={classes.spacerSmall} />
            <Button
              sx={{
                backgroundColor: "#24459c",
                textTransform: "none",
                color: "white",
                borderRadius: "8px",
                padding: "6px 32px",
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
          {isIOTRootPage && <IotData />}
          <Box
            sx={{ background: "white", padding: "20px", borderRadius: "4px" }}
          >
            {isIOTRootPage ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 20px",
                }}
              >
                <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
                  Recent Products
                </Typography>
                <Button
                  sx={{ color: "#24459C", textTransform: "none" }}
                  onClick={() => setIsIOTRootPage(false)}
                >
                  See All
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  marginBottom: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Tune
                  sx={{
                    background: "#CED4DA",
                    padding: "8px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                />
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  placeholder="Start typing to search for IOT"
                  // value={searchText}
                  // onChange={(e) => setSearchText(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                        // onClick={() => {
                        //   setSearchText("");
                        //   setSmallSearchOpen(false);
                        // }}
                        >
                          <Cancel />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            )}
            <IotTable />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default IotScreen;
