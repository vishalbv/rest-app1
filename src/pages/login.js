import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactSwitch from "react-switch";
import Logo from "../assets/LOGO.png";
import RightImg from "../assets/ILLUSTRATION.png";
import "./main.scss";

const LeftSection = () => {
  const [isRemember, setIsRemember] = useState(false);
  const [user, setUser] = useState({});
  let history = useHistory();

  return (
    <div className="left-section">
      <div className="box">
        <div className="item">
          <div>PANZEN SUITE ADMIN</div>
          <input placeholder="john@panzen.me" />
        </div>
        <div className="item">
          <div>PASSWORD</div>
          <input placeholder="*******" type="password" />
        </div>
        <div className="box2">
          <div>Remember me</div>
          <div>
            <ReactSwitch
              onChange={(val) => setIsRemember(val)}
              checked={isRemember}
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              height={24}
              activeBoxShadow={"0 0 2px 3px grey"}
              width={45}
              onColor="#3bf"
            />
          </div>
        </div>
        <div
          className="login-button"
          onClick={() => history.push(`/main/overview`)}
        >
          Login
        </div>
        <div className="forgot" style={{ color: "#ffffff70" }}>
          Forgot password?
        </div>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="right-section">
      <img src={RightImg} className="right-img" />
    </div>
  );
};

const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={Logo} className="logo-ico" />
      </div>
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Login;
