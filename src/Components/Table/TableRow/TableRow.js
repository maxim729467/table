import React from "react";
import { tableRow, curColumn, valColumn } from "./TableRow.module.css";

export default function TableRow({ currency }) {
  const [name, value] = currency;
  return (
    <tr className={tableRow}>
      <td className={curColumn}>{name}</td>
      <td className={valColumn}>{value.toFixed(5)}</td>
    </tr>
  );
}
