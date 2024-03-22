import { useStyle } from "../../styleComponents";

const LocationComponent = (props) => {
  const classes = useStyle();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.CustomerName}>
        {props.value.buildingNameRoomNumber + ", " + props.value.streetAddress}
      </div>
      <div className={classes.CustomerEmail}>
        {props.value.cityAddress +
          ", " +
          props.value.prefecture +
          "-" +
          props.value.postalCode}
      </div>
    </div>
  );
};

export default LocationComponent;
