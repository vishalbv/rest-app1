import React, { Component, useState } from "react";
import HeaderComp from "../components/headerComp";
import Location from "../assets/LOCATION.png";
import resImg from "../assets/download.jpg";

import A from "../assets/4.png";
import B from "../assets/Calendar.png";
import C from "../assets/Currency_Exchange.png";
import D from "../assets/3.png";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const sortOptions = [
  { name: "Name", value: 0, ico: A, param: "heading" },
  { name: "Date Joined", value: 1, ico: B, param: "disb" },
  { name: "Revenue", value: 2, ico: C, param: "time" },
  { name: "Plan", value: 3, ico: D, param: "time" },
];

const Data = [
  {
    heading: "rrr eret",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "tgrt rtrt",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "trt trt",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "23th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "27th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "11th aug 2020",
  },
];

const Restaurants = ({ restaurants }) => {
  console.log("restaurants", restaurants);
  let history = useHistory();

  const [searchVal, setSearchVal] = useState("");
  const [sortIndex, setSortIndex] = useState(sortOptions[0]);

  const [displayData, setDisplayData] = useState([]);
  const [allData, setAllData] = useState([...Data]);

  const searchValChange = (e) => {
    setSearchVal(e.target.value);
    console.log(e.target.value, "val");
    let dummy = Data.filter((i, k) =>
      i.heading.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(dummy);
    sortArr({ arr: dummy, param: sortIndex.param });

    // setAllData(dummy);
    // setPagination({ ...pagination, totalItems: dummy.length, activePage: 0 });
  };

  const sortArr = ({ arr, param }) => {
    setAllData([
      ...arr.sort((a, b) =>
        a[param].toString().localeCompare(b[param].toString())
      ),
    ]);
  };

  const sortChange = (val) => {
    setSortIndex(val);
    sortArr({ arr: allData, param: val.param });
  };
  const ResDiv = ({ data, id }) => {
    return (
      <div
        className="block"
        style={{ textAlign: "left", cursor: "pointer" }}
        onClick={() => {
          history.push(`/main/list/restaurant/${id}`);
        }}
      >
        <img src={resImg} className="image" />

        <div style={{ margin: "1.5vw 0" }}>
          <div style={{}}>{data.heading}</div>
          <div style={{ margin: "1vw 0", fontWeight: "600" }}>
            <div>{data.name}</div>

            <div>{data.clientName}</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{data.price}</div>
            <div>{data.location}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="restaurants">
      {HeaderComp({
        header: "Restaurants",
        searchData: {
          value: searchVal,
          onChange: searchValChange,
          placeHolder: "Search Restaurants",
        },
        sortData: {
          options: sortOptions,
          active: sortIndex,
          onChange: sortChange,
        },
      })}

      <div className="docenter">
        <img src={Location} className="big-ico" />

        <div className="location">{"Bengaluru"}</div>
      </div>

      <div className="res-table">
        {restaurants &&
          Object.keys(restaurants).map((key) => {
            const data = restaurants[key];
            return <ResDiv data={data} key={key} id={key} />;
          })}
      </div>
    </div>
  );
};

const enhance = compose(
  firestoreConnect(() => [
    {
      collection: "restaurants",
      storeAs: "restaurants",
    },
  ]),
  connect((state) => ({
    restaurants: state.firestore.data.restaurants,
  }))
);
export default enhance(Restaurants);
