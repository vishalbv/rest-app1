import React, { Component, useEffect, useState } from "react";
import HeaderComp from "../components/headerComp";
import Location from "../assets/LOCATION.png";
import resImg from "../assets/download.jpg";
import Settings from "../assets/SETTINGS.png";

import Table from "../components/table";
import Clock from "../assets/Clock.png";
import Info1 from "../assets/MAIL.png";
import Info2 from "../assets/MALE.png";
import Info3 from "../assets/PANZEN ELIOT.png";
import Info4 from "../assets/PHONE.png";
import Info5 from "../assets/Calendar.png";
import Info6 from "../assets/REVENUE.png";
import Info7 from "../assets/iPad.png";
import Info8 from "../assets/ADDRESS ICON.png";
import Info9 from "../assets/LOCATION.png";
import Info10 from "../assets/LOGIN ID.png";
import Info11 from "../assets/PASSWORD.png";
import Bottom1 from "../assets/Collect.png";
import selected_ico from "../assets/ACCESS.png";
import notselected_ico from "../assets/SELECTED.png";
import Bottom2 from "../assets/Declined.png";
import Bottom3 from "../assets/TRASH.png";
import ACC_ico from "../assets/ACCESS.png";
import { useHistory } from "react-router-dom";

import A from "../assets/4.png";
import B from "../assets/Calendar.png";
import C from "../assets/PENDING.png";
import D from "../assets/3.png";
import upArrow from "../assets/UP ARROW.png";

import AlertBoxConfirm from "../components/AlertBoxConfirm/alertConfirm";
import ItemsDropdown from "../components/ItemsDropdown";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { convertArrayFromFirestore } from "../services/firestore";
import ItemsDropdownMultiple from "../components/ItemsDropdownMultiple";

const optionsData = [
  { id: 1, ico: selected_ico, name: "Smart Overview" },
  { id: 2, ico: selected_ico, name: "Reservations" },
  { id: 3, ico: notselected_ico, name: "Orders" },
  { id: 4, ico: selected_ico, name: "Products" },
  { id: 5, ico: selected_ico, name: "Customer Analytics" },
  { id: 6, ico: notselected_ico, name: "Employee Analytics" },
  { id: 7, ico: selected_ico, name: "Revenue Analytics" },
];

const InputBox = ({
  values: { placeholder, heading, width, onChange, icon },
}) => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width }} className="input-box">
      <div className="heading">{heading}</div>
      <div className="border-box">
        <img src={icon} className="small-ico" />

        <input
          //   style={{ width }}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
};

const InputBox2 = ({
  values: { placeholder, heading, width, onChange, icon },
}) => {
  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState(optionsData);

  const optionModified = (data) => {
    setOptions(data);
  };

  useEffect(() => {
    let count = options.filter((k, l) => k.selected).length;
    if (count > 1) setValue("Multiple Selected");
    else if (count == 1) setValue(options.filter((k, l) => k.selected)[0].name);
    else setValue("");
  }, [options]);

  return (
    <div style={{ width, position: "relative" }} className="input-box">
      <div className="heading">{heading}</div>
      <div className="border-box" style={{ position: "relative" }}>
        <img
          src={upArrow}
          width={13}
          onClick={() => setOpened(!opened)}
          style={{
            position: "absolute",
            cursor: "pointer",
            right: "0px",
            top: "9px",
            transform: `rotate(${opened ? "0deg" : "180deg"})`,
          }}
        />
        <img src={icon} className="small-ico" />

        <input
          style={{ cursor: "pointer" }}
          placeholder={placeholder}
          onClick={() => setOpened(!opened)}
          // onChange={(e) => {
          //   setValue(e.target.value);
          //   onChange(e.target.value);
          // }}
          value={value}
        />
      </div>
      <div style={{ position: "relative" }}>
        <ItemsDropdownMultiple
          options={options}
          setOptions={optionModified}
          // onChange={(i) => {
          //   setValue(i.name);
          //   onChange(i.name);
          // }}
          setOpened={setOpened}
          opened={opened}
        />
      </div>
    </div>
  );
};

const sortOptions = [
  { name: "Name", value: 0, ico: A, param: "heading" },
  { name: "Pending", value: 1, ico: B, param: "disb" },
  { name: "Tablets", value: 2, ico: C, param: "time" },
  { name: "Plan", value: 3, ico: D, param: "time" },
];

