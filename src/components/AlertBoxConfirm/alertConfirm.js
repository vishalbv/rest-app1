import React, { FunctionComponent } from "react";
import close from "../../assets/Others/CLOSE.svg";
import "../AlertBoxConfirm/alertboxConfirm.scss";
import success_icon from "../../assets/Others/success_alert.jpeg";
import fail_icon from "../../assets/Others/fail_alert.jpeg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ItemsArr = [
  { status: "F", ico: fail_icon, heading: "Action Failed" },
  { status: "W", ico: fail_icon, heading: "Warning" },
  { status: "S", ico: success_icon, heading: "Action Completed" },
];

const AlertBoxConfirm = ({ setAlert, alert, callback, userConfirm }) => {
  const { showAlert, message, title, status, loading } = alert;
  const showHideClassName = showAlert
    ? "alertBox2 display-block"
    : "alertBox2 display-none";

  const item = ItemsArr.find((i, k) => i.status == status);
  return (
    <div className={showHideClassName}>
      <div>
        {loading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : (
          // className={success ? 'green' : 'orange'}

          <img src={item?.ico} />
        )}
        <text>{item?.heading}</text>
        <text style={{ padding: 20 }}>{message}</text>
        {/* <text
          onClick={() => handleClose()}
          className={success ? "Done" : "Close"}
        >
          {success ? "Done" : "Close"}
        </text>
        <text
          onClick={() => handleClose()}
          className={success ? "Done" : "Close"}
        >
          {success ? "Done" : "Close"}
        </text> */}
        {userConfirm && (
          <div style={{ width: "100%" }}>
            <input placeholder="Confirm password" className={"confirm"} />
          </div>
        )}
        <div
          style={{
            // position: "absolute",
            bottom: "20px",
            // right: "20px",
            padding: "1vw",
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {item?.status == "W" && (
            <text
              onClick={() => {
                if (callback) callback();
              }}
              className={"Done"}
            >
              {"Yes, Do"}
            </text>
          )}
          <text
            onClick={() => setAlert({ ...alert, showAlert: false })}
            className={item?.status == "S" ? "Done" : "Close"}
          >
            {item?.status == "S" ? "Done" : "Close"}
          </text>
        </div>
      </div>
    </div>
  );
};

export default AlertBoxConfirm;
