import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { columns } from "./constant";
import { Box } from "@mui/system";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Cancel, Search } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";

const IotTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getIot();
  });

  function getIot() {
    fetch("https://api.showaapp.com/admin/iot/get-all-iot-sensor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var tempRows = new Array();
        data.map((iot, index) =>
          // addNewItem(request, index)
          tempRows.push({
            id: index,
            product: iot,
            customer: iot.uid,
            status: iot.status,
            price: iot.price,
            options: iot,
          })
        );
        setRows(tempRows);
      });
  }

  function displayIoT() {
    if (rows.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No IoT sensor in the server</h3>
        </div>
      );

    return (
      <Box sx={{ background: "white", padding: "20px", borderRadius: "5px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "44px",
              height: "44px",
              background: "#CED4DA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <TuneIcon />
          </Box>
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
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          autoHeight
          checkboxSelection
        />
      </Box>
    );
  }

  return <div style={{ overflow: "auto" }}>{displayIoT()}</div>;
};

// import React from "react";

// const IotTable = () => {
//   return <div>IotTable</div>;
// };

export default IotTable;
