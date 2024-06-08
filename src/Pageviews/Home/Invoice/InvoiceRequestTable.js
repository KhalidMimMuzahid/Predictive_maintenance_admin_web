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
import React, { useContext, useState } from "react";
import { columns } from "./component/constant";
import { AppContext } from "../../../contextApi/appProvider";
import { Cancel, Search } from "@mui/icons-material";
import { useGetAllInvoiceQuery } from "../../../features/invoice/invoiceSlice";
import Loader from "../../../Utils/Loader";

const InvoiceRequestTable = ({
  isRootInvoiceScreen,
  setIsRootInvoiceScreen,
}) => {
  const { setDownloadData } = useContext(AppContext);
  const { data: allInvoiceData, isLoading, isError } = useGetAllInvoiceQuery();
  console.log(allInvoiceData);

  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      {isRootInvoiceScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                background: "#26C1C9",
                width: "18px",
                height: "18px",
                borderRadius: "2px",
              }}
            />
            <Typography
              sx={{ color: "#5A6872", fontSize: "14px", fontWeight: "600" }}
            >
              All Invoice Request
            </Typography>
          </Box>
          <Button
            onClick={() => setIsRootInvoiceScreen(false)}
            sx={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#24459C",
              textTransform: "none",
            }}
          >
            See All
          </Button>
        </Box>
      )}
      {!isRootInvoiceScreen && (
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
                width: "12%",
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
                width: "12%",
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
        </Box>
      )}

      {isLoading && <Loader />}
      {/* Table */}
      {allInvoiceData?.data?.length > 0 ? (
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
          rows={allInvoiceData?.data?.map((data, id) => {
            return { ...data, id };
          })}
          columns={columns}
          rowHeight={61}
          pageSize={5}
          rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
              };
            });
            setDownloadData({ selectedRowData, fileName: "Invoice Request" });
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "600", fontSize: "24px", color: "#F15F5F" }}
          >
            No Invoice
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InvoiceRequestTable;
