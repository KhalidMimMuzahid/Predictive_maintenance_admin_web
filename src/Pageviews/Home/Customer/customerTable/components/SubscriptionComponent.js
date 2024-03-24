import React, { useEffect, useState } from "react";

const SubscriptionComponent = (props) => {
  const [subscriptionPackage, setSubscriptionPackage] = useState(null);
  useEffect(() => {
    if (props?.value !== "") {
      let url =
        `${process.env.REACT_APP_BASE_URL}/customer/subscription/get-current-packages/` +
        props?.row?.details?.uid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setSubscriptionPackage(data?.currentPackages);
          } else {
            setSubscriptionPackage("error");
          }
        });
    }
  }, [props?.row?.details?.uid]);
  return (
    <div>
      {/* check  subscriptionPackage; and according the the value make different color */}
      <span>{subscriptionPackage}</span>
    </div>
  );
};

export default SubscriptionComponent;
