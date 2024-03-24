import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function HandleChange(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={HandleChange} />
        <input name="lName" placeholder="Last Name" onChange={HandleChange} />
        <input name="email" placeholder="Email" onChange={HandleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
