import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [buttonColor, setButtonColor] = React.useState("white");
  const [buttonTextColor, setButtonTextColor] = React.useState("black");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handleMouseOver() {
    setButtonColor("black");
    setButtonTextColor("white");
  }

  function handleMouseOut() {
    setButtonColor("white");
    setButtonTextColor("black");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItems}>
          <span
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Add
          </span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
