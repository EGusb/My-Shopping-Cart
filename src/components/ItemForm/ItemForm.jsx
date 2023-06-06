/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";
import InputField from "./InputField";

export default function ItemForm(props) {
  const { onAdd: addItem } = props;
  const [newItem, setNewItem] = useState({ id: "", name: "", description: "", price: "" });

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem.name !== "" && newItem.price > 0) {
      addItem(newItem);
      setNewItem({ id: "", name: "", description: "", price: "" });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewItem((prevProduct) => {
      return { ...prevProduct, [name]: value };
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cargar Producto</h1>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <InputField name="name" value={newItem.name} type="text" labelContent="Nombre" onChange={handleChange} />
        <InputField
          name="description"
          value={newItem.description}
          type="text"
          labelContent="Descripción (opcional)"
          onChange={handleChange}
        />
        <InputField
          name="price"
          value={newItem.price}
          type="number"
          labelContent="Precio"
          onChange={handleChange}
          args={{ min: "0", step: "0.01" }}
        />
        <button className={styles.formButton} type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}
