import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
const SpeedometerProgress = ({ progressValue }) => (
  <div>
    <div>
      <ReactSpeedometer
        width={400}
        needleHeightRatio={0.7}
        value={progressValue}
        maxValue={100}
        minValue={0}
        customSegmentStops={[0, 35, 65, 100]}
        segmentColors={["#ca583f", "#fddd60", "#58d9f9"]}
        currentValueText=" "
        customSegmentLabels={[
          {
            position: "OUTSIDE",
            color: "#d8dee9",
          },
          {
            position: "OUTSIDE",
            color: "#d8dee9",
          },
          {
            position: "OUTSIDE",
            color: "#d8dee9",
          },
        ]}
        ringWidth={10}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"#5470c6"}
        textColor={"#d8dee9"}
      />
    </div>
  </div>
);

export default SpeedometerProgress;
