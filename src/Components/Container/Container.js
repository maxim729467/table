import React from "react";
import { container } from "./Container.module.css";

export default function Container({ children }) {
  return <div className={container}>{children}</div>;
}
