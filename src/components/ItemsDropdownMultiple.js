import React, { Component, useState } from "react";
import "./components.scss";
import onClickOutside from "react-onclickoutside";
import Clock from "../assets/Clock.png";
import upArrow from "../assets/UP ARROWbk.png";
import selected_ico from "../assets/ACCESS.png";
import notselected_ico from "../assets/SELECTED.png";

function ItemsDropdownMultiple({
  options,
  onChange,
  setOptions,
  active,
  setOpened,
  opened,
  multiple,
}) {
  ItemsDropdownMultiple.handleClickOutside = () => {
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
            onClick={() => {
              setOptions(
                options.map((m, n) => {
                  if (m.id == i.id) return { ...m, selected: !m.selected };
                  else return m;
                })
              );
            }}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <span>
              <img
                src={i.selected ? selected_ico : notselected_ico}
                width={26}
              />
            </span>
            <span style={{ paddingLeft: 10 }}> {i.name}</span>
          </div>
        );
      })}
    </div>
  ) : null;
}

const clickOutsideConfig = {
  handleClickOutside: () => ItemsDropdownMultiple.handleClickOutside,
};

export default onClickOutside(ItemsDropdownMultiple, clickOutsideConfig);
