import { useState } from "react";
import styles from "./styles.module.css";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Price: ${price}`);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cargar Producto</h1>
      <form className={styles.inputForm}>
        <input
          name="name"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          autoComplete="off"
          required
        />
        <label htmlFor="name">Nombre del Producto</label>

        <input
          name="description"
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          autoComplete="off"
        />
        <label htmlFor="description">Descripción del Producto (opcional)</label>

        <input
          name="price"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          value={price}
          autoComplete="off"
          required
        />
        <label htmlFor="price">Precio del Producto</label>

        <button onClick={handleClick}>Agregar</button>
      </form>
    </div>
  );
}
