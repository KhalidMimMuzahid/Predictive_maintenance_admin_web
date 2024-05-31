import { Upload } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useStyle } from "./styleComponents";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../../contextApi/appProvider";
import { downloadTableData } from "../../../Utils/downloadTableData";
import AddCustomerModal from "./component/AddCustomerModal";
const CustomerScreen = () => {
  const [addCustomerModalOpen, setAddCustomerModalOpen] = useState(false);
  const [isRootCustomerPage, setIsRootCustomerPage] = useState(true);
  const [viewCustomer, setViewCustomer] = useState(null);
  const { downloadData, setDownloadData } = useContext(AppContext);
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {addCustomerModalOpen && (
        <AddCustomerModal
          addCustomerModalOpen={addCustomerModalOpen}
          setAddCustomerModalOpen={setAddCustomerModalOpen}
        />
      )}
      <Box sx={{ padding: "40px" }}>
        <div className={classes.topHolder}>
          <Box>
            <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
              Customer
            </Typography>
            <div style={{ display: "flex", gap: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Typography>Dashboard / </Typography>
                <Typography sx={{ color: "#24459C", fontWeight: "600" }}>
                  Customers
                </Typography>
              </Box>
              {isRootCustomerPage === false && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ color: "black" }}>/</div>
                  <div sx={{ color: "#24459C", fontWeight: "600" }}>
                    All Customer
                  </div>
                </Box>
              )}
            </div>
          </Box>

          <Box sx={{ display: "flex", gap: "16px" }}>
            <Button
              onClick={() => downloadTableData(downloadData, setDownloadData)}
              sx={{
                backgroundColor: "white",
                color: "#24459C",
                textTransform: "none",
                borderRadius: "8px",
                padding: "6px 32px",
                fontWeight: "600",
              }}
              startIcon={<Upload />}
            >
              Export
            </Button>
            <Button
              onClick={() => {
                setAddCustomerModalOpen(!addCustomerModalOpen);
                //   setCsvFile(null);
              }}
              sx={{
                backgroundColor: "#24459c",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                padding: "6px 32px",
                fontWeight: "500",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              Add Customer
            </Button>
          </Box>
        </div>
        <div>
          <Outlet
            context={[
              isRootCustomerPage,
              setIsRootCustomerPage,
              viewCustomer,
              setViewCustomer,
            ]}
          />
        </div>
      </Box>
    </>
  );
};

export default CustomerScreen;
