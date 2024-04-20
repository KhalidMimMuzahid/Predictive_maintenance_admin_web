import { DataGrid } from "@mui/x-data-grid";
import { Component, useContext, useEffect, useState } from "react";
import { columns } from "./constant";
import { Box } from "@mui/material";
import { AppContext } from "../../../../contextApi/appProvider";
import Loader from "../../../../Utils/Loader";
import { useGetAllCustomersQuery } from "../../../../features/customers/customersSlice";

const CustomerTable = () => {
  const { setDownloadData } = useContext(AppContext);

  const [rows, setRows] = useState([]);

  const {
    data: customers,
    isLoading,
    isError,
    error,
  } = useGetAllCustomersQuery();

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
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BASE_URL}/admin/customer/get-all-customer`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log({ data });
  //       data.map((customer, index) => addNewItem(customer, index));
  //     });
  // }, []);

  const displayCustomers = () => {
    if (isLoading || isError)
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Loader />
        </div>
      );

    return (
      <Box sx={{ background: "white", borderRadius: "4px", marginTop: "8px" }}>
        <DataGrid
          rows={customers?.data?.map((data, id) => {
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
            setDownloadData({ selectedRowData, fileName: "Customer Details" });
          }}
        />
      </Box>
    );
  };

  return <div style={{ overflow: "auto" }}>{displayCustomers()}</div>;
};

export default CustomerTable;
