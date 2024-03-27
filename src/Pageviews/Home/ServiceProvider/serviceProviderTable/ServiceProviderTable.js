import React, { useEffect, useState } from "react";

const ServiceProviderTable = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/admin/service-provider/get-all-service-provider`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setServiceProviders(data?.data);
        } else {
        }
      })
      .catch((err) => {});
  }, []);
  return <div>ServiceProviderTable: {serviceProviders?.length}</div>;
};

export default ServiceProviderTable;
