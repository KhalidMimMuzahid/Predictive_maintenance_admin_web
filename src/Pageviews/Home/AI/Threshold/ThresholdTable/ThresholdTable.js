import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Paper,
  Typography,
} from "@mui/material";
import TableRowComponent from "./TableRowComponent";

const ThresholdTable = () => {
  const rows = [
    { name: "Base", temperature: 95, vibration: 95 },
    { name: "Door", temperature: 95, vibration: 95 },
    { name: "Rincepump", temperature: 95, vibration: 95 },
    { name: "Tank", temperature: 95, vibration: 95 },
    { name: "Topnozzle", temperature: 95, vibration: 95 },
    { name: "Undernozzle", temperature: 95, vibration: 95 },
    { name: "Washpump", temperature: 95, vibration: 95 },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "24px", boxShadow: "none" }}
    >
      <Table sx={{ border: "none" }}>
        <TableHead sx={{ border: "none" }}>
          <TableRow sx={{ border: "none" }}>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "40%",
              }}
            />
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "23%",
              }}
            >
              Temperature (°C)
            </TableCell>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "23%",
              }}
            >
              Vibration (Hz)
            </TableCell>
            <TableCell
              sx={{
                color: "#4D5983",
                fontSize: "16px",
                border: "none",
                width: "20%",
              }}
            />
          </TableRow>
        </TableHead>
        <TableBody sx={{ boxShadow: "none" }}>
          {rows.map((row) => (
            <TableRowComponent row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThresholdTable;
