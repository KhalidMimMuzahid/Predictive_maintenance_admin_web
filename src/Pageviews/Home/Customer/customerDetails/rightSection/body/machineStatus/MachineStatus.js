import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MachineStatus = () => {
  const [machine, setMachine] = useState([]);

  const uid = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/${uid?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setMachine(data?.data);
        } else {
          setMachine([]);
        }
      });
  }, []);

  return <div>MachineStatus</div>;
};

export default MachineStatus;