const Data = [
  {
    heading: "rrr eret",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "tgrt rtrt",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "trt trt",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "22th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
  {
    heading: "dfsdsf",
    disa: "sknjsdks ds,dmksd dskmdsd",
    disb: "sknjsdks ds,dmksd dskmdsd",
    money: "5000",
    time: "25th aug 2020",
  },
];

const AddCaptain = ({ restaurantId, firestore }) => {
  const [captain, setCaptain] = useState({});

  const inputCaptain = [
    {
      heading: "Captain Name",
      placeholder: "Captain Name*",
      onChange: (value) => setCaptain({ ...captain, name: value }),
      width: "22%",
      icon: Info2,
    },
    {
      heading: "Login Id",
      placeholder: "Login Id",
      onChange: (value) => setCaptain({ ...captain, id: value }),
      width: "22%",
      icon: Info10,
    },
    {
      heading: "Password",
      placeholder: "Password",
      onChange: (value) => setCaptain({ ...captain, password: value }),
      width: "22%",
      icon: Info11,
    },
    {
      heading: "Mail Id",
      placeholder: "Mail Id",
      onChange: (value) => setCaptain({ ...captain, mail: value }),
      width: "22%",
      icon: Info1,
    },
  ];

  const onAddCaptain = () => {
    if (captain.name && captain.id && captain.password && captain.mail) {
      console.log(captain);
      firestore
        .collection("restaurants")
        .doc(restaurantId)
        .collection("credentials")
        .add({ ...captain, type: "captain" })
        .then((res) => {
          alert("success");
        });
    }
  };

  return (
    <div className="add-captain">
      <div className="heading2">Add Captain</div>

      <div className="add-box">
        <div>
          <InputBox values={inputCaptain[0]} />
          <InputBox values={inputCaptain[1]} />
          <InputBox values={inputCaptain[2]} />
          <InputBox values={inputCaptain[3]} />
        </div>
        <div className="add-button" onClick={onAddCaptain}>
          <span> Create Captain</span>
        </div>
      </div>
    </div>
  );
};

const AddAdmin = ({ firestore, restaurantId }) => {
  console.log("firestore", firestore);
  const [admin, setAdmin] = useState({});

  const inputAdmin = [
    {
      heading: "Captain Name",
      placeholder: "Captain Name*",
      onChange: (value) => setAdmin({ ...admin, name: value }),
      width: "22%",
      icon: Info2,
    },
    {
      heading: "Login Id",
      placeholder: "Login Id",
      onChange: (value) => setAdmin({ ...admin, id: value }),
      width: "22%",
      icon: Info10,
    },
    {
      heading: "Password",
      placeholder: "Password",
      onChange: (value) => setAdmin({ ...admin, password: value }),
      width: "22%",
      icon: Info11,
    },
    {
      heading: "Mail Id",
      placeholder: "Mail Id",
      onChange: (value) => setAdmin({ ...admin, mail: value }),
      width: "22%",
      icon: Info1,
    },
    {
      heading: "Access",
      placeholder: "Give Access",
      onChange: (value) => setAdmin({ ...admin, mail: value }),
      width: "22%",
      icon: ACC_ico,
    },
  ];

  const onAddAdmin = () => {
    if (admin.name && admin.id && admin.password && admin.mail) {
      console.log(admin);
      firestore
        .collection("restaurants")
        .doc(restaurantId)
        .collection("credentials")
        .add({ ...admin, type: "admin" })
        .then((res) => {
          alert("success");
        });
    }
  };

  return (
    <div className="add-admin">
      <div className="heading2">Add Admin</div>

      <div className="add-box">
        <div>
          <InputBox values={inputAdmin[0]} />
          <InputBox values={inputAdmin[1]} />
          <InputBox values={inputAdmin[2]} />
          <InputBox values={inputAdmin[3]} />
          <InputBox2 values={inputAdmin[4]} />
          {/* <InputBox values={inputAdmin[4]} /> */}
        </div>
        <div className="add-button" onClick={onAddAdmin}>
          <span> Create Admin</span>
        </div>
      </div>
    </div>
  );
};
const Restaurant = ({ data, firestore, match, credentials }) => {
  let history = useHistory();
  const {
    clientName,
    location,
    address,
    contact,
    email,
    panzenPlan,
    tablets,
    price,
  } = data || {};
  console.log("credentials", credentials, "intial");
  const { params: { id: restaurantId } = {} } = match || {};
  const [searchVal, setSearchVal] = useState("");
  const [sortIndex, setSortIndex] = useState(sortOptions[0]);
  const [headers, setHeaders] = useState([
    "Captain",
    "Email ID",
    "Login ID",
    "Password",
    "Position",
  ]);
  const [displayData, setDisplayData] = useState([]);
  const [allData, setAllData] = useState([...credentials]);
  const [user, setUser] = useState({
    name: "any data",
    userName: "Le St Andre",
  });
  const [pagination, setPagination] = useState({
    perPage: 10,
    totalItems: 0,
    activePage: 0,
  });

  const [aler1, setaler1] = useState({
    showAlert: false,
    message: "",
    title: "",
    loading: false,
    status: "W",
  });

  const [aler2, setaler2] = useState({
    showAlert: false,
    message: "",
    title: "",
    loading: false,
    status: "W",
  });

  useEffect(() => {
    console.log("alldata changed");
    setPagination({
      ...pagination,
      totalItems: Math.ceil(allData.length / pagination.perPage),
      activePage: 0,
    });
  }, [allData]);

  useEffect(() => {
    setAllData([...credentials]);
  }, [credentials]);

  useEffect(() => {
    console.log(allData, "pagination chnged", pagination, [
      ...paginate(allData, pagination.perPage, pagination.activePage),
    ]);

    setDisplayData([
      ...paginate(allData, pagination.perPage, pagination.activePage),
    ]);
  }, [pagination]);

  const paginate = (array, page_size, page_number) => {
    return array.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
  };

  const searchValChange = (e) => {
    setSearchVal(e.target.value);
    console.log(e.target.value, "val");
    let dummy = Data.filter((i, k) =>
      i.heading.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(dummy);
    sortArr({ arr: dummy, param: sortIndex.param });

    // setAllData(dummy);
    // setPagination({ ...pagination, totalItems: dummy.length, activePage: 0 });
  };

  const sortArr = ({ arr, param }) => {
    setAllData([
      ...arr.sort((a, b) =>
        a[param].toString().localeCompare(b[param].toString())
      ),
    ]);
  };

  const show = (k) => {
    setDisplayData(
      displayData.map((m, n) => {
        if (n == k) return { ...m, show: !m.show };
        else return { ...m, show: false };
      })
    );
  };

  const sortChange = (val) => {
    setSortIndex(val);
    sortArr({ arr: allData, param: val.param });
  };

  const stopService = (val) => {
    setaler1({
      ...aler2,
      status: "S",
      message: "Stop services Successfully",
    });
  };

  const deleteTable = (val) => {
    setaler2({
      ...aler2,
      status: "S",
      message: "Table deleted Successfully",
    });
  };

  const Info = ({ icon, name }) => {
    return (
      <div className="info-item">
        <img src={icon} className="small-ico" style={{ marginRight: "10px" }} />
        <div>{name}</div>
      </div>
    );
  };
  return data ? (
    <div className="restaurant">
      <div className="profile" style={{ position: "relative" }}>
        <img src={resImg} className="profile-pic" />
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "2vw",
            cursor: "pointer",
          }}
          onClick={() => history.push(`/main/newclient`)}
        >
          <img src={Settings} className="big-ico" />
        </div>
        <div className="username">{clientName}</div>
      </div>
      <div>
        <div className="info-box">
          <Info icon={Info2} name={clientName} />
          <Info icon={Info4} name={contact} />
          <Info icon={Info3} name={user.name} />
          <Info icon={Info9} name={user.name} />
          <Info icon={Info1} name={email} />
          <Info icon={Info7} name={tablets} />
          <Info icon={Info8} name={location} />
          <Info icon={Info5} name={user.name} />
          <Info icon={Info6} name={user.name} />
        </div>
        <AddCaptain firestore={firestore} restaurantId={restaurantId} />

        <AddAdmin firestore={firestore} restaurantId={restaurantId} />
      </div>
      <div style={{ marginTop: "1vw" }}>
        {HeaderComp({
          header: "Admin/Captain Details",

          searchData: {
            value: searchVal,
            onChange: searchValChange,
            placeHolder: "Search Admin/Captain",
          },
          // sortData: {
          //   options: sortOptions,
          //   active: sortIndex,
          //   onChange: sortChange,
          // },
        })}
        <Table
          id={3}
          headers={headers}
          params={["name", "mail", "id", "password", "type"]}
          data={displayData || []}
          show={show}
          setPagination={setPagination}
          pagination={pagination}
          length={allData.length}
        />
      </div>
      <div className="docenter">
        <div className="bottom-button" style={{ backgroundColor: "#ffd600" }}>
          <img src={Bottom1} className="small-ico" />

          <span>Restaurant Access</span>
        </div>
        <div
          className="bottom-button"
          style={{ backgroundColor: "#ba5757" }}
          onClick={() => {
            // alert("k");
            setaler1({
              ...aler1,
              message: "Do You Want to Stop Services?",
              showAlert: true,
              status: "W",
            });
          }}
        >
          <img src={Bottom2} className="small-ico" />

          <span>Stop Services</span>
        </div>
        <div
          className="bottom-button"
          style={{ backgroundColor: "#ba5757" }}
          onClick={() => {
            setaler2({
              ...aler2,
              message: "Do You Want to Delete Restaurant?",
              showAlert: true,
              status: "W",
            });
          }}
        >
          <img src={Bottom3} className="small-ico" />

          <span>Delete Restaurant</span>
        </div>
      </div>
      <AlertBoxConfirm
        setAlert={setaler1}
        alert={aler1}
        userConfirm={true}
        callback={() => {
          stopService();
        }}
      />
      <AlertBoxConfirm
        setAlert={setaler2}
        alert={aler2}
        callback={() => {
          deleteTable();
        }}
      />
    </div>
  ) : (
    <div>Loading..</div>
  );
};

const enhance = compose(
  firestoreConnect(({ match }) => {
    const { params: { id } = {} } = match || {};
    return [
      {
        collection: "restaurants",
        doc: id,
        storeAs: "data",
      },
      {
        collection: "restaurants",
        doc: id,
        subcollections: [{ collection: "credentials" }],
        storeAs: "credentials",
      },
    ];
  }),
  connect((state) => ({
    data: state.firestore.data.data,
    credentials: convertArrayFromFirestore(state.firestore.data.credentials),
  }))
);
export default enhance(Restaurant);
