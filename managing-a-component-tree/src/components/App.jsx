import React, { useState } from "react";
import Todo from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
  }

  function removeItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea click={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Todo
              key={index}
              id={index}
              deleteItem={removeItem}
              item={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
