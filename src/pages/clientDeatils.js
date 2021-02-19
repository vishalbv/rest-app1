import React, { Component, useEffect, useState } from "react";
import Search from "../components/search";
import ReactPaginate from "react-paginate";
import "./main.scss";
import Table from "../components/table";
import SortBy from "../components/sortBy";
import HeaderComp from "../components/headerComp";

import A from "../assets/4.png";
import B from "../assets/Calendar.png";
import C from "../assets/Currency_Exchange.png";
import D from "../assets/3.png";

const Data = [
  { a: "vishal", b: "hosanagara", c: 1, d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "goodle", b: "erre", c: 3, d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "cgai", b: "erre", c: 5, d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "4", b: "erre", c: 1, d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "5", b: "erre", c: 3, d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "6", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "7", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "8", b: "erre", c: "a", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "9", b: "erre", c: "fdfd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "10", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "11", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "12", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwew13ew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwewew", b: "erre", c: "fdfd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "aa", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwewew", b: "ewew", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "bbbb", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 1 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "ccc", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
  { a: "wwewew", b: "erre", c: "dsdsd", d: "dsdsd", e: "dsdsd", f: 0 },
];

const sortOptions = [
  { name: "Name", value: 0, ico: A, param: "heading" },
  { name: "Date Joined", value: 1, ico: B, param: "disb" },
  { name: "Revenue", value: 2, ico: C, param: "time" },
  { name: "Plan", value: 3, ico: D, param: "time" },
];

const ClientDetails = () => {
  const [searchVal, setSearchVal] = useState("");
  const [sortIndex, setSortIndex] = useState(sortOptions[0]);
  const [pagination, setPagination] = useState({
    perPage: 10,
    totalItems: 0,
    activePage: 0,
  });

  const [headers, setHeaders] = useState([
    "Client",
    "Location",
    "Date",
    "Plan",
    "Tablets",
    "Bill Payment",
  ]);

  const [displayData, setDisplayData] = useState([]);
  const [allData, setAllData] = useState([...Data]);

  useEffect(() => {
    console.log("alldata changed");
    setPagination({
      ...pagination,
      totalItems: Math.ceil(allData.length / pagination.perPage),
      activePage: 0,
    });
  }, [allData]);

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

  const show = (k) => {
    setDisplayData(
      displayData.map((m, n) => {
        if (n == k) return { ...m, show: !m.show };
        else return { ...m, show: false };
      })
    );
  };

  const searchValChange = (e) => {
    setSearchVal(e.target.value);
    console.log(e.target.value, "val");
    let dummy = Data.filter((i, k) =>
      i.a.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(dummy);
    sortArr({ arr: dummy, param: sortIndex.param });

    // setAllData(dummy);
    // setPagination({ ...pagination, totalItems: dummy.length, activePage: 0 });
  };

  const sortChange = (val) => {
    setSortIndex(val);
    sortArr({ arr: allData, param: val.param });
  };

  const sortArr = ({ arr, param }) => {
    setAllData([
      ...arr.sort((a, b) =>
        a[param].toString().localeCompare(b[param].toString())
      ),
    ]);
  };

  return (
    <div className="client-details">
      {HeaderComp({
        header: "Client Details",

        searchData: {
          value: searchVal,
          onChange: searchValChange,
          placeHolder: "Search Client",
        },
        sortData: {
          options: sortOptions,
          active: sortIndex,
          onChange: sortChange,
        },
      })}

      <Table
        id={1}
        headers={headers}
        params={Object.keys(Data[0])}
        data={displayData}
        show={show}
        setPagination={setPagination}
        pagination={pagination}
        length={allData.length}
      />
    </div>
  );
};

export default ClientDetails;
