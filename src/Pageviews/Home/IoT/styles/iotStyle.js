import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
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
  addUserContainer: {
    padding: theme.spacing(2),
    backgroundColor: "white",
    width: "400px",
    height: "450px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },
  input: {
    width: "100%",
    backgroundColor: "white",
  },
  saveButton: {
    backgroundColor: "#24459c",
    padding: "10px 35px",
    color: "white",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#F6F6F6",
    padding: "10px 35px",
    color: "#959596",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
  tabTitle: {
    color: "#111827",
    fontSize: "22",
    fontWeight: "500",
  },
  tabSubtitle: {
    color: "#6B7280",
    fontSize: "16",
    fontWeight: "400",
  },
  csvEmptyHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#F1FAFF",
    padding: "10px 16px",
    borderRadius: "7px",
    border: "1px dashed #009EF7",
    cursor: "pointer",
  },
  csvFileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1FAFF",
    padding: "10px 16px",
    borderRadius: "7px",
    border: "1px dashed #009EF7",
  },
}));
