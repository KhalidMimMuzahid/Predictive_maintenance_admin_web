import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  adminComponent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F6F7",
    borderRadius: "6px",
    padding: "16px 8px",
    overflow: "hidden",
  },
  spacerSmall: {
    width: "10px",
    height: "10px",
  },
  adminProfileImageHolder: {
    width: "100px",
    height: "100px",
    overflow: "hidden",
    borderRadius: "50%",
    display: "inline-block",
  },
  adminImg: {
    maxWidth: "100%",
  },
  accessLevelHolder: {
    backgroundColor: "#FFB020",
    color: "white",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "400",
  },
  adminName: {
    color: "#5A6872",
    fontWeight: "600",
    fontSize: "18px",
    textAlign: "center",
  },
  adminEmail: {
    color: "#5A6872",
    fontWeight: "400",
    fontSize: "14px",
    textAlign: "center",
  },
}));

const Users = () => {
  const classes = useStyle();

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getAllAdmins();
  });

  function getAllAdmins() {
    let url = "https://api.showaapp.com/admin/settings/get-all-admin";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data?.admin);
      });
  }

  function displayAllAdmins() {
    if (admins?.length == 0)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    if (admins?.length > 0) {
      return (
        <Grid container spacing={2}>
          {admins?.map((admin, index) => (
            <AdminComponent admin={admin} />
          ))}
        </Grid>
      );
    }
  }

  return <div>{displayAllAdmins()}</div>;
};

export default Users;

const AdminComponent = (props) => {
  const classes = useStyle();

  function formatDate(date) {
    var dt = new Date(date);

    const currentMonth = dt.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const dateString = dt.getDate();
    const yearString = dt.getFullYear();

    const hourString = dt.getHours();
    const minuteString = dt.getMinutes();

    var requiredDateString =
      dateString +
      "-" +
      monthString +
      "-" +
      yearString +
      " at " +
      hourString +
      ":" +
      minuteString;

    return requiredDateString;
  }

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <div className={classes.adminComponent}>
        <div className={classes.adminProfileImageHolder}>
          <img
            src={props.admin.adminImageAddress}
            alt="Admin Profile Image"
            className={classes.adminImg}
          />
        </div>
        <div className={classes.spacerSmall} />
        <div className={classes.accessLevelHolder}>
          {props.admin.accessLevel}
        </div>
        <div className={classes.spacerSmall} />
        <div className={classes.adminName}>{props.admin.name}</div>
        <div className={classes.spacerSmall} />
        <div className={classes.adminEmail}>{props.admin.email}</div>
        <div className={classes.spacerSmall} />
        <div
          style={{
            fontSize: "10px",
            color: "#5A6872",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Created At
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#5A6872",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {formatDate(props.admin.createdAt)}
        </div>
      </div>
    </Grid>
  );
};
