import { Cancel, Close, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect } from "react";
import { columns } from "./component/AssignServiceProviderModalConstant";
import { AppContext } from "../../../../../../../contextApi/appProvider";
import { usePatchSelectBidingWinnerMutation } from "../../../../../../../features/resGroup/resGroupSlice";
import { toast } from "react-toastify";

const AssignServiceProviderModal = ({
  assignServiceProviderModalOpens,
  setAssignServiceProviderModalOpens,
  allBids,
  reservationRequestGroup,
  refetchForGetALlResGroup,
}) => {
  const [setBidingWinner, { data, isError, error, isLoading, isSuccess }] =
    usePatchSelectBidingWinnerMutation();
  const { bid_id, setBid_id } = useContext(AppContext);

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      setBid_id(null);
      refetchForGetALlResGroup();
      setAssignServiceProviderModalOpens(false);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const handleAssign = () => {
    setBidingWinner({ reservationRequestGroup, bid: bid_id });
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={assignServiceProviderModalOpens}
    >
      <Container
        sx={{
          width: "60%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            Assign Service Provider
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setAssignServiceProviderModalOpens(
                !assignServiceProviderModalOpens
              );
            }}
          >
            <Close />
          </Button>
        </Box>
        {/* Service Provider Table */}
        <Box
          sx={{ background: "#FFFFFF", padding: "20px", borderRadius: "4px" }}
        >
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
                  width: "20%",
                  background: "#FFFFFF",
                  boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small-label">Area</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Area"
                  // onChange={handleChange}
                >
                  <MenuItem value={""}>0-250 meters</MenuItem>
                  <MenuItem value={""}>250-500 meters</MenuItem>
                  <MenuItem value={""}>1 kilometer</MenuItem>
                  <MenuItem value={""}>Select Area {">"}</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                size="small"
                sx={{
                  width: "20%",
                  background: "#FFFFFF",
                  boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                }}
              >
                <InputLabel id="demo-select-small-label">Status</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Status"
                  // onChange={handleChange}
                >
                  <MenuItem value={""}>Ongoing Jobs</MenuItem>
                  <MenuItem value={""}>Online</MenuItem>
                  <MenuItem value={""}>Offline</MenuItem>
                  <MenuItem value={""}>Suspended</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                size="small"
                sx={{
                  width: "20%",
                  background: "#FFFFFF",
                  boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                }}
              >
                <InputLabel id="demo-select-small-label">Newest</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Newest"
                  // onChange={handleChange}
                >
                  <MenuItem value={""}>Newest</MenuItem>
                  <MenuItem value={""}>Newest to Oldest</MenuItem>
                  <MenuItem value={""}>Oldest to Newest</MenuItem>
                  <MenuItem value={""}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {allBids.length > 0 && (
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
                rows={allBids?.map((data, id) => {
                  return { ...data, id };
                })}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            )}
          </Box>
        </Box>
        {/* Service Provider Table */}
        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setBid_id(null);
              setAssignServiceProviderModalOpens(
                !assignServiceProviderModalOpens
              );
            }}
            sx={{
              textTransform: "none",
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            sx={{
              textTransform: "none",
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Assign
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default AssignServiceProviderModal;
