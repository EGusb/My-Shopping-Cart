import { useState } from "react";
import styles from "./styles.module.css";
import InputField from "./InputField";

export default function ItemForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "" });

  function handleClick(event) {
    event.preventDefault();
    console.log(product);
    setProduct({ name: "", description: "", price: "" });
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
        <InputField name="name" value={product.name} type="text" textContent="Nombre del Producto" onChange={handleChange} />
        <InputField
          name="description"
          value={product.description}
          type="text"
          textContent="Descripción del Producto (opcional)"
          onChange={handleChange}
        />
        <InputField name="price" value={product.price} type="number" textContent="Precio del Producto" onChange={handleChange} />
        <button className="form-button" onClick={handleClick}>Agregar</button>
      </form>
    </div>
  );
}
