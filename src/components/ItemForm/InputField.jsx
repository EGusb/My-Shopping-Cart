/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export default function InputField(props) {
  const { name, value, type, onChange, textContent = "", autoComplete = "off" } = props;
  const inputFieldId = `input-form-${name}`;

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        id={inputFieldId}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
      />
      <label className={styles.inputLabel} htmlFor={inputFieldId}>
        {textContent}
      </label>
    </div>
  );
}
