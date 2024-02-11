import React, { useState } from "react";
import Dot from "./list";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  function handleChange(event) {
    const val = event.target.value;
    setItem(val);
  }
  function addListItem() {
    setList([...list, item]);
  }
  function DeleteItem(id) {
    setList(list.filter((item, index) => index !== id));
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={addListItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => (
            <Dot key={index} id={index} items={item} onTouch={DeleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
