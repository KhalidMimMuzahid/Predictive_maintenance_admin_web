import { useStyle } from "../../styleComponents";

const LocationComponent = ({ props }) => {
  const classes = useStyle();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.CustomerName}>
        {props?.row?.showaUser?.addresses[0].address?.street +
          ", " +
          props?.row?.showaUser?.addresses[0].address?.buildingName}
      </div>
      <div className={classes.CustomerEmail}>
        {props?.row?.showaUser?.addresses[0].address?.city +
          ", " +
          props?.row?.showaUser?.addresses[0].address?.prefecture +
          "-" +
          props?.row?.showaUser?.addresses[0].address?.postalCode}
      </div>
    </div>
  );
};

export default LocationComponent;
