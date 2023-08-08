import React from "react";
import Login from "./Login";
import Register from "./Register";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Login /> : <Register />}
    </div>
  );
}

export default App;


// another way to do this is to have a Form component like Login and have a 
// conditional in the field of confirm password such that it shows if 
// the user is registered and if not then will be false.
