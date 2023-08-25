import React from "react";

import "./style.css";
function BookTable() {
  return (
    <div className="w-[64.5%]">
      <table className="table-auto mt-5  ">
        <thead>
          <tr className="bg-gray-100 text-left  ">
            <th className="w-56 py-1 px-2">Awtory </th>
            <th className="w-56 py-1">Dersin Ady</th>
            <th className="w-56 py-1">Nesiryaty</th>
            <th className="w-56 py-1">Cap edilen senesi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-50  ">
            <td className="text-lg py-3 px-2 ">Malcolm Lockyer </td>
            <td>The Sliding Mr. Bones </td>
            <td>(Next Stop, Pottersville)</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
