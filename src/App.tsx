import * as React from "react";
import SvgIcon from "./components/SvgIcon";
import { Icon } from "./components/SvgIcon/SvgIcon";

export function App() {
  return (
    <h1>
      <SvgIcon name={Icon.Arrow}></SvgIcon>
    </h1>
  );
}
