import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

const InventoryDetails = ({ steps, setSteps }) => {
  return (
    <Box
      sx={{
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <FormControl fullWidth>
        {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
        <OutlinedInput
          id="outlined-adornment-amount"
          placeholder="Weight (Kgs)"
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput id="outlined-adornment-amount" placeholder="Length" />
        </FormControl>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput id="outlined-adornment-amount" placeholder="Width" />
        </FormControl>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput id="outlined-adornment-amount" placeholder="Height" />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">Stock Status</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Stock Status" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"test"}>Test</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Sold Individually
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Sold Individually" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"test"}>Test</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Stock Keeping Unit"
          />
        </FormControl>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Stock Management"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", gap: "14px" }}>
        <Button
          onClick={() => setSteps("product_details")}
          sx={{
            textTransform: "none",
            background: "#EBEEF3",
            color: "#868DAA",
            fontWeight: "600",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
          }}
        >
          Previous
        </Button>
        <Button
          onClick={() => setSteps("add_photo")}
          sx={{
            textTransform: "none",
            background: "#24459C",
            color: "#FFFFFF",
            padding: "4px 62px",
            fontSize: "18px",
            "&:hover": {
              background: "#24459C",
            },
            opacity: "75%",
            fontWeight: "600",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryDetails;
