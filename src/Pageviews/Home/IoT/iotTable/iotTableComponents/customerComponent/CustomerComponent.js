import React, { useEffect, useState } from "react";
import { useStyle } from "../../../styles/iotStyle";

const CustomerComponent = (props) => {
  const [uid, setUid] = useState("");
  const [customer, setCustomer] = useState(null);

  const classes = useStyle();

  useEffect(() => {
    setUid(props.value);
    getCustomer();
  }, [props.value]);

  function getCustomer() {
    if (uid != "") {
      let url =
        "https://api.showaapp.com/admin/wallet/find-user-with-id/" + uid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustomer(data);
        });
    }
  }

  function displayCustomer() {
    if (uid === "") {
      return <div></div>;
    } else {
      if (customer == null)
        return (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <h3>Please Wait</h3>
          </div>
        );

      return (
        <div>
          <div className={classes.tabTitle}>
            {customer.firstNameAlphabet + " " + customer.lastNameAlphabet}
          </div>
          <div className={classes.tabSubtitle}>{customer.phone}</div>
        </div>
      );
    }
  }

  return <div style={{ display: "flex" }}>{displayCustomer()}</div>;
};

export default CustomerComponent;
