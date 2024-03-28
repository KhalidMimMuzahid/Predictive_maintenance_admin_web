import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { columns } from "./constant";

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
    );
  }

  return <div style={{ overflow: "auto" }}>{displayIoT()}</div>;
};

// import React from "react";

// const IotTable = () => {
//   return <div>IotTable</div>;
// };

export default IotTable;
