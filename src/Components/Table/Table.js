import React from "react";
import TableItem from "./TableRow";
import { table, headRow, curColumn, valColumn } from "./Table.module.css";

export default function Table({ currencies }) {
  const { rates, base } = currencies;
  const currenciesArr = Object.entries(rates);

  return (
    <table className={table}>
      <thead>
        <tr className={headRow}>
          <th className={curColumn}>{base}</th>
          <th className={valColumn}>1.00 {base}</th>
        </tr>
      </thead>
      <tbody>
        {currenciesArr.map((currency) => {
          return <TableItem currency={currency} key={currency[0]} />;
        })}
      </tbody>
    </table>
  );
}
