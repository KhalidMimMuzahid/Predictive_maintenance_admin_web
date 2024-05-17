import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cards from "./RequestVsTimeGraph/component/Cards";
import RequestVsTimeGraph from "./RequestVsTimeGraph/RequestVsTimeGraph";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import Loader from "../../../Utils/Loader";

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
  buttonHolder: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallMenuHolder: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  customerName: {
    color: "#25213B",
    fontSize: "14",
  },
  customerEmail: {
    color: "#6E6893",
    fontSize: "14",
  },
  yenText: {
    color: "#6E6893",
    fontSize: "12",
  },
  balance: {
    color: "#25213B",
    fontSize: "14",
  },
}));

const DashboardScreen = () => {
  const classes = useStyle();
  const [isLoading, setIsLoading] = useState(true);
  const [provider, setProvider] = useState("");
  const [departments, setDepartments] = useState("");
  const [months, setMonths] = useState("");
  const [items, setItems] = useState("");

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [isAdmin, setIsAdmin, adminData, setAdminData] = useIsAdmin(
    currentUser?.uid
  );
  console.log(adminData);

  const handleChange = (event) => {
    setProvider(event.target.value);
  };

  const handleSelectDepartment = (event) => {
    setDepartments(event.target.value);
  };
  const handleChandleSelectMonths = (event) => {
    setMonths(event.target.value);
  };
  const handleSelectAllItem = (event) => {
    setItems(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.holder}>
      <div className={classes.topHolder}>
        <div>
          <div className={classes.title}>Dashboard</div>
          <div className={classes.spacerSmall}></div>
          <Box sx={{ display: "flex", gap: "8px", marginY: "4px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Good Afternoon,
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#24459C" }}
            >
              {adminData?.data?.user?.showaUser?.name?.firstName +
                " " +
                adminData?.data?.user?.showaUser?.name?.lastName}
            </Typography>
          </Box>
        </div>
      </div>
      <Box
        sx={{
          backgroundColor: "white",
          paddingInline: "25px",
          paddingBottom: "50px",
          paddingTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}>
            Overview
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 220,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">All </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Providers"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 220,
                  backgroundColor: "#24459C",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "white" }}
                >
                  Add Item
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={items}
                  label="All Providers"
                  onChange={handleSelectAllItem}
                >
                  <MenuItem value={10}>All Departments</MenuItem>
                  <MenuItem value={20}>Maintenance</MenuItem>
                  <MenuItem value={30}>Revenue</MenuItem>
                  <MenuItem value={30}>Total Numbers</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Box>
        <Cards />
      </Box>

      <Box
        sx={{
          marginBlock: "20px",
          backgroundColor: "white",
          paddingInline: "25px",
          paddingBottom: "50px",
          paddingTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "#000000", fontSize: "24px", fontWeight: "400" }}>
            Comparison
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">KPI 1 </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Providers"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">KPI 2 </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Providers"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">KPI 3 </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={provider}
                  label="All Providers"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ongoing</MenuItem>
                  <MenuItem value={20}>Online</MenuItem>
                  <MenuItem value={30}>Offline</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button>
              <MoreHorizIcon />
            </Button>
          </div>
        </Box>
        <hr style={{ bgColor: "#E6EFF5", opacity: "25%" }} />
        <RequestVsTimeGraph />
      </Box>
    </div>
  );
};

export default DashboardScreen;
