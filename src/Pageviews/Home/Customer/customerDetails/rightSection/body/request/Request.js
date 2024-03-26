import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestId from "./components/RequestId";

const Request = () => {
  // /customer/reservation/common/get-my-reservations/:uid

  const [requests, setRequests] = useState([]);
  const [isShowActionOption, SetIsShowActionOption] = useState(false);

  const params = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/reservation/common/get-my-reservations/${params?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        if (data?.connectedReservations) {
          const connectedReservations = data?.connectedReservations?.map(
            (each) => {
              return { ...each, type: "connected" };
            }
          );
          setRequests((prev) => [...prev, ...connectedReservations]);
        }
        if (data?.notconnectedReservations) {
          const notconnectedReservations = data?.notconnectedReservations?.map(
            (each) => {
              return { ...each, type: "not connected" };
            }
          );
          setRequests((prev) => [...prev, ...notconnectedReservations]);
        }

        // if (data?.success) {
        //   setRequests(data?.data);
        // } else {
        //   setRequests([]);
        // }
      });
  }, [params?.uid]);

  const columns = [
    {
      field: "washingMachineId",
      headerName: "REQUEST ID",
      width: 350,
      renderCell: (props) => (
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="p" sx={{ fontSize: "12px", color: "#25213B" }}>
            #{props.row.washingMachineId}
          </Typography>
        </Box>
      ),
    },
    {
      field: "createdAt",
      headerName: "WHEN",
      width: 300,
      renderCell: (props) => (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "2px",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: "12px", color: "#111827", fontWeight: "600" }}
          >
            {props?.row?.createdAt.split("T")[0]}
          </Typography>
          <Typography variant="p" sx={{ fontSize: "12px", color: "#6B7280" }}>
            {props?.row?.createdAt.split("T")[1]}
          </Typography>
        </Box>
      ),
    },
    {
      field: "problems",
      headerName: "MACHINE MODEL",
      width: 150,
      renderCell: (params) => (
        <Typography variant="p" sx={{ color: "#25213B", fontSize: "12px" }}>
          {params?.row?.problems[0]}
        </Typography>
      ),
    },
    {
      field: "assignedVendorId",
      headerName: "VENDOR NAME",
      width: 150,
      renderCell: (params) => (
        <Typography variant="p" sx={{ color: "#25213B", fontSize: "12px" }}>
          {params?.row?.assignedVendorId.length > 1
            ? params?.row?.assignedVendorId
            : "Not Yet"}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      renderCell: (params) => (
        <Typography
          variant="p"
          sx={{
            border: "1px solid #FFA503",
            color: "#FFA503",
            px: "16px",
            py: "4px",
            borderRadius: "20px",
            fontSize: "11px",
          }}
        >
          {params?.row?.status}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 100,
      renderCell: (props) => (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <FormControl fullWidth>
            <label
              onClick={() => SetIsShowActionOption(!isShowActionOption)}
              htmlFor="demo-simple-select"
            >
              <Button>ACTION</Button>
            </label>
            {isShowActionOption && (
              <select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Action"
              >
                <option value="view">VIEW</option>
                <option value="edit">EDIT</option>
              </select>
            )}
          </FormControl>
        </Box>
      ),
    },
  ];

  return (
    <div>
      <Box
        sx={{
          margin: "auto",
          padding: "0 20px",
        }}
      >
        <DataGrid
          rows={requests?.map((data, id) => {
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
      </Box>
    </div>
  );
};

export default Request;
