import React, { Component, useState } from "react";
import upArrow from "../assets/UP ARROW.png";
import ItemsDropdown from "./ItemsDropdown";

export const InputBox2 = ({
  values: { id, placeholder, heading, width, onChange },
  validation,
  setValidation,
  options,
}) => {
  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ width }} className="input-box">
      <div className="heading">
        {heading}
        {validation.clicked && validation.fields.indexOf(id) != -1 && (
          <span
            style={{ color: "#c67b7b", padding: "0 10px" }}
          >{`Enter ${placeholder}`}</span>
        )}
      </div>
      <div style={{ position: "relative", cursor: "pointer" }}>
        <img
          src={upArrow}
          onClick={() => setOpened(!opened)}
          width={13}
          style={{
            position: "absolute",
            right: "0px",
            top: "15px",
            transform: `rotate(${opened ? "0deg" : "180deg"})`,
          }}
        />
        <input
          style={{ cursor: "pointer" }}
          placeholder={placeholder}
          onClick={() => setOpened(!opened)}
          value={value}
        />

        <ItemsDropdown
          key={id}
          options={options}
          onChange={(i) => {
            if (i.name == "") {
              setValidation({
                ...validation,
                fields: [...validation.fields, id],
              });
            } else {
              setValidation({
                ...validation,
                fields: validation.fields.filter((item) => item !== id),
              });
            }
            setValue(i.name);
            onChange(i.name);
          }}
          setOpened={setOpened}
          opened={opened}
        />
      </div>
    </div>
  );
};
