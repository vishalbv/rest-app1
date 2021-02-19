import React, { FunctionComponent } from "react";
import "./alertbox.css";
import close from "../../assets/Others/CLOSE.svg";
import success_icon from "../../assets/Others/success_alert.jpeg";
import fail_icon from "../../assets/Others/fail_alert.jpeg";

const AlertBox = ({
  success,
  message,
  title = success ? "Action Completed" : "Action Failed",
  handleClose,
  show,
}) => {
  const showHideClassName = show
    ? "alertBox display-block"
    : "alertBox display-none";

  return (
    <div className={showHideClassName}>
      <div>
        <img
          src={success ? success_icon : fail_icon}
          // className={success ? 'green' : 'orange'}
        />
        <text>{title}</text>
        <text>{message}</text>
        <text
          onClick={() => handleClose()}
          className={success ? "Done" : "Close"}
        >
          {success ? "Done" : "Close"}
        </text>
      </div>
    </div>
  );
};

export default AlertBox;
