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
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./component/constant";
import { useGetServiceProvidersQuery } from "../../../../features/serviceProvider/serviceProviderSlice";
import Loader from "../../../../Utils/Loader";
import { Cancel, Search } from "@mui/icons-material";

const ServiceProviderTable = ({
  isRootServiceProviderPage,
  setIsRootServiceProviderPage,
}) => {
  const {
    data: serviceProvidersData,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useGetServiceProvidersQuery();
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "4px",
        marginTop: "8px",
        padding: "20px",
      }}
    >
      {isRootServiceProviderPage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#5A6872", fontWeight: "600" }}>
            Recent Customers
          </Typography>
          <Button
            sx={{
              color: "#24459C",
              textTransform: "none",
              fontWeight: "500",
            }}
            onClick={() => setIsRootServiceProviderPage(false)}
          >
            See All
          </Button>
        </Box>
      )}
      {isRootServiceProviderPage === false && (
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
              size="small"
              sx={{
                width: "12%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={"0-250 meters"}>0-250 meters</MenuItem>
                <MenuItem value={"250-500 meters"}>250-500 meters</MenuItem>
                <MenuItem value={"1 kilometer"}>1 kilometer</MenuItem>
                <MenuItem value={""}>Select Area {">"}</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              size="small"
              sx={{
                width: "15%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={"Ongoing Jobs"}>Ongoing Jobs</MenuItem>
                <MenuItem value={"Online"}>Online</MenuItem>
                <MenuItem value={"Offline"}>Offline</MenuItem>
                <MenuItem value={"Suspended"}>Suspended</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              size="small"
              sx={{
                width: "15%",
                background: "#FFFFFF",
                boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
              }}
            >
              <InputLabel id="demo-simple-select-label">Newest</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={"Newest"}>Newest</MenuItem>
                <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
                <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
                <MenuItem value={"Oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      )}
      <Box sx={{ marginTop: "10px" }}>
        {isLoading && <Loader />}
        {serviceProvidersData?.data?.length > 0 && (
          <DataGrid
            sx={{
              borderRadius: "0px",
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                fontWeight: 1000,
                borderRadius: "0",
                borderTop: "1px solid #D9D9D9",
                background: "#F4F2FF",
              },
            }}
            rows={serviceProvidersData?.data?.map((data, id) => {
              return { ...data, id };
            })}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        )}
      </Box>
    </Box>
  );
};

export default ServiceProviderTable;
