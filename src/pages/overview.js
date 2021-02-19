import React, { Component, useEffect, useState } from "react";
import Location from "../assets/LOCATION.png";
import A1 from "../assets/1.png";
import A2 from "../assets/2.png";
import A6 from "../assets/3.png";
import A5 from "../assets/4.png";
import A4 from "../assets/5.png";
import A3 from "../assets/6.png";
import Sort from "../assets/HANDBURGER.svg";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart";
import PieChart from "../components/pieChart";
import { SortDate } from "../components/sortDate";
import moment from "moment";

const clients = [
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 0 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 0 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 0 },
  { name: "client1", city: "bengaluru", info: "panzenplus", status: 1 },
];

const Info = ({ icon, name, value }) => {
  return (
    <div className="info-item docenter">
      <div className="icon-div docenter">
        <img src={icon} className="medium-ico" />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <div style={{ fontSize: ".9em", color: "#e4e4e4" }}>{name}</div>
        <div style={{ fontSize: "1.5em" }}>{value}</div>
      </div>
    </div>
  );
};
const Overview = ({}) => {
  const [overviewData, setOverviewData] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [headerDate, setHeaderDate] = useState("");
  const [dateVal, setDateVal] = useState("Till Date");

  const getHeader = ({ item, val }) => {
    // alert(item && item?.id);
    if (item && item.id == 1) setDateVal(item.label + " " + val.label);
    else if (item && item.id == 2)
      setDateVal(val.label + " " + moment().format("YYYY"));
    else if (item && item.id == 3)
      setDateVal(val.label + " " + moment().format("YYYY"));
    else if (item && item.id == 4)
      setDateVal(moment(val.label).format("DD MMM YYYY"));
    else return setDateVal("Till Date");
  };

  useEffect(() => {
    getHeader(selectedDate);
  }, [selectedDate]);

  return (
    <div className="overview">
      <div
        className={"top-box"}
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <div className="heading">Smart Overview</div>
        <div>
          <div className="date-button">{dateVal}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <SortDate
            onSelectItem={(data) => {
              console.log("set donr", data);
              setSelectedDate(data);
            }}
            selectedFinalItem={selectedDate}
          />
        </div>
      </div>

      <div className="info-box">
        <div>
          <Info name={"google"} value={"sfsfs ds"} icon={A1} />
          <Info name={"google"} value={"sfsfs ds"} icon={A2} />
          <Info name={"google"} value={"sfsfs ds"} icon={A3} />
        </div>
        <div>
          <Info name={"google"} value={"sfsfs ds"} icon={A4} />
          <Info name={"google"} value={"sfsfs ds"} icon={A5} />
          <Info name={"google"} value={"sfsfs ds"} icon={A6} />
        </div>
      </div>

      <div>
        <LineChart />
      </div>
      <div className="table-div2">
        <div className="client-div">
          <div className="heading3">New Clients</div>
          {clients.map((i, k) => {
            return (
              <div className="item">
                <div>{i.name}</div>
                <div style={{ color: "#e4e4e499" }}>{i.city}</div>
                <div style={{ color: i.status == 1 ? "#00bb5d" : "#bb9b00" }}>
                  {i.info}
                </div>
              </div>
            );
          })}
        </div>
        <div className="rev-div">
          <div className="heading3">Revenue</div>
          <PieChart />
        </div>
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default Overview;
