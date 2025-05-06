import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, text, name, placeholder, onChange, value, referencia}) => {

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={referencia}
      />
    </div>
  );
};

export default Input;
