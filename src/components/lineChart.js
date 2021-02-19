import React, { useEffect, useState } from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryContainer,
} from "victory";
// import Loader from "./Loader";
// import { dataChart } from "../../../constants/data";

const dataChart = [
  { date: 1, earnings: 200 },
  { date: 2, earnings: 3200 },
  { date: 3, earnings: 400 },
  { date: 4, earnings: 800 },
  { date: 5, earnings: 200 },
  { date: 6, earnings: 1270 },
  { date: 7, earnings: 730 },
  { date: 8, earnings: 3480 },
  { date: 9, earnings: 460 },
  { date: 10, earnings: 2390 },
  { date: 11, earnings: 470 },
  { date: 12, earnings: 1090 },
  { date: 13, earnings: 390 },
  { date: 14, earnings: 590 },
  { date: 15, earnings: 1650 },
  { date: 16, earnings: 3432 },
  { date: 17, earnings: 850 },
  { date: 18, earnings: 579 },
  { date: 19, earnings: 1349 },
  { date: 20, earnings: 1534 },
  { date: 21, earnings: 259 },
  { date: 22, earnings: 2350 },
  { date: 23, earnings: 3480 },
  { date: 24, earnings: 876 },
  { date: 25, earnings: 2802 },
];

const LineChart = () => {
  const [selected, toggleSelected] = useState();
  const [loader, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <div className={"line-chart"}>
      <div>
        <text className={"heading3"}>Clients</text>
      </div>

      <VictoryChart domainPadding={5} width={1000} height={255}>
        <VictoryAxis
          tickValues={[1, 5, 10, 15, 20, 25]}
          tickFormat={["Jan", "Mar", "Jul", "Aug", "Oct", "Dec"]}
          style={styles.axisStyley}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={["100", "80", "60", "40", "20"]}
          tickValues={[200, 1000, 1750, 2500, 3200]}
          style={styles.axisStylex}
        />
        <VictoryLine
          style={{
            data: { stroke: "#4ad991", strokeWidth: 2 },
          }}
          data={dataChart}
          x="date"
          y="earnings"
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;

const styles = {
  axisStylex: {
    axis: { stroke: "transparent" },
    tickLabels: {
      fontSize: 11,
      padding: 10,
      fill: "white",
      //   fontFamily: "CircularStd",
      fontWeight: 500,
      lineHeight: 0.75,
    },
  },
  axisStyley: {
    axis: { stroke: "transparent" },
    tickLabels: {
      fontSize: 11,
      padding: 17,
      fill: "white",
      //   fontFamily: "CircularStd",
      fontWeight: 500,
      lineHeight: 0.75,
    },
  },
};
