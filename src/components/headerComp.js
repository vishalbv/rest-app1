import React, { Component } from "react";
import Search from "./search";
import SortBy from "./sortBy";
import "./components.scss";
const HeaderComp = ({ sortData, searchData, header }) => {
  return (
    <div
      className="header-comp"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "99%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="heading">{header}</div>

        {Search(searchData)}
      </div>
      <div>{sortData && <SortBy sortData={sortData} />}</div>
    </div>
  );
};

export default HeaderComp;
