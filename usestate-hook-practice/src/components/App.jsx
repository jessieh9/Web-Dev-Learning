import React from "react";

function App() {
  setInterval(newTime, 1000);

  const time = new Date().toLocaleTimeString();

  var [currentTime, setTime] = React.useState(time);

  function newTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
