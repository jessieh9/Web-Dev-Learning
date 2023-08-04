import React from "react";
import Heading from "./Header";
import List from "./List";
import './App.css';
import { add, subtract, multiply, divide } from "./calculator"

// 3, 6, 5, 2.5

function App() {
  return (
    <>
      <Heading />,
      <List />,
      <ul>
        <li>{add(2, 1)}</li>
        <li>{subtract(8, 2)}</li>
        <li>{multiply(1, 5)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </>
  );
}

export default App;








