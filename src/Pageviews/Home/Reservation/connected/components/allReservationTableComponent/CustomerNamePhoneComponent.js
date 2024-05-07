import { useEffect, useState } from "react";

const CustomerNamePhoneComponent = ({ props }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomer(props.value);
  }, []);

  function getCustomer(uid) {
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

  return (
    <div>
      <div>{customer.firstNameAlphabet + " " + customer.lastNameAlphabet}</div>
      <div>{customer.phone}</div>
    </div>
  );
};

export default CustomerNamePhoneComponent;
