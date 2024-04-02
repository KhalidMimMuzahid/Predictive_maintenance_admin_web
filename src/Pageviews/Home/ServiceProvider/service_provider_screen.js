import { Add, Download, MoreVert, Upload } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Component, useContext } from "react";
import { useState } from "react";
import ServiceProviderTable from "./serviceProviderTable/ServiceProviderTable";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../../contextApi/appProvider";
import { downloadTableData } from "../../../Utils/downloadTableData";

const useStyle = makeStyles((theme) => ({
  holder: {
    padding: theme.spacing(2),
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  spacerSmall: {
    width: "10px",
    height: "10px",
  },
  topHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableHolder: {
    width: "100%",
    backgroundColor: "white",
  },
  buttonHolder: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallMenuHolder: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

const ServiceProviderScreen = () => {
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
          <div className={classes.title}>Vendor</div>
          <div className={classes.spacerSmall}></div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Dashboard /{" "}
            </div>
            <div style={{ color: "black" }} className={classes.subtitle}>
              Vendor /{" "}
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              {" "}
              All Vendor
            </div>
          </div>
        </div>

        <div className={classes.buttonHolder}>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Upload />}
          >
            Import
          </Button>
          <div className={classes.spacerSmall} />
          <Button
            onClick={() => downloadTableData(downloadData, setDownloadData)}
            style={{ backgroundColor: "white", color: "black" }}
            startIcon={<Download />}
          >
            Export
          </Button>
          <div className={classes.spacerSmall} />
          <Button style={{ backgroundColor: "#24459c", color: "white" }}>
            Add Customer
          </Button>
        </div>

        <div className={classes.smallMenuHolder}>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>

          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={openEl}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Upload style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Import
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Download style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Export
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Add style={{ color: "#313E6A" }} />
              <div className={classes.spacerSmall} />
              Add Vendor
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className={classes.spacerSmall}></div>
      <div className={classes.spacerSmall}></div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ServiceProviderScreen;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));
