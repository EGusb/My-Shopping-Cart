/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function Item(props) {
  const { itemCount, setItemCount } = useState(0);
  const { name, description, price, id, onDelete } = props;

  return (
    <div id={`item${id}`} className={styles.item}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>$ {price}</h3>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => onDelete(id)}>
          Borrar
        </button>
      </div>
    </div>
  );
}
