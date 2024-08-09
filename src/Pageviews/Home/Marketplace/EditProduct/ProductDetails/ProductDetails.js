import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useGetProductCategoriesQuery } from "../../../../../features/predefined/predefinedSlice";

const ProductDetails = ({
  steps,
  setSteps,
  productDetails,
  setProductDetails,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: productsCategoriesData } = useGetProductCategoriesQuery();

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
        <OutlinedInput
          onChange={(e) => {
            setProductDetails((prev) => {
              return {
                ...prev,
                name: e.target?.value,
              };
            });
          }}
          id="outlined-adornment-amount"
          placeholder="Product Title"
        />
      </FormControl>
      <FormControl fullWidth>
        {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
        <OutlinedInput
          onChange={(e) => {
            setProductDetails((prev) => {
              return {
                ...prev,
                details: e.target?.value,
              };
            });
          }}
          id="outlined-adornment-amount"
          placeholder="Product Details"
        />
      </FormControl>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          <OutlinedInput
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  brand: e.target?.value,
                };
              });
            }}
            id="outlined-adornment-amount"
            placeholder="Product Brand"
          />
        </FormControl>
        <FormControl fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  model: e.target?.value,
                };
              });
            }}
            id="outlined-adornment-amount"
            placeholder="Product Model"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Product Category
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            fullWidth
            onSelect={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  category: e.target?.value,
                };
              });
            }}
            input={<OutlinedInput label="Select Product Category" />}
            // MenuProps={MenuProps}
          >
            {productsCategoriesData?.data?.map((category) => (
              <MenuItem value={category?.category}>
                {category?.category.charAt(0).toUpperCase() +
                  category?.category.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: "100%" }}
          disabled={productDetails?.category === undefined}
        >
          <InputLabel id="demo-multiple-name-label">
            Select Product Sub-Category
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            fullWidth
            onSelect={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  subCategory: e.target?.value,
                };
              });
            }}
            input={<OutlinedInput label="Select Product Sub-Category" />}
            // MenuProps={MenuProps}
          >
            {/* {
              productsCategoriesData?.data?.map(category => <MenuItem value={}>Sub Value 1</MenuItem>)
            } */}
            {selectedCategory &&
              productsCategoriesData?.data
                ?.find((category) => category?.category === selectedCategory)
                ?.subCategories?.map((subCategory) => (
                  <MenuItem value={subCategory}>{subCategory}</MenuItem>
                ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <FormControl fullWidth>
          <OutlinedInput
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  regularPrice: e.target?.value,
                };
              });
            }}
            id="outlined-adornment-amount"
            placeholder="Regular Price (¥)"
          />
        </FormControl>
        <FormControl fullWidth>
          <OutlinedInput
            onChange={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  salePrice: e.target?.value,
                };
              });
            }}
            id="outlined-adornment-amount"
            placeholder="Sale Price (¥)"
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-name-label">
            Select Tax Status
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            fullWidth
            onSelect={(e) => {
              setProductDetails((prev) => {
                return {
                  ...prev,
                  taxStatus: e.target?.value,
                };
              });
            }}
            input={<OutlinedInput label="Select Tax Status" />}
            // MenuProps={MenuProps}
          >
            <MenuItem value={"applicable"}>Applicable</MenuItem>
            <MenuItem value={"not-applicable"}>Not-Applicable</MenuItem>
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
