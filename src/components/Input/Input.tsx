import React from "react";
import styles from "./input.scss";

export const Input: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <input className={styles["input"]} />
    </div>
  );
};
