import { Box } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

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
}));

const ControlPanelInventoryScreen = () => {
  const classes = useStyle();
  return (
    <Box sx={{ padding: "40px" }}>
      <div>
        <div className={classes.title}>Control Panel</div>
        <div className={classes.spacerSmall}></div>
        <div style={{ display: "flex" }}>
          <div
            style={{ color: "black", marginRight: "4px" }}
            className={classes.subtitle}
          >
            Dashboard /
          </div>
          <div
            style={{ color: "black", marginRight: "4px" }}
            className={classes.subtitle}
          >
            Control Panel /
          </div>
          <div style={{ color: "#24459c" }} className={classes.subtitle}>
            Inventory
          </div>
        </div>
      </div>
      <Box
        sx={{
          borderRadius: "4px",
          background: "white",
          padding: "24px 40px",
          marginTop: "24px",
        }}
      >
        Coming...
      </Box>
    </Box>
  );
};

export default ControlPanelInventoryScreen;
