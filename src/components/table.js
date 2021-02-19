import React, { Component, useEffect, useState } from "react";
import "./components.scss";
import $ from "jquery";
import ReactPaginate from "react-paginate";
import Clock from "../assets/Clock.png";
import upArrow from "../assets/UP ARROW.png";
import Strue from "../assets/ACCESS.png";
import Sfalse from "../assets/SELECTED.png";
import Trash from "../assets/TRASH.png";
import Address_ico from "../assets/ADDRESS ICON.png";
import panzen_ico from "../assets/PANZEN ELIOT.png";
import mob_ico from "../assets/PHONE.png";
import clock_ico from "../assets/Clock.png";
import tab_ico from "../assets/TABLET.png";
import cur_ico from "../assets/Currency_Exchange.png";
import rectAngle from "../assets/Rectangle1.png";

const optionsData = [
  { id: 1, name: "Smart Overview" },
  { id: 2, name: "Reservations" },
  { id: 3, name: "Orders" },
  { id: 4, name: "Products" },
  { id: 5, name: "Customer Analytics" },
  { id: 6, name: "Employee Analytics" },
  { id: 7, name: "Revenue Analytics" },
];

const Table = ({
  headers,
  data,
  activeIndex,
  params,
  show,
  id,
  setPagination,
  pagination,
  length,
}) => {
  //   const [tableData, setTableData] = useState(data);

  //   useEffect(() => {
  //     console.log($);
  //     setTimeout(() => {
  //       $(".click-row").on("click", () => alert("Dddddddddd"));
  //     }, 3000);

  //     console.log($(".click-row"));
  //   });

  const StatusIco = ({ st }) => {
    return (
      <img
        src={st ? Strue : Sfalse}
        className="status-ico"
        style={{ width: st ? 30 : 23, height: st ? 35 : 30 }}
      />
    );
  };

  const RowItem = ({ source, title }) => {
    return (
      <div>
        <img src={source} width={20} />
        <span>{title}</span>
      </div>
    );
  };

  const TableRow = ({ id, data, row }) => {
    console.log(data);
    switch (id) {
      case 1: {
        return (
          <div className="click-row docenter">
            <RowItem title={""} source={panzen_ico} />
            <RowItem title={""} source={panzen_ico} />
            <RowItem title={""} source={mob_ico} />
            <RowItem title={""} source={Address_ico} />
          </div>
        );
      }
      case 2: {
        return (
          <div className="click-row docenter">
            <RowItem title={""} source={panzen_ico} />
            <RowItem title={""} source={panzen_ico} />

            <RowItem title={""} source={tab_ico} />
            <div>
              <RowItem title={""} source={clock_ico} />
              <RowItem title={""} source={mob_ico} />
            </div>
            <RowItem title={""} source={cur_ico} />
          </div>
        );
      }
      case 3: {
        return (
          <div className="click-row">
            {row.type == "admin" ? (
              <div className="case3-row">
                {data.map((k, l) => {
                  return (
                    <div className="row-item">
                      <StatusIco st={k.selected} />

                      <span>{k.name}</span>
                    </div>
                  );
                })}
                <div
                  className="row-item"
                  style={{ backgroundColor: "#ba5757" }}
                >
                  <img src={Trash} className="small-ico" />

                  <span> Remove Admin</span>
                </div>
              </div>
            ) : (
              <div className="case3-row">
                <div
                  className="row-item"
                  style={{ backgroundColor: "#ba5757", margin: "0 20px" }}
                >
                  <img src={Trash} className="small-ico" />

                  <span> Remove Captain</span>
                </div>
              </div>
            )}
          </div>
        );
      }
      default:
        return null;
    }
  };

  const updatePerPage = (val) => {
    let count = pagination.perPage + val;
    if (count <= 100 && count > 0)
      setPagination({
        ...pagination,
        perPage: count,
        activePage: 0,
        totalItems: Math.ceil(length / count),
      });
  };

  const getValue = () => {
    return `${pagination.activePage * pagination.perPage + 1} - ${
      pagination.activePage * pagination.perPage + data.length
    }`;
  };

  const onPageChange = (val) => {
    console.log(val, "pagechange");
    setPagination({ ...pagination, activePage: val.selected });
  };

  return (
    <div style={{}} className="main-table tableclass">
      <div className="table-div">
        <table className="maintable" style={{ borderCollapse: "collapse" }}>
          <thead className="header">
            <tr style={{ width: "100%", height: "55px" }}>
              {headers.map((i, k) => {
                return <th key={k}>{i}</th>;
              })}
              <th style={{ width: 50, padding: "0 5px" }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, k) => {
              return (
                <React.Fragment key={k}>
                  <tr className="click-row-main" onClick={() => show(k)}>
                    {params.map((m, n) => {
                      return (
                        <td key={n}>
                          {m == "f" ? (
                            <span
                              className={
                                i[m] == 1 ? "green-button" : "red-button"
                              }
                            >
                              {i[m] == 1 ? "Done" : "Pending"}
                            </span>
                          ) : (
                            <span>{i[m]}</span>
                          )}
                        </td>
                      );
                    })}
                    <td style={{ width: 50, padding: "0 5px" }}>
                      <img
                        src={upArrow}
                        width={13}
                        style={{
                          transform: `rotate(${i.show ? "0deg" : "180deg"})`,
                        }}
                      />
                    </td>
                  </tr>
                  {i.show && (
                    <tr>
                      <td colSpan={headers.length + 1}>
                        <TableRow
                          id={id}
                          data={id == 3 ? optionsData : i.rowData}
                          row={i}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="infodiv" style={{ margin: "0 20px" }}>
        <div>
          {getValue()} of {length} items
        </div>
        <div className="infodiv" style={{ float: "right" }}>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            id="react-paginate"
          >
            <ReactPaginate
              pageCount={pagination.totalItems}
              activePage={pagination.activePage}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              nextLabel={">"}
              previousLabel={"<"}
              previousClassName={"previous"}
              nextClassName={"next"}
              activeClassName={"active"}
              pageClassName={"pageclass"}
              forcePage={pagination.activePage}
              onPageChange={onPageChange}
            />
          </div>
          <div className="docenter per-page">
            <div>{pagination.perPage}</div>
            <div>
              <div onClick={() => updatePerPage(10)}>
                <img src={rectAngle} width={7} />
              </div>
              <div onClick={() => updatePerPage(-10)}>
                <img
                  src={rectAngle}
                  width={7}
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
