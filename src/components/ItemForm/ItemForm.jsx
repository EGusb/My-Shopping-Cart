import styles from "./styles.module.css";
import InputField from "./InputField";

export default function ItemForm() {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cargar Producto</h1>
      <form className={styles.inputForm}>
        <InputField name="name" type="text" textContent="Nombre del Producto" />
        <InputField name="description" type="text" textContent="Descripción del Producto (opcional)" required={false} />
        <InputField name="price" type="number" defaultValue={0} textContent="Precio del Producto" />
        <button onClick={handleClick}>Agregar</button>
      </form>
    </div>
  );
}
