import React, { useEffect, useState } from "react";
import { useGetSensorModuleByMacAddressQuery } from "../../../../../../features/iot/iotSlice";
import { useGetCustomerDetailsMiniQuery } from "../../../../../../features/customers/customersSlice";

const CustomerComponent = ({ sensorModule }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [customer, setCustomer] = useState();
  const {
    data: iot,
    isLoading: isLoading2,
    isError,
    error,
    isSuccess,
  } = useGetSensorModuleByMacAddressQuery(sensorModule?.macAddress);

  const {
    data: customerDetailsData,
    isLoading: isLoading3,
    isError: isError2,
    error: error2,
    isSuccess: isSuccess2,
  } = useGetCustomerDetailsMiniQuery(iot?.data?.user);
  console.log(customerDetailsData);

  useEffect(() => {
    if (sensorModule.status === "in-stock") {
      console.log({ sensorModuleInStock: sensorModule.status });
      setCustomer(<span>-</span>);
      setIsLoading(false);
    } else {
      // refetch(iot?.data?.user);
      console.log({ sensorModuleOutStock: sensorModule.status });
      // console.log(iot?.data?.user);

      // console.log({ customerDetailsData: customerDetailsData });
      if (customerDetailsData?.data?.name) {
        setCustomer(
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              {customerDetailsData?.data?.name?.firstName +
                " " +
                customerDetailsData?.data?.name?.lastName}
            </span>
            <span>{customerDetailsData?.data?.phone}</span>
          </div>
        );
        setIsLoading(false);
      } else {
        setCustomer(<span>-</span>);
        setIsLoading(false);
      }
    }
  }, [isSuccess, isSuccess2, customerDetailsData?.data?.name]);

  if (isLoading) {
    return <span>loading</span>;
  } else {
    return customer;
  }
};
export default CustomerComponent;
