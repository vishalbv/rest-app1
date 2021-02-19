import React from "react";
import Select, { components } from "react-select";
import DateIco from "../assets/Calendar.png";
import "./components.scss";

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>
    <img src={DateIco} className="small-ico" />

    <div style={{ width: "5vw" }}> {children}</div>
  </components.ValueContainer>
);

const CustomOption = ({ innerProps, isDisabled, children }) => {
  console.log(innerProps, "kkkkkkkk");
  return !isDisabled ? (
    <div
      {...innerProps}
      style={{ padding: ".5vw" }}
      className={"dropdown-item"}
    >
      <div style={{ color: "black" }}>{children}</div>
    </div>
  ) : null;
};
export const DropDownItem = ({ isDisabled, options, onChange, value }) => {
  return (
    <div style={{ opacity: isDisabled ? ".5" : "1" }}>
      <Select
        defaultValue={value}
        isDisabled={isDisabled}
        components={{ Option: CustomOption, ValueContainer }}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};
