import { AddOutlined, Download, MoreVert, Upload } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useStyle } from "./styleComponents";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../../contextApi/appProvider";
import { downloadTableData } from "../../../Utils/downloadTableData";
import Footer from "../../../Utils/Footer";
const CustomerScreen = () => {
  const [isRootCustomerPage, setIsRootCustomerPage] = useState(true);
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
    <div className={classes.holder}>
      <div className={classes.topHolder}>
        <div>
          <div className={classes.title}>Customer</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Dashboard /{" "}
            </div>
            <div
              style={{ color: isRootCustomerPage ? "#24459c" : "black" }}
              className={classes.subtitle}
            >
              Customers
            </div>
            {isRootCustomerPage === false && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <div style={{ color: "black" }} className={classes.subtitle}>
                  /
                </div>
                <div style={{ color: "#24459c" }} className={classes.subtitle}>
                  All Customers
                </div>
              </Box>
            )}
          </div>
        </div>

        <Box sx={{ display: "flex" }}>
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
          <div className={classes.spacerSmall} />
          <Button
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
        <Outlet context={[isRootCustomerPage, setIsRootCustomerPage]} />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerScreen;
