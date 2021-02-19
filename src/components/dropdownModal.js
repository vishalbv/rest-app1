import React, { Component, useState } from "react";
import "./components.scss";
import onClickOutside from "react-onclickoutside";

function DropdownModal({ type, options, onChange, setOpened, opened }) {
  DropdownModal.handleClickOutside = () => {
    setTimeout(() => {
      setOpened(false);
    }, 200);
  };

  const toggle = (val) => {
    onChange(val);
    setOpened(false);
  };

  return (
    // <div className="dropdown-modal">
    opened ? (
      <div className="dropdown-modal">
        {options.map((i, k) => {
          return (
            <div key={k} onClick={() => toggle(i)} className="option">
              <span style={{ width: "35%" }}>
                <img src={i.icon} className="small-ico" />
              </span>

              <span> {i.label}</span>
            </div>
          );
        })}
      </div>
    ) : null
    // </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownModal.handleClickOutside,
};

export default onClickOutside(DropdownModal, clickOutsideConfig);
