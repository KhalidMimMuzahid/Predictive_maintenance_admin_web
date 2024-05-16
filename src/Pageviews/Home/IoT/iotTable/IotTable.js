import { Box } from "@mui/system";
import { useGetAllIotQuery } from "../../../../features/iot/iotSlice";
import Loader from "../../../../Utils/Loader";
import IotRawTable from "./IotRawTable";

const IotTable = () => {
  const {
    data: iot,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllIotQuery();

  if (isLoading || isError) {
    return <Loader />;
  }
  return (
    <Box>
      <IotRawTable data={iot?.data} />
    </Box>
  );
};

// import React from "react";

// const IotTable = () => {
//   return <div>IotTable</div>;
// };

export default IotTable;
