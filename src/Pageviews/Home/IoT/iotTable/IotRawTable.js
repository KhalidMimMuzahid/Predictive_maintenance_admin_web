import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import OptionsComponent from "./iotTableComponents/optionsComponent/OptionsComponent";
import CustomerComponent from "./iotTableComponents/customerComponent/CustomerComponent";
import StatusComponent from "./iotTableComponents/statusComponent/StatusComponent";
import StateComponent from "./iotTableComponents/stateComponent/StateComponent";
import ProductComponent from "./iotTableComponents/productComponent/ProductComponent";

const IotRawTable = ({ data }) => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              background: "#F4F2FF",
              borderRadius: "0px",
              borderTop: "1px solid #D9D9D9",
            }}
          >
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              PRODUCT
            </TableCell>
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              STATE
            </TableCell>
            <TableCell
              sx={{ width: "20%", color: "#6E6893", fontWeight: "600" }}
            >
              CUSTOMER
            </TableCell>
            <TableCell
              sx={{ width: "25%", color: "#6E6893", fontWeight: "600" }}
            >
              STATUS
            </TableCell>
            <TableCell
              sx={{ width: "15%", color: "#6E6893", fontWeight: "600" }}
            >
              ACTION
            </TableCell>
          </TableHead>
          <TableBody>
            {data?.map((bid, i) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <ProductComponent bid={bid} />
                </TableCell>
                <TableCell component="th" scope="row">
                  <StateComponent sensorModule={bid} />
                </TableCell>
                <TableCell component="th" scope="row">
                  <CustomerComponent sensorModule={bid} />
                </TableCell>
                <TableCell component="th" scope="row">
                  <StatusComponent bid={bid} />
                </TableCell>
                <TableCell component="th" scope="row">
                  <OptionsComponent sensorModule={bid} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IotRawTable;
