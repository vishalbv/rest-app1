import React, { FunctionComponent } from "react";
import "./editModalComponent.scss";
import close_logo from "../../assets/Others/CLOSE.svg";

const EditModal = ({ children, show, styleName, toggleShow }) => {
  const showHideClassName = `editModal${styleName ? ` ${styleName}` : ""}`;
  return show ? (
    <div className={showHideClassName}>
      <div>
        <div>
          <div>
            <img onClick={toggleShow} src={close_logo} alt={"close"} />
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default EditModal;
