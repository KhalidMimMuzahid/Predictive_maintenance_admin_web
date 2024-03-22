import { useDispatch } from "react-redux";
import { changeCustomerId } from "../../../../../Redux/actions";
import { Typography } from "@mui/material";

const DetailsComponent = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
      onClick={() => {
        dispatch(changeCustomerId(props.value.uid));
      }}
    >
      <Typography>View Details</Typography>
    </div>
  );
};

export default DetailsComponent;
