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

const ProductDetails = ({ steps, setSteps }) => {
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
          placeholder="Product Title"
        />
      </FormControl>
      <FormControl fullWidth>
        {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
        <OutlinedInput
          id="outlined-adornment-amount"
          placeholder="Product Details"
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Product Category
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Select Product Category" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"test"}>Test</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Product Sub-Category
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Select Product Sub-Category" />}
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
            placeholder="Regular Price (¥)"
          />
        </FormControl>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Sale Price (¥)"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Tax Status
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Select Tax Status" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"test"}>Test</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Tax Status Class
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={""}
            fullWidth
            // onChange={handleChange}
            input={<OutlinedInput label="Select Tax Status Class" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"test"}>Test</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={() => setSteps("inventory_details")}
          //   disabled={true}
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

export default ProductDetails;
