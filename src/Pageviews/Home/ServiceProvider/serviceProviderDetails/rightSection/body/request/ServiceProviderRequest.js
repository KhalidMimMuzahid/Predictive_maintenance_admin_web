import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../../../../contextApi/appProvider";
import { columns } from "./component/constant";

const ServiceProviderRequest = () => {
  const { setDownloadData } = useContext(AppContext);

  const requests = [
    {
      customerDetails: {
        name: "John Doe",
        phone: "123-456-7890",
      },
      requestID: 1001,
      status: "Pending",
      schedule: {
        time: "10:00 AM",
        date: "2024-04-05",
      },
      location: "123 Main St, City, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Jane Smith",
        phone: "987-654-3210",
      },
      requestID: 1002,
      status: "Approved",
      schedule: {
        time: "2:00 PM",
        date: "2024-04-07",
      },
      location: "456 Elm St, Town, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Alice Johnson",
        phone: "555-555-5555",
      },
      requestID: 1003,
      status: "Declined",
      schedule: {
        time: "3:00 PM",
        date: "2024-04-09",
      },
      location: "789 Oak St, Village, Country",
      invoice: "Ongoing",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Bob Brown",
        phone: "111-222-3333",
      },
      requestID: 1004,
      status: "Pending",
      schedule: {
        time: "11:00 AM",
        date: "2024-04-10",
      },
      location: "321 Pine St, Hamlet, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Emma Wilson",
        phone: "444-444-4444",
      },
      requestID: 1005,
      status: "Approved",
      schedule: {
        time: "1:00 PM",
        date: "2024-04-12",
      },
      location: "567 Cedar St, Suburb, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "David Lee",
        phone: "777-777-7777",
      },
      requestID: 1006,
      status: "Pending",
      schedule: {
        time: "9:00 AM",
        date: "2024-04-14",
      },
      location: "890 Maple St, Rural, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Sophia Garcia",
        phone: "666-666-6666",
      },
      requestID: 1007,
      status: "Approved",
      schedule: {
        time: "3:30 PM",
        date: "2024-04-16",
      },
      location: "432 Walnut St, Coastal, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "William Martinez",
        phone: "888-888-8888",
      },
      requestID: 1008,
      status: "Pending",
      schedule: {
        time: "10:30 AM",
        date: "2024-04-18",
      },
      location: "765 Birch St, Island, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Olivia Robinson",
        phone: "999-999-9999",
      },
      requestID: 1009,
      status: "Approved",
      schedule: {
        time: "2:30 PM",
        date: "2024-04-20",
      },
      location: "876 Sycamore St, Mountain, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "James Taylor",
        phone: "333-333-3333",
      },
      requestID: 1010,
      status: "Pending",
      schedule: {
        time: "11:30 AM",
        date: "2024-04-22",
      },
      location: "543 Pineapple St, Desert, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Ava Rodriguez",
        phone: "222-222-2222",
      },
      requestID: 1011,
      status: "Approved",
      schedule: {
        time: "4:00 PM",
        date: "2024-04-24",
      },
      location: "678 Orange St, Valley, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Liam Lopez",
        phone: "666-555-4444",
      },
      requestID: 1012,
      status: "Pending",
      schedule: {
        time: "8:30 AM",
        date: "2024-04-26",
      },
      location: "987 Lemon St, Prairie, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Mia Perez",
        phone: "444-555-6666",
      },
      requestID: 1013,
      status: "Approved",
      schedule: {
        time: "12:30 PM",
        date: "2024-04-28",
      },
      location: "234 Strawberry St, Canyon, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Noah Hernandez",
        phone: "777-888-9999",
      },
      requestID: 1014,
      status: "Pending",
      schedule: {
        time: "9:30 AM",
        date: "2024-04-30",
      },
      location: "876 Grape St, Savannah, Country",
      invoice: "Create",
      issues: "View Issues List",
    },
    {
      customerDetails: {
        name: "Isabella Gonzales",
        phone: "222-111-3333",
      },
      requestID: 1015,
      status: "Approved",
      schedule: {
        time: "3:00 PM",
        date: "2024-05-02",
      },
      location: "345 Cherry St, Forest, Country",
      invoice: "Send",
      issues: "View Issues List",
    },
  ];

  const rowsRequest = requests?.map((data, id) => {
    return { ...data, id };
  });

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {true && (
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
          rows={rowsRequest}
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
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
              };
            });
            setDownloadData({
              selectedRowData,
              fileName: "Service Provider Customer Request",
            });
          }}
        />
      )}
    </Box>
  );
};

export default ServiceProviderRequest;
