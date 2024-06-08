import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { React, useState } from "react";
import GroupTableData from "./GroupTableData/GroupTableData";
import ReservationRequestTable from "./ReservationRequestTable/ReservationRequestTable.js";
import Loader from "../../../../../Utils/Loader.js";

const AllGroupTable = ({
  isBidsRootScreen,
  setIsBidsRootScreen,
  resGroupData,
  isLoading,
  refetchForGetALlResGroup,
}) => {
  const [groupExpanded, setGroupExpanded] = useState(null);

  // console.table(resGroupData?.data);

  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      {isBidsRootScreen && (
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
              All Bidding
            </Typography>
          </Box>
          <Button
            onClick={() => setIsBidsRootScreen(false)}
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
      {!isBidsRootScreen && (
        <Box
          sx={{
            background: "#FAF8F8",
            padding: "12px 48px",
          }}
        >
          <Box
            sx={{
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

      <Box>
        {resGroupData?.data?.length > 0 ? (
          <table style={{ width: "100%" }}>
            <tr style={{ borderTop: "1px solid #D9D9D9" }}>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",
                  textAlign: "start",
                  padding: "14px",
                }}
              >
                CUSTOMER NAME
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                REQUEST ID
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "center",
                  padding: "14px",
                }}
              >
                STATUS
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                SCHEDULE
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                MACHINE TYPE
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                LOCATION
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                INVOICE
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                ISSUES
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",
                  textAlign: "center",
                  padding: "14px",
                }}
              >
                ASSIGN
              </th>
              <th
                style={{
                  background: "#F4F2FF",
                  color: "#6E6893",

                  textAlign: "start",
                  padding: "14px",
                }}
              >
                Action
              </th>
            </tr>
            {isLoading && <Loader />}
            <tbody style={{ borderBottom: "1px solid #D9D9D9" }}>
              {resGroupData?.data?.map((resGroup) => (
                <>
                  <GroupTableData
                    resGroup={resGroup}
                    groupExpanded={groupExpanded}
                    setGroupExpanded={setGroupExpanded}
                    refetchForGetALlResGroup={refetchForGetALlResGroup}
                  />
                  {resGroup?.groupId === groupExpanded && (
                    <ReservationRequestTable
                      reservationData={resGroup?.reservationRequests}
                    />
                  )}
                </>
              ))}
            </tbody>
          </table>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>No Data Found</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AllGroupTable;
