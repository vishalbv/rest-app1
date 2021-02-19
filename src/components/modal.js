import React, { FunctionComponent } from "react";
import "./components.scss";
import close_logo from "../assets/CLOSE.svg";

const Modal = ({ children, show, styleName, toggleShow }) => {
  return show ? (
    <div className={"modalView"}>
      <div>
        <div>
          <div>
            <img onClick={toggleShow} src={close_logo} alt={"close"} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "40vh",
                justifyContent: "center",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
