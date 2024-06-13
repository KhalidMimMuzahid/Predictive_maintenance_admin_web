import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Cancel, Search } from "@mui/icons-material";
import WithDrawRequestTable from "./WithDrawRequestTable";

const WithdrawRequest = () => {
  const allTransaction = [
    {
      customer: {
        customerName: "John Doe",
        phone: "123-456-7890",
      },
      transaction_type: "Transfer",
      amount_point_mb: 4500,
      transaction_id: "T001",
      date: {
        date: "2024-06-12",
        time: "14:30",
      },
    },
    {
      customer: {
        customerName: "Jane Smith",
        phone: "234-567-8901",
      },
      transaction_type: "Receive",
      amount_point_mb: 5000,
      transaction_id: "T002",
      date: {
        date: "2024-06-12",
        time: "15:45",
      },
    },
    {
      customer: {
        customerName: "Alice Johnson",
        phone: "345-678-9012",
      },
      transaction_type: "Add Money",
      amount_point_mb: 6000,
      transaction_id: "T003",
      date: {
        date: "2024-06-12",
        time: "16:00",
      },
    },
    {
      customer: {
        customerName: "Bob Brown",
        phone: "456-789-0123",
      },
      transaction_type: "Transfer",
      amount_point_mb: 4000,
      transaction_id: "T004",
      date: {
        date: "2024-06-12",
        time: "16:30",
      },
    },
    {
      customer: {
        customerName: "Carol White",
        phone: "567-890-1234",
      },
      transaction_type: "Receive",
      amount_point_mb: 5500,
      transaction_id: "T005",
      date: {
        date: "2024-06-12",
        time: "17:00",
      },
    },
    {
      customer: {
        customerName: "Dave Green",
        phone: "678-901-2345",
      },
      transaction_type: "Add Money",
      amount_point_mb: 4800,
      transaction_id: "T006",
      date: {
        date: "2024-06-12",
        time: "17:30",
      },
    },
    {
      customer: {
        customerName: "Eve Black",
        phone: "789-012-3456",
      },
      transaction_type: "Transfer",
      amount_point_mb: 4200,
      transaction_id: "T007",
      date: {
        date: "2024-06-12",
        time: "18:00",
      },
    },
    {
      customer: {
        customerName: "Frank Yellow",
        phone: "890-123-4567",
      },
      transaction_type: "Receive",
      amount_point_mb: 5300,
      transaction_id: "T008",
      date: {
        date: "2024-06-12",
        time: "18:30",
      },
    },
    {
      customer: {
        customerName: "Grace Blue",
        phone: "901-234-5678",
      },
      transaction_type: "Add Money",
      amount_point_mb: 5900,
      transaction_id: "T009",
      date: {
        date: "2024-06-12",
        time: "19:00",
      },
    },
    {
      customer: {
        customerName: "Hank Red",
        phone: "012-345-6789",
      },
      transaction_type: "Transfer",
      amount_point_mb: 4400,
      transaction_id: "T010",
      date: {
        date: "2024-06-12",
        time: "19:30",
      },
    },
  ];
  return (
    <Box sx={{ padding: "40px" }}>
      <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
        Wallet
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Typography>Dashboard / </Typography>
        <Typography>Wallet / </Typography>
        <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
          Withdraw Request
        </Typography>
      </Box>
      <Box sx={{ padding: "20px", marginTop: "12px", background: "white" }}>
        <Box>
          <Box>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              placeholder="Search..."
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
            <Box
              sx={{
                background: "#FAF8F8",
                padding: "12px 48px",
                display: "flex",
                gap: "0px 12px",
              }}
            >
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Area</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  //   value={provider}
                  label="Area"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"0-250 meters"}>0-250 meters</MenuItem>
                  <MenuItem value={"250-500 meters"}>250-500 meters</MenuItem>
                  <MenuItem value={"1 kilometer"}>1 kilometer</MenuItem>
                  <MenuItem value={""}>Select Area {">"}</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Status</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  //   value={provider}
                  label="Status"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Ongoing Jobs"}>Ongoing Jobs</MenuItem>
                  <MenuItem value={"Online"}>Online</MenuItem>
                  <MenuItem value={"Offline"}>Offline</MenuItem>
                  <MenuItem value={"Suspended"}>Suspended</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 180,
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Newest</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  //   value={provider}
                  label="Newest"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Newest"}>Newest</MenuItem>
                  <MenuItem value={"Newest to Oldest"}>
                    Newest to Oldest
                  </MenuItem>
                  <MenuItem value={"Oldest to Newest"}>
                    Oldest to Newest
                  </MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <WithDrawRequestTable allTransaction={allTransaction} />
      </Box>
    </Box>
  );
};

export default WithdrawRequest;
