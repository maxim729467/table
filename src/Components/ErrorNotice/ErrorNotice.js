import React from "react";
import { notice } from "./ErrorNotice.module.css";

export default function ErrorNotice() {
  return <p className={notice}>Some issue has occured</p>;
}
