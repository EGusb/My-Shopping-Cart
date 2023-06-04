/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export default function Item(props) {
  const { name, description, price, id, onDelete } = props;

  return (
    <div id={`item${id}`} className={styles.container}>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>Precio: $ {price}</h3>
      <p>id: {id}</p>
      <button onClick={() => onDelete(id)}>Borrar</button>
    </div>
  );
}
