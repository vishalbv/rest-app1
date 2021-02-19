import React, { Component, useState } from "react";
import "./components.scss";
import onClickOutside from "react-onclickoutside";
import Clock from "../assets/Clock.png";
import upArrow from "../assets/UP ARROWbk.png";

function ItemsDropdown({
  options,
  onChange,
  active,
  setOpened,
  opened,
  multiple,
}) {
  ItemsDropdown.handleClickOutside = () => {
    setTimeout(() => {
      setOpened(false);
    }, 200);
  };

  const toggle = (val) => {
    onChange(val);
    setOpened(false);
  };

  return opened ? (
    <div className="sort-options2">
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
            }}
          >
            <span>
              <img src={i.ico} width={26} />
            </span>
            <span style={{ paddingLeft: 10 }}> {i.name}</span>
          </div>
        );
      })}
    </div>
  ) : null;
}

const clickOutsideConfig = {
  handleClickOutside: () => ItemsDropdown.handleClickOutside,
};

export default onClickOutside(ItemsDropdown, clickOutsideConfig);
