import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contextApi/appProvider";
import { columns } from "./componant/constant";

const TeamTable = () => {
  const { setDownloadData } = useContext(AppContext);
  const teamMembers = [
    {
      name: "John Doe",
      imageUrl: "https://example.com/john_doe.jpg",
      position: "Software Engineer",
      phone: "+1234567890",
      serviced: 8,
      joined: "Jan 13, 2024",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://example.com/jane_smith.jpg",
      position: "Marketing Manager",
      phone: "+1987654321",
      serviced: 8,
      joined: "Feb 5, 2023",
    },
    {
      name: "Michael Johnson",
      imageUrl: "https://example.com/michael_johnson.jpg",
      position: "Product Designer",
      phone: "+1122334455",
      serviced: 8,
      joined: "Mar 20, 2022",
    },
    {
      name: "Emily Brown",
      imageUrl: "https://example.com/emily_brown.jpg",
      position: "Financial Analyst",
      phone: "+1444422666",
      serviced: 8,
      joined: "Apr 8, 2023",
    },
    {
      name: "David Lee",
      imageUrl: "https://example.com/david_lee.jpg",
      position: "Sales Representative",
      phone: "+1555666777",
      serviced: 8,
      joined: "May 19, 2024",
    },
    {
      name: "Sarah Miller",
      imageUrl: "https://example.com/sarah_miller.jpg",
      position: "HR Specialist",
      phone: "+1789456123",
      serviced: 8,
      joined: "Jun 27, 2021",
    },
    {
      name: "Daniel Wilson",
      imageUrl: "https://example.com/daniel_wilson.jpg",
      position: "Project Manager",
      phone: "+1654332211",
      serviced: 8,
      joined: "Jul 11, 2022",
    },
    {
      name: "Olivia Taylor",
      imageUrl: "https://example.com/olivia_taylor.jpg",
      position: "Data Scientist",
      phone: "+1888777666",
      serviced: 8,
      joined: "Aug 3, 2023",
    },
  ];
  const rowsTeamMembers = teamMembers?.map((data, id) => {
    return { ...data, id };
  });
  return (
    <DataGrid
      rows={rowsTeamMembers}
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
          fileName: "Service Provider Teams",
        });
      }}
    />
  );
};

export default TeamTable;
