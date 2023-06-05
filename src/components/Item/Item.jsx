/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function Item(props) {
  const [itemCount, setItemCount] = useState(0);
  const { name, description, price, id, onDelete } = props;

  return (
    <div id={`item${id}`} className={styles.item}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>$ {price}</h3>
      <div className={styles.buttonContainer}>
        {/* <button className={styles.button} onClick={() => onDelete(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button> */}
        <button className={styles.button} onClick={() => setItemCount(itemCount - 1)}>
          -
        </button>
        <span className={styles.itemCount}>{itemCount}</span>
        <button className={styles.button} onClick={() => setItemCount(itemCount + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
