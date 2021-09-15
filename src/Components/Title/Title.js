import React from "react";
import { titleSection, heading, timeStamp } from "./Title.module.css";

const convertTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toLocaleString();
  return time;
};

export default function Title({ title, timestamp }) {
  return (
    <div className={titleSection}>
      <h1 className={heading}>{title}</h1>
      <p className={timeStamp}>{convertTime(timestamp)}</p>
    </div>
  );
}
