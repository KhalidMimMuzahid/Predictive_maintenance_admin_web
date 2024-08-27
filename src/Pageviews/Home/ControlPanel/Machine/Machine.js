import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import AddBrandModal from "./modal/AddBrandModal";
import AddModelModal from "./modal/AddModelModal";
import { useGetControlPanelMachineBrandsQuery } from "../../../../features/predefined/predefinedSlice";

const useStyle = makeStyles((theme) => ({
  holder: {
    padding: theme.spacing(2),
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  spacerSmall: {
    width: "10px",
    height: "10px",
  },
  topHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableHolder: {
    width: "90%",
    backgroundColor: "white",
    padding: theme.spacing(2),
  },

  optionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#5A6872",
  },
  optionSubtitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#69677C",
  },

  input: {
    width: "100%",
    backgroundColor: "white",
  },

  addContainer: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    width: "400px",
    height: "200px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },
  saveButton: {
    backgroundColor: "#24459c",
    padding: "10px 35px",
    color: "white",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#F6F6F6",
    padding: "10px 35px",
    color: "#959596",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
}));

const Machine = () => {
  const classes = useStyle();
  const [addBrandModal, setAddBrandModal] = useState(false);
  const [addModelModal, setAddModelModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const {
    data: allMachineBrandsData,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetControlPanelMachineBrandsQuery();

  return (
    <>
      {addBrandModal && (
        <AddBrandModal
          addBrandModal={addBrandModal}
          setAddBrandModal={setAddBrandModal}
          refetch={refetch}
        />
      )}
      {addModelModal && (
        <AddModelModal
          addModelModal={addModelModal}
          setAddModelModal={setAddModelModal}
          selectedBrand={selectedBrand}
          allMachineBrandsData={allMachineBrandsData?.data}
          refetch={refetch}
        />
      )}
      <Box sx={{ padding: "40px" }}>
        <div className={classes.topHolder}>
          <div>
            <div className={classes.title}>Control Panel</div>
            <div className={classes.spacerSmall}></div>
            <div style={{ display: "flex" }}>
              <div
                style={{ color: "black", marginRight: "4px" }}
                className={classes.subtitle}
              >
                Dashboard /{" "}
              </div>
              <div
                style={{ color: "black", marginRight: "4px" }}
                className={classes.subtitle}
              >
                Control Panel /{" "}
              </div>
              <div style={{ color: "#24459c" }} className={classes.subtitle}>
                {" "}
                Machine
              </div>
            </div>
          </div>
        </div>

        <Box
          sx={{
            borderRadius: "4px",
            background: "white",
            padding: "24px 40px",
            marginTop: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Brand</div>
                <div className={classes.optionSubtitle}>
                  User Input’s Washing Machine’s Brand
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Brand"
                    onChange={(e) => setSelectedBrand(e?.target?.value)}
                  >
                    {allMachineBrandsData?.data?.brands?.map((brand, i) => (
                      <MenuItem key={i} value={brand?.brand}>
                        {brand?.brand}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddBrandModal(!addBrandModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Model</div>
                <div className={classes.optionSubtitle}>
                  User Input’s Washing Machine’s Model Name
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Select Model
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Model"
                    // onChange={handleChange}
                  >
                    {selectedBrand &&
                      allMachineBrandsData?.data?.brands
                        ?.find((brand) => brand?.brand === selectedBrand)
                        ?.models?.map((model) => (
                          <MenuItem value={model}>{model}</MenuItem>
                        ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    setAddModelModal(!addModelModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>
                  Type of Washing Machine
                </div>
                <div className={classes.optionSubtitle}>
                  User Input’s Washing Machine Type
                </div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth>
                  <TextField
                    select
                    id="demo-simple-select"
                    label="Washing Machine Type"
                    size="small"
                  >
                    {/* {areaType.length != 0 ? (
                areaType.map((area) => (
                  <MenuItem value={area}>{area}</MenuItem>
                ))
              ) : (
                <MenuItem value="no area">Area Type</MenuItem>
              )} */}
                  </TextField>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    // setAddAreaModal(!addAreaModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} md={3} lg={3}>
                <div className={classes.optionTitle}>Issue</div>
                <div className={classes.optionSubtitle}>User Input’s Issue</div>
              </Grid>

              <Grid item xs={8} sm={8} md={8} lg={8}>
                <FormControl fullWidth>
                  <TextField
                    select
                    id="demo-simple-select"
                    label="Select Issue"
                    size="small"
                  >
                    {/* {areaType.length != 0 ? (
                areaType.map((area) => (
                  <MenuItem value={area}>{area}</MenuItem>
                ))
              ) : (
                <MenuItem value="no area">Area Type</MenuItem>
              )} */}
                  </TextField>
                </FormControl>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1}>
                <IconButton
                  onClick={() => {
                    // setAddAreaModal(!addAreaModal);
                  }}
                >
                  <AddCircleOutline sx={{ color: "#24459C" }} />
                </IconButton>
              </Grid>
            </Grid>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "40px",
              gap: "8px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                padding: "4px 40px",
                background: "#F6F6F6",
                color: "#959596",
                borderRadius: "28px",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: "none",
                padding: "4px 40px",
                background: "#24459C",
                "&:hover": {
                  background: "#24459C",
                },
                color: "white",
                borderRadius: "28px",
                fontWeight: "bold",
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Machine;
