import { useEffect, useState } from "react";

const ServiceTypeComponent = ({ props }) => {
  const [washingMachine, setWashingMachine] = useState(null);

  useEffect(() => {
    getWashingMachine(props.value);
  }, []);

  function getWashingMachine(wid) {
    if (wid != "") {
      let url =
        "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setWashingMachine(data);
        });
    }
  }

  return (
    <div style={{ color: "#24459C", fontSize: "10px" }}>
      {washingMachine.typeOfWashingMachine}
    </div>
  );
};

export default ServiceTypeComponent;
