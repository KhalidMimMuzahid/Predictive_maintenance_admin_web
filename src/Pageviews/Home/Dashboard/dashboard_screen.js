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
import { getAuth } from "firebase/auth";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import Loader from "../../../Utils/Loader";
import { MoreHoriz } from "@mui/icons-material";
import SelectDateModal from "./components/modal/SelectDateModal";
import { useSelector } from "react-redux";

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
  const [adminName, setAdminName] = useState("");
  const [selectDateModal, setSelectDateModal] = useState(false);
  const [selectDate, setSelectDate] = useState("");

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [isAdmin, setIsAdmin, adminData, setAdminData] = useIsAdmin(
    currentUser?.uid
  );
  const { user } = useSelector((state) => state.auth);

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
  const { width, breakpoint } = useSelector((state) => state.browser);
  console.log(width, breakpoint);
  return (
    <div style={{ padding: "40px" }}>
      {selectDateModal && (
        <SelectDateModal
          selectDateModal={selectDateModal}
          setSelectDateModal={setSelectDateModal}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Good Afternoon / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              {user?.showaUser?.name
                ? user?.showaUser?.name?.firstName +
                  " " +
                  user?.showaUser?.name?.lastName
                : "Admin"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
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
                <InputLabel id="demo-select-small-label">
                  All Providers
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={""}
                  label="All Providers"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"offline"}>Offline</MenuItem>
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
                <InputLabel id="demo-select-small-label">
                  All Departments
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="All Departments"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"all_departments"}>All Departments</MenuItem>
                  <MenuItem value={"maintenance"}>Maintenance</MenuItem>
                  <MenuItem value={"revenue"}>Revenue</MenuItem>
                  <MenuItem value={"total_numbers"}>Total Numbers</MenuItem>
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
                <InputLabel id="demo-select-small-label">Jan - Dec</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="Jan - Dec"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"jan_march"}>Jan - March</MenuItem>
                  <MenuItem value={"march_september"}>
                    March - September
                  </MenuItem>
                  <MenuItem value={"october_november"}>
                    October - November
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button>
              <MoreHoriz />
            </Button>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          marginTop: "16px",
          borderRadius: "4px",
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
                <InputLabel id="demo-select-small-label">All</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="All"
                  // onChange={handleChange}
                >
                  <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"offline"}>Offline</MenuItem>
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
                  // value={items}
                  label="All Item"
                  // onChange={handleSelectAllItem}
                >
                  <MenuItem value={"all_departments"}>All Departments</MenuItem>
                  <MenuItem value={"maintenance"}>Maintenance</MenuItem>
                  <MenuItem value={"revenue"}>Revenue</MenuItem>
                  <MenuItem value={"total_numbers"}>Total Numbers</MenuItem>
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
          borderRadius: "4px",
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
                <InputLabel id="demo-select-small-label">KPI 1</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="KPI 1"
                  // onChange={handleChange}
                >
                  <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"offline"}>Offline</MenuItem>
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
                <InputLabel id="demo-select-small-label">KPI 2</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="KPI 2"
                  // onChange={handleChange}
                >
                  <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"offline"}>Offline</MenuItem>
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
                <InputLabel id="demo-select-small-label">Duration</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={provider}
                  label="KPI 3"
                  // onChange={handleChange}
                >
                  <MenuItem>
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#585858",
                        padding: "0px",
                      }}
                      onClick={() => setSelectDateModal(!selectDateModal)}
                    >
                      Select Date
                    </Button>
                  </MenuItem>
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
