import React, { Component } from "react";
import "./components.scss";
import searchIco from "../assets/SEARCH.png";
const Search = ({ placeHolder, onChange, value }) => {
  return (
    <div className="search-comp">
      <img src={searchIco} className="search-ico" />

      <input placeholder={placeHolder} onChange={onChange} />
    </div>
  );
};

export default Search;
