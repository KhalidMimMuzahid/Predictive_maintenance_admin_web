import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Test = () => {
  const products = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      occupation: "Engineer",
      city: "New York",
      country: "Bangladesh",
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      occupation: "Designer",
      city: "San Francisco",
      country: "Bangladesh",
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      occupation: "Teacher",
      city: "Chicago",
      country: "Bangladesh",
    },
    {
      id: 4,
      name: "David",
      age: 35,
      occupation: "Developer",
      city: "Austin",
      country: "Bangladesh",
    },
    {
      id: 5,
      name: "Eve",
      age: 22,
      occupation: "Photographer",
      city: "Los Angeles",
      country: "Bangladesh",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 170,
      renderCell: (props) => <Typography>{props?.row?.id}</Typography>,
    },
    {
      field: "name",
      headerName: "Name",
      width: 270,
      renderCell: (props) => <Typography>{props?.row?.name}</Typography>,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      width: 270,
      renderCell: (props) => <Typography>{props?.row?.occupation}</Typography>,
    },
    {
      field: "city",
      headerName: "City",
      width: 270,
      renderCell: (props) => <Typography>{props?.row?.city}</Typography>,
    },
    {
      field: "country",
      headerName: "Country",
      width: 270,
      renderCell: (props) => <Typography>{props?.row?.country}</Typography>,
    },
    {
      field: "actions",
      width: 150,
      headerName: "Actions",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Tooltip title="Edit">
            <Button
              variant="contained"
              color="secondary"
              //   onClick={() => handleOpen(params.id)}
            >
              View
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              variant="contained"
              color="error"
              //   onClick={() => dispatch(deleteProduct(params.id))}
            >
              Delete
            </Button>
          </Tooltip>
        </div>
      ),
      width: 180,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "80vw", margin: "50px auto" }}>
      <DataGrid
        sx={{ overflowX: "scroll", border: "1px solid" }}
        rows={products}
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
  );
};

export default Test;
