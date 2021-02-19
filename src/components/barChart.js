import React, { FunctionComponent, useEffect, useState } from "react";

import {
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryStack,
  VictoryLabel,
  Rect,
} from "victory";
import "./components.scss";

const dataChart = [
  { val: 1000, city: "bang" },
  { val: 700, city: "mang" },
  { val: 850, city: "udpi" },
  { val: 920, city: "sagar" },
];

const totalData = dataChart.map((i) => {
  return { ...i, val: i.val * 2 };
});
// const Toggle = () => {
//   const selectedStyle =
//     selected === label
//       ? "order_details_toggleButton_switch order_details_toggleButton_switch_on"
//       : "order_details_toggleButton_switch";
//   return (
//     <div
//       className={"order_details_toggleButton_parent"}
//       onClick={() => onToggle(label)}
//     >
//       <div className={selectedStyle} />
//       <text className={"order_details_toggleButton_label"}>{label}</text>
//     </div>
//   );
// };

const Comp = (props) => {
  console.log(props, "bak");

  //   let height=props.height;
  let width = props.width;
  let diff = width - 120;
  let x = props.x + diff / 2;
  let y;
  return (
    <svg
      style={{ fill: "#4ad991" }}
      height={50}
      width={120}
      x={x}
      y={props.y - 25}
    >
      <path
        d="M 0 0 L 120 0 L 120 30 L 70 30 L 60 40 L 50 30 L 0 30 Z"
        stroke={"black"}
        strokeWidth={2}
      />
    </svg>
  );
};
const BackgroundComponent = (props) => {
  //   console.log(pp, "ppppp");
  //   console.log(x, y);
  console.log(props, "label");
  return (
    <VictoryLabel
      {...props}
      lineHeight={-0.5}
      height={200}
      y={props.y - 22}
      style={{ fontWeight: "bold" }}
      backgroundStyle={{ fill: "pink" }}
      //   backgroundPadding={8}
      backgroundComponent={<Comp />}
    />
  );
};
const BarChart = () => {
  //   const [toggle, handleToggle] = useState(selected);
  //   const [year, handleYear] = useState(selectedYear);
  // const [loader, setLoading] = useState(loading);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  //   }, []);
  return (
    <div className={"bar-chart"}>
      <div>
        <text className={"heading3"}>Geography</text>
      </div>
      <VictoryChart domainPadding={50} width={1100} height={400}>
        <VictoryAxis
          tickValues={totalData.map((i) => i.city)}
          tickFormat={totalData.map((i) => i.city)}
          style={styles.axisStyley}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={["0", "400", "800", "1200", "1600", "2000", "2400"]}
          tickValues={[0, 400, 800, 1200, 1600, 2000, 2400]}
          style={styles.axisStylex}
        />
        {/* <VictoryBar
          style={{ data: { fill: "#f16548", width: 18 } }}
          data={dataChart}
          x={"month"}
          y={"orders"}
          labels={(data) => {
            console.log(data, "kk");
            return "llll";
          }}
        /> */}

        <VictoryStack
          colorScale={["tomato", "orange", "gold"]}
          backgroundStyle={{ fill: "pink" }}
          //   backgroundPadding={8}
          //   backgroundComponent={<BackgroundComponent />}
          labelComponent={<BackgroundComponent />}
          labels={({ datum }) => {
            return `${datum._y0}/${datum._y1}`;
          }}
        >
          <VictoryBar
            style={{ data: { width: 18 } }}
            data={dataChart}
            x={"city"}
            y={"val"}
            // labels={(data) => {
            //   console.log(data, "kk");
            //   return "llll";
            // }}
          />
          <VictoryBar
            style={{ data: { width: 18 } }}
            data={dataChart}
            x={"city"}
            y={"val"}
          />
        </VictoryStack>
      </VictoryChart>
      {/* <div className={"order_details_third_child"}>
        <Toggle
          selected={toggle}
          label={"All"}
          onToggle={(label) => handleToggle(label)}
        />
        <Toggle
          selected={toggle}
          label={"Dine In"}
          onToggle={(label) => handleToggle(label)}
        />
        <Toggle
          selected={toggle}
          label={"Online"}
          onToggle={(label) => handleToggle(label)}
        />
      </div> */}
    </div>
  );
};

export default BarChart;

const styles = {
  axisStylex: {
    axis: { stroke: "transparent" },
    tickLabels: {
      fontSize: 13,
      padding: 20,
      fill: "white",
      //   fontFamily: "CircularStd",
      fontWeight: 500,
      lineHeight: 0.75,
    },
  },
  axisStyley: {
    axis: { stroke: "transparent" },
    tickLabels: {
      fontSize: 13,
      padding: 22,
      fill: "white",
      //   fontFamily: "CircularStd",
      fontWeight: 500,
      lineHeight: 0.75,
    },
  },
};
