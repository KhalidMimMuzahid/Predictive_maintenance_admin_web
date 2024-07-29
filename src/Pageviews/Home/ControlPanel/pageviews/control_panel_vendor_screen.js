import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

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
    width: "100%",
    backgroundColor: "white",
  },
}));

const ControlPanelVendorScreen = () => {
  const classes = useStyle();

  return (
    <Box sx={{ padding: "40px" }}>
      <div>
        <div className={classes.title}>Control Panel</div>
        <div className={classes.spacerSmall}></div>
        <div style={{ display: "flex" }}>
          <div
            style={{ color: "black", marginRight: "4px" }}
            className={classes.subtitle}
          >
            Dashboard /
          </div>
          <div
            style={{ color: "black", marginRight: "4px" }}
            className={classes.subtitle}
          >
            Control Panel /
          </div>
          <div style={{ color: "#24459c" }} className={classes.subtitle}>
            Vendor
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
        <Grid container sx={{ alignItems: "center", marginY: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "25%",
            }}
          >
            <Typography
              sx={{ color: "#5A6872", fontSize: "18px", fontWeight: "600" }}
            >
              Type of Account
            </Typography>
            <Typography
              sx={{ color: "#69677C", fontSize: "16px", fontWeight: "500" }}
            >
              User Inputs Washing Machine Brand
            </Typography>
          </Box>

          <Grid item xs={8} sm={8} md={8} lg={8}>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                label="Select Brand"
                size="small"
                // value={currentBrand}
                onChange={(e) => {
                  //   setCurrentBrand(e.target.value);
                }}
              >
                {/* {brand.length != 0 ? (
                  brand.map((branditem) => (
                    <MenuItem value={branditem.name}>{branditem.name}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="no brand">Select Brand</MenuItem>
                )} */}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}>
            <IconButton
              onClick={() => {
                // setBrandOpen(true);
              }}
            >
              <AddCircleOutline sx={{ color: "#24459C" }} />
            </IconButton>
          </Grid>
        </Grid>
        <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        <Grid container sx={{ alignItems: "center", marginY: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "25%",
            }}
          >
            <Typography
              sx={{ color: "#5A6872", fontSize: "18px", fontWeight: "600" }}
            >
              Bank
            </Typography>
            <Typography
              sx={{ color: "#69677C", fontSize: "16px", fontWeight: "500" }}
            >
              User Input’s Bank Type
            </Typography>
          </Box>

          <Grid item xs={8} sm={8} md={8} lg={8}>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                label="Bank Type"
                size="small"
                // value={currentBrand}
                onChange={(e) => {
                  //   setCurrentBrand(e.target.value);
                }}
              >
                {/* {brand.length != 0 ? (
                  brand.map((branditem) => (
                    <MenuItem value={branditem.name}>{branditem.name}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="no brand">Select Brand</MenuItem>
                )} */}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}>
            <IconButton
              onClick={() => {
                // setBrandOpen(true);
              }}
            >
              <AddCircleOutline sx={{ color: "#24459C" }} />
            </IconButton>
          </Grid>
        </Grid>
        <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        <Grid container sx={{ alignItems: "center", marginY: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "25%",
            }}
          >
            <Typography
              sx={{ color: "#5A6872", fontSize: "18px", fontWeight: "600" }}
            >
              Type of Branch
            </Typography>
            <Typography
              sx={{ color: "#69677C", fontSize: "16px", fontWeight: "500" }}
            >
              User Input’s Branch Type
            </Typography>
          </Box>

          <Grid item xs={8} sm={8} md={8} lg={8}>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                label="Branch Type"
                size="small"
                // value={currentBrand}
                onChange={(e) => {
                  //   setCurrentBrand(e.target.value);
                }}
              >
                {/* {brand.length != 0 ? (
                  brand.map((branditem) => (
                    <MenuItem value={branditem.name}>{branditem.name}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="no brand">Select Brand</MenuItem>
                )} */}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}>
            <IconButton
              onClick={() => {
                // setBrandOpen(true);
              }}
            >
              <AddCircleOutline sx={{ color: "#24459C" }} />
            </IconButton>
          </Grid>
        </Grid>
        <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
        <Grid container sx={{ alignItems: "center", marginY: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "25%",
            }}
          >
            <Typography
              sx={{ color: "#5A6872", fontSize: "18px", fontWeight: "600" }}
            >
              Online Shop
            </Typography>
            <Typography
              sx={{ color: "#69677C", fontSize: "16px", fontWeight: "500" }}
            >
              User Input’s Online Shop Type
            </Typography>
          </Box>

          <Grid item xs={8} sm={8} md={8} lg={8}>
            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                label="Online Shop Type"
                size="small"
                // value={currentBrand}
                onChange={(e) => {
                  //   setCurrentBrand(e.target.value);
                }}
              >
                {/* {brand.length != 0 ? (
                  brand.map((branditem) => (
                    <MenuItem value={branditem.name}>{branditem.name}</MenuItem>
                  ))
                ) : (
                  <MenuItem value="no brand">Select Brand</MenuItem>
                )} */}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}>
            <IconButton
              onClick={() => {
                // setBrandOpen(true);
              }}
            >
              <AddCircleOutline sx={{ color: "#24459C" }} />
            </IconButton>
          </Grid>
        </Grid>
        <hr style={{ bgColor: "#E6E8F0", opacity: "25%" }} />
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
  );
};

export default ControlPanelVendorScreen;
