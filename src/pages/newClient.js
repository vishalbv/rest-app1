import React, { Component, useState } from "react";
import {
  firestoreConnect,
  withFirebase,
  withFirestore,
} from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import DragDrop from "../components/dragDrop";
import ItemsDropdown from "../components/ItemsDropdown";
import upArrow from "../assets/UP ARROW.png";

import Modal from "../components/modal";
import { InputBox2 } from "../components/inputBox2";

const optionsData = [{ name: "basic" }, { name: "basic" }, { name: "basic" }];

const InputBox = ({
  values: { id, placeholder, heading, width, onChange },
  validation,
  setValidation,
}) => {
  const [value, setValue] = useState("");

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
      <div>
        <input
          //   style={{ width }}
          placeholder={placeholder}
          onChange={(e) => {
            if (e.target.value == "") {
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
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
};

const NewClient = ({ firestore, editModal }) => {
  let history = useHistory();

  console.log("NewClient", firestore);
  const [client, setClient] = useState({});
  const [modal, setModal] = useState(false);
  const [validation, setValidation] = useState({
    clicked: false,
    fields: [0, 1, 2, 3, 4, 5, 6, 7],
  });

  const inputValues = [
    {
      id: 0,
      heading: "Restaurant Name",
      placeholder: "Restaurant Name*",
      onChange: (value) => setClient({ ...client, clientName: value }),
      width: "30%",
    },
    {
      id: 1,
      heading: "Location",
      placeholder: "Client Location*",
      onChange: (value) => setClient({ ...client, location: value }),
      width: "30%",
    },
    {
      id: 2,
      heading: "Address",
      placeholder: "Client Address*",
      onChange: (value) => setClient({ ...client, address: value }),
      width: "85%",
    },
    {
      id: 3,
      heading: "Contact",
      placeholder: "Client Contact*",
      onChange: (value) => setClient({ ...client, contact: value }),
      width: "30%",
    },
    {
      id: 4,
      heading: "Mail Id",
      placeholder: "Client Mail*",
      onChange: (value) => setClient({ ...client, email: value }),
      width: "30%",
    },
    {
      id: 5,
      heading: "Panzen Plan",
      placeholder: "Panzen Basic*",
      onChange: (value) => setClient({ ...client, panzenPlan: value }),
      width: "30%",
    },
    {
      id: 6,
      heading: "Tablets",
      placeholder: "Number of tablets*",
      onChange: (value) => setClient({ ...client, tablets: value }),
      width: "30%",
    },
    {
      id: 7,
      heading: "Panzen Suite Price",
      placeholder: "5000/-",
      onChange: (value) => setClient({ ...client, price: value }),
      width: "30%",
    },
    {
      id: 8,
      heading: "New Location",
      placeholder: "New Location",
      onChange: (value) => setClient({ ...client, price: value }),
      width: "30%",
    },
    {
      id: 9,
      heading: "Client Name",
      placeholder: "Client Name",
      onChange: (value) => setClient({ ...client, price: value }),
      width: "30%",
    },
  ];

  console.log(client);

  const addClient = () => {
    setValidation({ ...validation, clicked: true });
    console.log(validation);
    if (validation.fields.length == 0)
      firestore
        .collection("restaurants")
        .add(client)
        .then((res) => {
          console.log("success", res.id);
          setModal(true);
        });
  };

  return (
    <div className="new-client">
      <Modal
        toggleShow={() => {
          setModal(!modal);
          history.push(`/main/list/restaurants`);
        }}
        show={modal}
      >
        <h2 style={{ color: "black" }}> Restaurant Added Successfully...</h2>
      </Modal>

      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBox
            values={inputValues[0]}
            validation={validation}
            setValidation={setValidation}
          />
          <InputBox
            values={inputValues[9]}
            validation={validation}
            setValidation={setValidation}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBox2
            values={inputValues[1]}
            validation={validation}
            options={optionsData}
            setValidation={setValidation}
          />
          <InputBox
            values={inputValues[8]}
            validation={validation}
            setValidation={setValidation}
          />
        </div>

        <InputBox
          values={inputValues[2]}
          validation={validation}
          setValidation={setValidation}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBox
            values={inputValues[3]}
            validation={validation}
            setValidation={setValidation}
          />
          <InputBox
            values={inputValues[4]}
            validation={validation}
            setValidation={setValidation}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputBox2
            values={inputValues[5]}
            validation={validation}
            options={optionsData}
            setValidation={setValidation}
          />
          <InputBox
            values={inputValues[6]}
            validation={validation}
            setValidation={setValidation}
          />
        </div>
        <InputBox
          values={inputValues[7]}
          validation={validation}
          setValidation={setValidation}
        />
      </div>
      <div>
        <DragDrop />
        {validation.clicked && validation.fields.length > 0 && (
          <div style={{ color: "#c67b7b" }}>Enter Madatory fields *</div>
        )}
        <div className="create-button" onClick={addClient}>
          Create
        </div>
      </div>
    </div>
  );
};

export default withFirestore(NewClient);
