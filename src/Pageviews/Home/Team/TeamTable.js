import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../../contextApi/appProvider";
import { columns } from "./component/constant";

const TeamTable = () => {
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

  const teamRow = [
    {
      companyName: "ABC Ltd.",
      location: {
        street: "123 Main Street",
        city: "New York",
        country: "USA",
      },
      email: "info@abc.com",
      totalMember: [
        { name: "John Doe", image: "john_doe.jpg" },
        { name: "Jane Smith", image: "jane_smith.jpg" },
        { name: "Alex Johnson", image: "alex_johnson.jpg" },
      ],
      manager: {
        name: "Michael Brown",
        image: "michael_brown.jpg",
        phone: "+1-123-456-7890",
      },
    },
    {
      companyName: "XYZ Ltd.",
      location: {
        street: "456 Oak Avenue",
        city: "Los Angeles",
        country: "USA",
      },
      email: "info@xyz.com",
      totalMember: [
        { name: "Sarah White", image: "sarah_white.jpg" },
        { name: "David Lee", image: "david_lee.jpg" },
        { name: "Emily Garcia", image: "emily_garcia.jpg" },
      ],
      manager: {
        name: "Jennifer Davis",
        image: "jennifer_davis.jpg",
        phone: "+1-987-654-3210",
      },
    },
    {
      companyName: "PQR Ltd.",
      location: {
        street: "789 Elm Street",
        city: "Chicago",
        country: "USA",
      },
      email: "info@pqr.com",
      totalMember: [
        { name: "Michael Johnson", image: "michael_johnson.jpg" },
        { name: "Emma Brown", image: "emma_brown.jpg" },
        { name: "William Taylor", image: "william_taylor.jpg" },
      ],
      manager: {
        name: "Jessica Martinez",
        image: "jessica_martinez.jpg",
        phone: "+1-456-789-0123",
      },
    },
    {
      companyName: "LMN Ltd.",
      location: {
        street: "101 Pine Street",
        city: "San Francisco",
        country: "USA",
      },
      email: "info@lmn.com",
      totalMember: [
        { name: "Matthew Anderson", image: "matthew_anderson.jpg" },
        { name: "Olivia Wilson", image: "olivia_wilson.jpg" },
        { name: "Daniel Martinez", image: "daniel_martinez.jpg" },
      ],
      manager: {
        name: "Christopher Taylor",
        image: "christopher_taylor.jpg",
        phone: "+1-321-654-0987",
      },
    },
    {
      companyName: "JKL Ltd.",
      location: {
        street: "222 Maple Avenue",
        city: "Boston",
        country: "USA",
      },
      email: "info@jkl.com",
      totalMember: [
        { name: "Ava Johnson", image: "ava_johnson.jpg" },
        { name: "Noah Garcia", image: "noah_garcia.jpg" },
        { name: "Sophia Brown", image: "sophia_brown.jpg" },
      ],
      manager: {
        name: "Ethan Martinez",
        image: "ethan_martinez.jpg",
        phone: "+1-789-012-3456",
      },
    },
    {
      companyName: "RST Ltd.",
      location: {
        street: "333 Cedar Street",
        city: "Seattle",
        country: "USA",
      },
      email: "info@rst.com",
      totalMember: [
        { name: "James Wilson", image: "james_wilson.jpg" },
        { name: "Isabella Anderson", image: "isabella_anderson.jpg" },
        { name: "Mia Taylor", image: "mia_taylor.jpg" },
      ],
      manager: {
        name: "Alexander Garcia",
        image: "alexander_garcia.jpg",
        phone: "+1-012-345-6789",
      },
    },
    {
      companyName: "MNO Ltd.",
      location: {
        street: "444 Walnut Street",
        city: "Miami",
        country: "USA",
      },
      email: "info@mno.com",
      totalMember: [
        { name: "Charlotte Garcia", image: "charlotte_garcia.jpg" },
        { name: "Benjamin Wilson", image: "benjamin_wilson.jpg" },
        { name: "Amelia Johnson", image: "amelia_johnson.jpg" },
      ],
      manager: {
        name: "Elijah Brown",
        image: "elijah_brown.jpg",
        phone: "+1-234-567-8901",
      },
    },
    {
      companyName: "GHI Ltd.",
      location: {
        street: "555 Pine Street",
        city: "Dallas",
        country: "USA",
      },
      email: "info@ghi.com",
      totalMember: [
        { name: "Harper Martinez", image: "harper_martinez.jpg" },
        { name: "Jacob Anderson", image: "jacob_anderson.jpg" },
        { name: "Evelyn Garcia", image: "evelyn_garcia.jpg" },
      ],
      manager: {
        name: "William Johnson",
        image: "william_johnson.jpg",
        phone: "+1-345-678-9012",
      },
    },
    {
      companyName: "DEF Ltd.",
      location: {
        street: "666 Oak Street",
        city: "Houston",
        country: "USA",
      },
      email: "info@def.com",
      totalMember: [
        { name: "Liam Taylor", image: "liam_taylor.jpg" },
        { name: "Victoria Martinez", image: "victoria_martinez.jpg" },
        { name: "Logan Brown", image: "logan_brown.jpg" },
      ],
      manager: {
        name: "Evelyn Wilson",
        image: "evelyn_wilson.jpg",
        phone: "+1-567-890-1234",
      },
    },
    {
      companyName: "UVW Ltd.",
      location: {
        street: "777 Elm Street",
        city: "Atlanta",
        country: "USA",
      },
      email: "info@uvw.com",
      totalMember: [
        { name: "Lucas Anderson", image: "lucas_anderson.jpg" },
        { name: "Madison Garcia", image: "madison_garcia.jpg" },
        { name: "Gabriel Wilson", image: "gabriel_wilson.jpg" },
      ],
      manager: {
        name: "Avery Johnson",
        image: "avery_johnson.jpg",
        phone: "+1-678-901-2345",
      },
    },
  ];

  return (
    <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px" }}>
      <DataGrid
        rows={teamRow?.map((data, id) => {
          return { ...data, id };
        })}
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
              _id: rows[index]?.details?._id,
              name:
                rows[index]?.details?.firstNameAlphabet +
                " " +
                rows[index]?.details?.lastNameAlphabet,
              email: rows[index]?.details?.email,
              dob: rows[index]?.details?.dob,
              gender: rows[index]?.details?.gender,
              phone: rows[index]?.details?.phone,
              occupation: rows[index]?.details?.occupation,
              address:
                rows[index]?.details?.streetAddress +
                " " +
                rows[index]?.details?.cityAddress,
              postalCode: rows[index]?.details?.postalCode,
              uid: rows[index]?.details?.uid,
              stripeCustomerId: rows[index]?.details?.stripeCustomerId,
              uniqueNumberId: rows[index]?.details?.uniqueNumberId,
              updatedAt: rows[index]?.details?.updatedAt,
            };
          });
          setDownloadData({ selectedRowData, fileName: "Company List" });
        }}
      />
    </Box>
  );
};

export default TeamTable;
