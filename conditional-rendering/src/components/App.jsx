import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === false) {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {isLoggedIn === true ? null : <Login />}
      {/* {renderConditionally()} */}
    </div>
  );
}

export default App;
