import { useStyle } from "../../styleComponents";

const CustomerNameEmailComponent = (props) => {
  const classes = useStyle();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={classes.CustomerName}>
        {props.value.lastNameAlphabet + ", " + props.value.firstNameAlphabet}
      </div>
      <div className={classes.CustomerEmail}>{props.value.email}</div>
    </div>
  );
};

export default CustomerNameEmailComponent;
