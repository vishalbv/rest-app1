import React, {
  FunctionComponent,
  useEffect,
  useState,
  SyntheticEvent,
} from "react"; // importing FunctionComponent
import "./sortDropdown.scss";
import SortIco from "../assets/HANDBURGER.svg";
import { DropDownItem } from "./dropDownItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateIco from "../assets/Calendar.png";

import moment from "moment";

const sortDurationData = [
  {
    id: 0,
    label: "Till Date",
  },
  {
    id: 1,
    label: "Annual",
  },
  {
    id: 2,
    label: "Quarter",
  },
  {
    id: 3,
    label: "Month",
  },
  {
    id: 4,
    label: "Day",
  },
];

const getOptions = (id) => {
  let year = moment().year();
  let month = moment().month() + 1;
  //   month = 1;
  let date = moment().date();
  console.log(year, month, date, `11/${("0" + (3 + 1)).slice(-2)}/1999`);
  let opt = [];

  const getTh = (val2) => {
    let val = ("0" + val2).slice(-1);
    if (("0" + val2).slice(-2).slice(0, 1) == 1) return "th";
    else if (val == 1) {
      return "st";
    } else if (val == 2) {
      return "nd";
    } else if (val == 3) {
      return "rd";
    } else if (val == 4) {
      return "th";
    } else return "th";
  };

  if (id == 1) {
    for (let i = 0; i < 10; i++) {
      opt.push({ value: year - i, label: year - i });
    }
    return opt;
  } else if (id == 2) {
    for (let i = 0; i < Math.ceil(month / 3); i++) {
      opt.push({ value: i + 1, label: `${i + 1}${getTh(i + 1)} Quarter` });
    }
    return opt;
  } else if (id == 3) {
    for (let i = 0; i < month; i++) {
      opt.push({
        value: i + 1,
        label: moment(`1999/${("0" + (i + 1)).slice(-2)}/11`).format("MMMM"),
      });
    }

    return opt;
  } else if (id == 4) {
    for (let i = 0; i < date; i++) {
      opt.push({
        value: i + 1,
        label: `${i + 1}${getTh(i + 1)}`,
      });
    }

    return opt;
  }
};

const CustomDateInput = ({ value, onClick }) => (
  <button className={"date-pick"} onClick={onClick}>
    <img src={DateIco} className="small-ico" />

    <div> {value == "" || !value ? "Select..." : value}</div>
  </button>
);

export const SortDate = ({
  onSelectItem,
  display = false,
  rotateIcon = 0,
  selectedFinalItem,
  type,
}) => {
  const [displayMenu, toggleDropDown] = useState(display);
  const [rotate, toggleRotate] = useState(rotateIcon);
  const [selected, setSelected] = useState({});

  const [finalItem, setFinalItem] = useState(selectedFinalItem);

  const dateChanged = ({ val, item }) => {
    console.log(val, "llllllllll");
    setFinalItem({ val, item });
  };

  const hideDropdownMenu = () => {
    setSelected(selectedFinalItem.item ?? sortDurationData[0]);
    toggleDropDown(false);
    toggleRotate(0);
  };

  useEffect(() => {
    if (!selectedFinalItem.item) {
      setSelected(sortDurationData[0]);
      setFinalItem({
        item: sortDurationData[0],
        val: { label: null, id: null },
      });
    }
  }, []);

  const showDropdownMenu = () => {
    if (displayMenu === false) {
      toggleDropDown(true);
      toggleRotate(180);
    }
  };

  const style = "sortDropdown";

  return (
    <div className={style}>
      <img
        src={SortIco}
        alt={"menu"}
        onClick={displayMenu ? hideDropdownMenu : showDropdownMenu}
      />
      {displayMenu ? (
        <ul>
          {sortDurationData.map((el, k) => (
            <SortItem
              key={k}
              label={el.label}
              id={el.id}
              selectedFinalItem={finalItem}
              selected={selected}
              onChange={(val) => dateChanged({ val, item: el })}
              onToggle={(val) => setSelected(val)}
            />
          ))}
          <div
            onClick={() => {
              onSelectItem(finalItem);
              toggleDropDown(false);
              toggleRotate(0);
            }}
            className="assign-button"
          >
            Assign Changes
          </div>
        </ul>
      ) : null}
    </div>
  );
};

const SortItem = ({
  label,
  selected,
  onToggle,
  id,
  onChange,
  selectedFinalItem,
}) => {
  const selectedStyle =
    selected.label === label ? "toggle toggle_On" : "toggle";
  console.log(selectedFinalItem, "llllllllll");
  const [date, setDate] = useState(
    selected.label === label ? selectedFinalItem?.val?.label : ""
  );
  return (
    <li className="sortDropDown_item">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 .4vw",
          width: "100%",
        }}
        onClick={() => {
          onToggle({ label, id });
          if (id == 0) {
            onChange({ label: "till", id: 1 });
          }
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            //   justifyContent: "space-between",
            //   margin: "0 .4vw",
          }}
        >
          <div className={selectedStyle} />
          <text>{label}</text>
        </div>
        {id != 0 && id != 4 && (
          <div style={{ float: "right", width: "45%", cursor: "pointer" }}>
            <DropDownItem
              value={selected.label === label ? selectedFinalItem.val : null}
              onChange={onChange}
              isDisabled={selected.label != label}
              options={getOptions(id)}
            />
          </div>
        )}
        {id == 4 && (
          <div
            style={{
              opacity: selected.label != label ? ".5" : "1",
              width: "45%",
            }}
          >
            <DatePicker
              dateFormat=" d MMM yyyy"
              selected={date}
              onChange={(val) => {
                setDate(val);
                onChange({ label: val, id: 1 });
              }}
              customInput={<CustomDateInput />}
              // onCalendarOpen={() => toggleRotate(180)}
              // onCalendarClose={() => toggleRotate(0)}
            />
          </div>
        )}
      </div>
    </li>
  );
};

// const Toggle = ({ selected, label, onToggle, id }) => {
//   return (

//   );
// };
