import React, { Component, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ClientDetails from "./clientDeatils";
import logo from "../assets/LOGO1.png";
import A from "../assets/A.png";
import B from "../assets/B.png";
import C from "../assets/C.png";
import D from "../assets/D.png";
import E from "../assets/E.png";
import F from "../assets/F.png";
import More from "../assets/more.png";

import Clock from "../assets/Clock.png";
import Overview from "./overview";
import "./main.scss";
import { useLocation, useHistory } from "react-router-dom";
import moment from "moment";
import NewClient from "./newClient";
import Restaurants from "./restaurants";
import Restaurant from "./restaurant";
import Payment from "./payment";
import DropdownModal from "../components/dropdownModal";

const userModalOptions = [
  {
    label: "Logout",
    icon: F,
    id: 0,
  },
];
const TopBar = ({ headerDate }) => {
  let history = useHistory();

  const [time, setTime] = useState("");
  const [userModalOpened, setUserModalOpened] = useState(false);

  useEffect(() => {
    setTime(moment().format("hh.mm A, DD MMM YYYY "));
    setInterval(() => {
      setTime(moment().format("hh.mm A, DD MMM YYYY "));
    }, 10000);
  }, []);

  const logout = () => {
    history.push(`/login`);
  };
  const dropDownChange = (val) => {
    if (val.id == 0) {
      logout();
    }
  };

  return (
    <div className="topbar">
      <div
        style={{
          float: "left",
          alignItems: "center",
          display: "flex",
          marginLeft: "20px",
        }}
      >
        <img src={Clock} className="medium-ico" />
        <span
          style={{
            marginLeft: "20px",
            color: "white",
            fontSize: ".85em",
            fontWeight: "400",
          }}
        >
          {time}
        </span>
      </div>
      <div
        className="user-details"
        onClick={() => {
          setUserModalOpened(!userModalOpened);
        }}
      >
        <div className="details">
          <img src={Clock} className="medium-ico" />

          <div style={{ padding: "0 1vw" }}>
            <div style={{ color: "#ffffff" }}>{"Tashin"}</div>
            <div style={{ color: "#ffffff88", fontSize: ".8em" }}>
              {"Admin"}
            </div>
          </div>
          <img
            src={More}
            width={18}
            style={{ transform: userModalOpened ? "rotate(180deg)" : "" }}
          />
        </div>
        {userModalOpened && (
          <DropdownModal
            options={userModalOptions}
            opened={userModalOpened}
            onChange={dropDownChange}
            setOpened={setUserModalOpened}
          />
        )}
      </div>
    </div>
  );
};

const LeftBar = ({ active }) => {
  let history = useHistory();

  const Comp = ({ source, title, status, width }) => {
    return (
      <div
        style={{ height: "50px", display: "flex", alignItems: "center" }}
        className="leftbaritem"
        onClick={() => {
          if (status == "login") {
            history.push(`/${status}`);
          } else if (status == "list") {
            history.push(`/main/${status}/restaurants`);
          } else history.push(`/main/${status}`);
        }}
      >
        <div
          style={{
            width: "5px",
            background: status == active ? "#fbd635" : "",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            background: status == active ? "#fbd635" : "",
            display: "flex",
            alignItems: "center",
            // justifyContent: "flex-start",
            marginLeft: "10px",
            height: "100%",
            width: "calc(100% - 45px)",
            padding: "0px 10px",
          }}
        >
          <div
            style={{
              width: 50,
              background: status == active ? "#fbd635" : "",

              marginLeft: "-10px",
            }}
          >
            <img
              src={source}
              className="lefticon"
              width={width}
              style={{
                marginLeft: status == "login" ? "0px" : `${(50 - width) / 2}px`,
                marginBottom: "-5px",
              }}
            />
          </div>
          <span
            className="leftheader"
            style={{
              color: status == active ? "#202a38" : "white",
              fontSize: ".8em",
              fontWeight: "400",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="leftbar">
      <div style={{ height: "10vw" }} className="docenter">
        <img src={logo} className="logo" />
      </div>
      <Comp
        source={A}
        title={"Smart Overview"}
        status={"overview"}
        width={45}
      />
      <div className="leftitem">clients</div>
      <Comp
        source={B}
        title={"Clients Details"}
        status={"clientDetails"}
        width={45}
      />
      <Comp source={C} title={"Payment"} status={"payment"} width={35} />
      <div className="leftitem">restaurant</div>
      <Comp
        source={D}
        title={"New Restaurent/Client"}
        status={"newclient"}
        width={35}
      />
      <Comp source={E} title={"Restaurents"} status={"list"} width={35} />
      <div style={{ marginTop: "20px" }}>
        <Comp source={F} title={"Log Out"} status={"login"} width={28} />
      </div>
    </div>
  );
};

const MainBar = () => {
  return (
    <div className="mainblock">
      <Switch>
        <Route exact path="/main/overview" component={Overview} />
        <Route exact path="/main/clientDetails" component={ClientDetails} />
        <Route exact path="/main/payment" component={Payment} />
        <Route exact path="/main/newclient" component={NewClient} />
        <Route exact path="/main/list/restaurants" component={Restaurants} />
        <Route exact path="/main/list/restaurant/:id" component={Restaurant} />
      </Switch>
    </div>
  );
};

const Main = () => {
  const [active, setActive] = useState("overview");

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname.split("/")[2]);
  }, [location]);
  return (
    <div className="main">
      <LeftBar active={active} />
      <TopBar />
      <MainBar />
    </div>
  );
};

export default Main;
