import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, type, customClass, onClick }) => {
  return (
    <div className={styles[customClass]}>
      <button className={styles.btn} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
