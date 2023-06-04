/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import Item from "../Item/Item";

export default function ItemList(props) {
  const { children, onDelete } = props;

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.title}>Listado</h1>
      <div className={styles.list}>
        {children.map((item, index) => {
          return (
            <Item name={item.name} description={item.description} price={item.price} id={index} key={index} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
}
