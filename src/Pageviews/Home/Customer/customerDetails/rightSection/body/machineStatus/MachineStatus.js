import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import machineIcon from "../../../../../../../Assets/Home/customer/machine.png";

const MachineStatus = () => {
  const [machine, setMachine] = useState([]);
  const [isShowActionOption, SetIsShowActionOption] = useState(false);

  const uid = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/${uid?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setMachine(data?.data);
        } else {
          setMachine([]);
        }
      });
  }, [uid?.uid]);

  const columns = [
    {
      field: "name",
      headerName: "MACHINE",
      width: 350,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0 16px",
          }}
        >
          <Box
            sx={{
              width: "36px",
              height: "36px",
              borderRadius: "100%",
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={machineIcon} alt="" />
          </Box>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
            >
              {params.row.name}
            </Typography>
            <Typography variant="p" sx={{ fontSize: "12px", color: "#6E6893" }}>
              {params.row.uid}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: "address",
      headerName: "MAC ADDRESS",
      width: 300,
      renderCell: (props) => (
        <Typography
          sx={{ color: "#25213B", fontSize: "14px", fontWeight: "400" }}
        >
          {props?.row?.address}
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
            bgcolor: "#2FD573",
            color: "#FFFFFF",
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
      field: "environment",
      headerName: "MACHINE STATUS",
      width: 150,
      renderCell: (params) => (
        <Typography
          variant="p"
          sx={{
            color: "#F15F5F",
            bgcolor: "#FFB8B8",
            px: "16px",
            py: "4px",
            borderRadius: "20px",
            fontSize: "11px",
          }}
        >
          {params?.row?.environment}
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
            {/* <label
              onClick={() => SetIsShowActionOption(!isShowActionOption)}
              htmlFor="demo-simple-select"
            >
              <Button>ACTION</Button>
            </label> */}
            {isShowActionOption && (
              <select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Action"
              >
                <option value="view">Action</option>
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
          rows={machine?.map((data, id) => {
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default MachineStatus;
