import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import places from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      {places.map((attraction, index) => {
        return (
          <Card
            key={index}
            {...attraction}
          />
        )
      })}
    </div>
  );
}

export default App;
