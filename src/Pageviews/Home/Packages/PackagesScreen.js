import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Packages from "./Packages/Packages";
import CreateNewPackageModal from "./modal/CreateNewPackageModal";

const PackagesScreen = () => {
  const [customerOrServiceProvider, setCustomerOrServiceProvider] =
    useState("customer");
  const [createNewPackageModal, setCreateNewPackageModal] = useState(false);
  return (
    <Box sx={{ padding: "40px" }}>
      {createNewPackageModal && (
        <CreateNewPackageModal
          createNewPackageModal={createNewPackageModal}
          setCreateNewPackageModal={setCreateNewPackageModal}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            Packages
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography>Dashboard / </Typography>
            <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
              Packages
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <FormControl
            sx={{
              m: 1,
              minWidth: 200,
              backgroundColor: "white",
              borderRadius: "10px",
              background: "#24459C",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">
              Create New Package
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="Create New Package"
              //   onChange={handleChange}
            >
              <MenuItem>
                <Button
                  sx={{ textTransform: "none", padding: "0px" }}
                  onClick={() =>
                    setCreateNewPackageModal(!createNewPackageModal)
                  }
                >
                  Customer
                </Button>
              </MenuItem>
              <MenuItem value={"service_provider"}>
                <Button
                  sx={{ textTransform: "none", padding: "0px" }}
                  onClick={() =>
                    setCreateNewPackageModal(!createNewPackageModal)
                  }
                >
                  Service Provider
                </Button>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              m: 1,
              minWidth: 170,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">All Packages</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              //   value={provider}
              label="All Packages"
              //   onChange={handleChange}
            >
              <MenuItem value={"all_providers"}>All Packages</MenuItem>
              <MenuItem value={"monthly_packages"}>Monthly Packages</MenuItem>
              <MenuItem value={"yearly_packages"}>Yearly Packages</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "26px",
          marginTop: "28px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            onClick={() => setCustomerOrServiceProvider("customer")}
            sx={{
              background:
                customerOrServiceProvider === "customer" ? "#D9E3FF" : "",
              color: "#5A5C73",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              padding: "6px 32px",
            }}
          >
            Customer
          </Button>
          <Button
            onClick={() => setCustomerOrServiceProvider("service_provider")}
            sx={{
              background:
                customerOrServiceProvider === "service_provider"
                  ? "#D9E3FF"
                  : "",
              color: "#5A5C73",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              padding: "6px 32px",
            }}
          >
            Service Provider
          </Button>
        </Box>
      </Box>
      <Packages />
    </Box>
  );
};

export default PackagesScreen;
