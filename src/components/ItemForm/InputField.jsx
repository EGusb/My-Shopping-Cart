/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function InputField(props) {
  const { name, type, defaultValue, textContent = "", required = true, autoComplete = "off" } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={styles.inputContainer}>
      <input className={styles.inputField}
        name={name}
        type={type}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        autoComplete={autoComplete}
        {...required && "required"}		
      />
      <label className={styles.inputLabel} htmlFor={name}>{textContent}</label>
    </div>
  );
}
