import "./styles.css";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);
  return (
    <div className="App">
      <form action="post">
        <label>
          Name
          <input
            value={user.name}
            type="text"
            name="name"
            onChange={handleChange}
            id="name"
          />
        </label>
        <br />
        <label>
          password
          <input
            value={user.password}
            type="text"
            name="password"
            onChange={handleChange}
            id="password"
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
