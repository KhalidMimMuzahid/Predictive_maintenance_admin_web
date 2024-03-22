import { Add, Download, MoreVert, Upload } from "@mui/icons-material";
import { useState } from "react";
import { Button, IconButton, MenuItem } from "@mui/material";
import { useStyle, StyledMenu } from "./styleComponents";
import CustomerTable from "./customerTable/CustomerTable";
const CustomerScreen = () => {
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
            <div style={{ color: "black" }} className={classes.subtitle}>
              {" "}
              Customers /
            </div>
            <div style={{ color: "#24459c" }} className={classes.subtitle}>
              {" "}
              All Customers
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
              Add Customer
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className={classes.spacerSmall}></div>
      <div className={classes.spacerSmall}></div>

      <div className={classes.tableHolder}>
        <CustomerTable />
      </div>
    </div>
  );
};

export default CustomerScreen;
