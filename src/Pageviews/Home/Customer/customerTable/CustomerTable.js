import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { columns } from "./constant";
import { Box } from "@mui/material";
import { AppContext } from "../../../../contextApi/appProvider";

const CustomerTable = () => {
  const { setDownloadData } = useContext(AppContext);

  const [rows, setRows] = useState([]);

  const addNewItem = (customer, index) => {
    setRows((prev) => [
      ...prev,
      {
        id: index,
        name: customer,
        email: customer.email,
        location: customer,
        balance: customer.uid,
        details: customer,
      },
    ]);
  };
  useEffect(() => {
    fetch("https://api.showaapp.com/admin/customer/get-all-customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        data.map((customer, index) => addNewItem(customer, index));
      });
  }, []);

  const displayCustomers = () => {
    if (rows?.length === 0)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h3>No customer in the server</h3>
        </div>
      );

    return (
      <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={5}
          // autoHeight
          checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
                ...rows[index],
              };
            });
            setDownloadData(selectedRowData);
          }}
        />
      </Box>
    );
  };

  return <div style={{ overflow: "auto" }}>{displayCustomers()}</div>;
};

export default CustomerTable;
