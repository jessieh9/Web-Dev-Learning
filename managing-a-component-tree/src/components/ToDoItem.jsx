import React from "react";

function Todo(props) {
  return (
    <li
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default Todo;
