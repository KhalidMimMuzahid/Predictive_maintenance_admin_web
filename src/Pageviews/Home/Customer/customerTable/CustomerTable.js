import { DataGrid } from "@mui/x-data-grid";
import { Component } from "react";
import { columns } from "./constant";
import { Box } from "@mui/material";

class CustomerTable extends Component {
  state = {
    rows: [],
  };

  componentDidMount = () => {
    this.getCustomer();
  };

  getCustomer() {
    fetch("https://api.showaapp.com/admin/customer/get-all-customer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        data.map((customer, index) => this.addNewItem(customer, index));
      });
  }

  addNewItem = (customer, index) => {
    let { rows } = this.state;
    rows.push({
      id: index,
      name: customer,
      email: customer.email,
      location: customer,
      balance: customer.uid,
      details: customer,
    });
    this.setState({ rows: rows });
  };

  displayCustomers = () => {
    if (this.state.rows.length === 0)
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
          rows={this.state.rows}
          columns={columns}
          rowHeight={61}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          // autoHeight
          // checkboxSelection // after clicking in everywhere in the row, this check box selecting by default
        />
      </Box>
    );
  };

  render() {
    return <div style={{ overflow: "auto" }}>{this.displayCustomers()}</div>;
  }
}

// Why this displayAction is made for? // Khalid: if you know please write it down
// {const displayAction = (props) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "4px 5px",
//         gap: "10px",

//         margin: "0 auto",
//         width: "96px",
//         height: "24px",

//         flex: "none",
//         order: "7",
//         flexGrow: "0",

//         width: "16px",
//         height: "16px",

//         flex: "none",
//         order: "0",
//         flexGrow: "0",

//         position: "absolute",
//         left: "39.25%",
//         right: "39.32%",
//         top: "0%",
//         bottom: "0%",

//         background: "#8B83BA",
//       }}
//     >
//       {displayAction()}
//     </div>
//   );
// };}

export default CustomerTable;
