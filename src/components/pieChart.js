import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import "./components.scss";

const dataChart = [
  { category: "Beer", revenue: 58, radius: 170, color: "#5073b8" },
  { category: "Appetizers", revenue: 22, radius: 160, color: "#0ab39c" },
  { category: "Whiskey", revenue: 18, radius: 140, color: "#f1963a" },
  { category: "Entrees", revenue: 12, radius: 120, color: "#f16548" },
];

const Item = ({ color, name, sale }) => {
  const bgColor = { backgroundColor: `${color}` };
  return (
    <div className="item">
      <div className={"icon"} style={bgColor}></div>
      <div>{name}</div>
      <div>{`${sale}%`}</div>
    </div>
  );
};

const PieChart = () => {
  //   const [selected, toggleSelected] = useState(selectedMonth);
  //   const [loader, setLoading] = useState(loading);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  //   }, []);

  return (
    <div className="pie-chart">
      <div>
        {dataChart.map((data, k) => (
          <Item
            key={k}
            color={data.color}
            name={data.category}
            sale={data.revenue}
          />
        ))}
      </div>
      <div>
        <VictoryPie
          data={dataChart}
          colorScale={["#5073b8", "#0ab39c", "orange", "#f16548"]}
          x={"category"}
          y={"revenue"}
          innerRadius={80}
          labels={[""]}
          radius={(data, k) => {
            return data.datum.radius;
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
