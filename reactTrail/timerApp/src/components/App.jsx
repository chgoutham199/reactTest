import React from "react";
import { useState } from "react";

function App() {
  var t = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState("Time");
  function latest() {
    setInterval(latest, 1000);
    var t = new Date().toLocaleTimeString();
    setTimer(t);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={latest}>Get Time</button>
    </div>
  );
}

export default App;
