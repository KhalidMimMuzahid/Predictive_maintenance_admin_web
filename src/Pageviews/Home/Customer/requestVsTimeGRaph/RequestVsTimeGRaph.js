import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";

const RequestVsTimeGRaph = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [graphObjectData, setGraphObjectData] = useState({});
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/reservation/common/request-vs-time-graph`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log({ graphObjectData: data?.data });
        setGraphObjectData(data?.data);
        console.log(
          Object.entries(data?.data).map((each) => {
            return { x: each[0], y: each[1] };
          })
        );
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Box sx={{ display: "flex", gap: "0 20px", marginTop: "16px" }}>
      <LeftSide graphObjectData={graphObjectData} />
      <RightSide />
    </Box>
  );
};

export default RequestVsTimeGRaph;
