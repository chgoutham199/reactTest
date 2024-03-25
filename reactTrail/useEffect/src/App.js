import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErr(error.message);
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      {users.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.html_url}>{item.login}</a>
          </li>
        );
      })}
    </div>
  );
}
