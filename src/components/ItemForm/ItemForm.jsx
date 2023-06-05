/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";
import InputField from "./InputField";

export default function ItemForm(props) {
  const { onAdd: addItem } = props;
  const [product, setProduct] = useState({ id: "", name: "", description: "", price: "" });

  function handleClick(event) {
    event.preventDefault();
    if (product.name !== "" && product.price > 0) {
      addItem(product);
      setProduct({ name: "", description: "", price: "" });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((prevProduct) => {
      return { ...prevProduct, [name]: value };
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cargar Producto</h1>
      <form className={styles.inputForm}>
        <InputField name="name" value={product.name} type="text" labelContent="Nombre" onChange={handleChange} />
        <InputField
          name="description"
          value={product.description}
          type="text"
          labelContent="Descripción (opcional)"
          onChange={handleChange}
        />
        <InputField
          name="price"
          value={product.price}
          type="number"
          labelContent="Precio"
          onChange={handleChange}
          args={{ min: "0", step: "0.01" }}
        />
        <button className={styles.formButton} onClick={handleClick}>
          Agregar
        </button>
      </form>
    </div>
  );
}
