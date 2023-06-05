/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function Item(props) {
  const { name, description, price, id, onDelete: deleteItem } = props;
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(Number(0).toFixed(2));

  function handleClick(num) {
    setItemCount((prevItemCount) => {
      if (prevItemCount > 0 || (prevItemCount === 0 && num > 0)) {
        prevItemCount += num;
        setTotalPrice(Number(price * prevItemCount).toFixed(2));
      }
      return prevItemCount;
    });
  }

  return (
    <div id={`item${id}`} className={styles.item}>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h4>$ {price}</h4>
      <div className={styles.buttonContainer}>
        {/* <button className={styles.button} onClick={() => onDelete(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button> */}
        <button className={styles.button} onClick={() => handleClick(-1)}>
          -
        </button>
        <span className={styles.itemCount}>{itemCount}</span>
        <button className={styles.button} onClick={() => handleClick(1)}>
          +
        </button>
        <h3>{totalPrice}</h3>
      </div>
    </div>
  );
}
