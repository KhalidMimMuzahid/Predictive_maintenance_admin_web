import { Close } from "@mui/icons-material";
import { Container, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LocationComponent = ({ props }) => {
  const [washingMachine, setWashingMachine] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const [mapAdds, setMapAdds] = useState("");

  //   useEffect(() => {
  //     getWashingMachine(props?.value);
  //   }, []);

  //   function getLatLong(address) {
  //     geocodeByAddress(address)
  //       .then((results) => getLatLng(results[0]))
  //       .then((latLng) => {
  //         console.log("Success", latLng);
  //         setMapAdds(
  //           "https://maps.google.com/maps?q=" +
  //             latLng.lat +
  //             "," +
  //             latLng.lng +
  //             "&h1=es;&output=embed"
  //         );
  //         setShowLocationModal(true);
  //       })
  //       .catch((error) => console.error("Error", error));
  //   }

  //   function getWashingMachine(wid) {
  //     if (wid != "") {
  //       let url =
  //         "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
  //       fetch(url, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setWashingMachine(data);
  //         });
  //     }
  //   }

  function displayLocation() {
    if (washingMachine == null)
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>Please Wait</h3>
        </div>
      );

    return (
      <div
        style={{
          color: "#24459C",
          backgroundColor: "#DEE5F7",
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: "25px",
          fontSize: "10px",
        }}
        onClick={(e) => {
          //   console.log(washingMachine.address);
          //   getLatLong(washingMachine.address);
        }}
      >
        View Location
      </div>
    );
  }

  return (
    <div>
      <Modal open={showLocationModal}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              style={{ color: "#24459c", fontSize: "24px", fontWeight: "700" }}
            >
              Show Location
            </Typography>

            <IconButton
              style={{ right: "10" }}
              onClick={() => setShowLocationModal(false)}
            >
              <Close />
            </IconButton>
          </div>

          <div style={{ position: "relative", height: "90%", zIndex: 2 }}>
            <iframe
              src={mapAdds}
              style={{ height: "100%", width: "100%" }}
              title="T"
            ></iframe>
          </div>
        </Container>
      </Modal>
      {displayLocation()}
    </div>
  );
};

export default LocationComponent;
