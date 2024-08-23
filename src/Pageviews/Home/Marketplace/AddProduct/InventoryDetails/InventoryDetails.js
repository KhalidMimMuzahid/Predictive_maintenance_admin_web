import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React, { useState } from "react";

const InventoryDetails = ({
  steps,
  setSteps,
  productDetails,
  setProductDetails,
}) => {
  const [isTaxRateApplicable, setIsTaxRateApplicable] = useState(null);
  return (
    <Box
      sx={{
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            placeholder="Weight (Kgs)"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  packageSize: {
                    ...prev.packageSize,
                    weight: Number(e.target?.value),
                  },
                };
              });
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            placeholder="Length"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  packageSize: {
                    ...prev.packageSize,
                    length: Number(e.target?.value),
                  },
                };
              });
            }}
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            placeholder="Width"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  packageSize: {
                    ...prev.packageSize,
                    width: Number(e.target?.value),
                  },
                };
              });
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            placeholder="Height"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  packageSize: {
                    ...prev.packageSize,
                    height: Number(e.target?.value),
                  },
                };
              });
            }}
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "49.5%" }}>
          <OutlinedInput
            type="number"
            id="outlined-adornment-amount"
            placeholder="Available Stock"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  stockManagement: {
                    ...prev.stockManagement,
                    availableStock: Number(e.target?.value),
                  },
                };
              });
            }}
          />
        </FormControl>
        <RadioGroup
          onChange={(e) => {
            setProductDetails((prev) => {
              return {
                ...prev,
                stockManagement: {
                  ...prev.stockManagement,
                  trackStockQuantity: e.target?.value === "true" ? true : false,
                },
              };
            });
          }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          sx={{
            width: "49%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #D7E0E7",
            borderRadius: "4px",
            padding: "4px",
            gap: "24px",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ paddingLeft: "48px" }}
          >
            Track Stock Quantity
          </InputLabel>
          <Box>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </Box>
        </RadioGroup>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <RadioGroup
          onChange={(e) => {
            setProductDetails((prev) => {
              return {
                ...prev,
                taxStatus: e.target?.value,
              };
            });
            setIsTaxRateApplicable(e.target?.value);
          }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          sx={{
            width: "48.5%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid #D7E0E7",
            borderRadius: "4px",
            padding: "4px",
            gap: "24px",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-amount"
            sx={{ paddingLeft: "48px" }}
          >
            Tax Status
          </InputLabel>
          <Box>
            <FormControlLabel
              value="applicable"
              control={<Radio />}
              label="Applicable"
            />
            <FormControlLabel
              value="not-applicable"
              control={<Radio />}
              label="Not-Applicable"
            />
          </Box>
        </RadioGroup>
        <FormControl sx={{ width: "49%" }}>
          <OutlinedInput
            type="number"
            disabled={isTaxRateApplicable !== "applicable"}
            id="outlined-adornment-amount"
            placeholder="Tax Rate"
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  taxRate: Number(e.target?.value),
                };
              });
            }}
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
