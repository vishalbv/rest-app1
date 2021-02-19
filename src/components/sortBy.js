import React, { Component, useState } from "react";
import "./components.scss";
import onClickOutside from "react-onclickoutside";
import Clock from "../assets/Clock.png";
import upArrow from "../assets/UP ARROWbk.png";

function SortBy({ sortData: { options, onChange, active } }) {
  const [opened, setOpened] = useState(false);
  SortBy.handleClickOutside = () => setOpened(false);
  const toggle = (val) => {
    onChange(val);
    setOpened(false);
  };
  return (
    <div className="sort-bar">
      <div style={{ display: "flex" }} className="docenter">
        <div style={{ margin: "0 20px", marginRight: 30 }}> Sort by</div>
        <div className="active-bar" onClick={() => setOpened(!opened)}>
          <div style={{ padding: "0 4px" }}>{active.name}</div>
          <div style={{ padding: "0 4px" }}>
            <img
              src={upArrow}
              width={12}
              style={{
                transform: `rotate(${opened ? "0deg" : "180deg"})`,
              }}
            />
          </div>
        </div>
      </div>
      {opened && (
        <div className="sort-options">
          {options.map((i, k) => {
            return (
              <div
                key={k}
                onClick={() => toggle(i)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  // justifyContent: "center",
                }}
              >
                <span>
                  <img src={i.ico} width={30} />
                </span>
                <span style={{ paddingLeft: 10 }}> {i.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SortBy.handleClickOutside,
};

export default onClickOutside(SortBy, clickOutsideConfig);
