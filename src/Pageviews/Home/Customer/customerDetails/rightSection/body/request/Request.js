import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Request = () => {
  // /customer/reservation/common/get-my-reservations/:uid

  const [requests, setRequests] = useState([]);

  const params = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/reservation/common/get-my-reservations/${params?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        if (data?.connectedReservations) {
          const connectedReservations = data?.connectedReservations?.map(
            (each) => {
              return { ...each, type: "connected" };
            }
          );
          setRequests((prev) => [...prev, ...connectedReservations]);
        }
        if (data?.notconnectedReservations) {
          const notconnectedReservations = data?.notconnectedReservations?.map(
            (each) => {
              return { ...each, type: "not connected" };
            }
          );
          setRequests((prev) => [...prev, ...notconnectedReservations]);
        }

        // if (data?.success) {
        //   setRequests(data?.data);
        // } else {
        //   setRequests([]);
        // }
      });
  }, []);

  return <div>Request</div>;
};

export default Request;
