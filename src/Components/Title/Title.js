import React from "react";
import { titleSection, heading, timeStamp } from "./Title.module.css";

const convertTime = (timestamp) => {
  const currentTime = new Date().getTime();
  const time = new Date(currentTime - timestamp).toLocaleString();
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
