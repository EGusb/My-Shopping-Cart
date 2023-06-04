import { useState } from "react";
import ItemForm from "./components/ItemForm/ItemForm.jsx";
import ItemList from "./components/ItemList/ItemList.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <main>
      <ItemForm onAdd={addItem} />
      <ItemList onDelete={deleteItem}>{items}</ItemList>
    </main>
  );
}
