import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Contact from "./components/Contact";
import Auth from "./components/Auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [contacts, setContacts] = useState(["Alice", "Bob", "Charlie"]);

  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  if (!loggedIn) {
    return (
      <>
        <h1>Hello, LOG IN!</h1>
        <Auth onLogin={() => setLoggedIn(true)} />
      </>
    );
  }

  return (
    <>
      <h1>My Contacts</h1>
      <Contact contacts={contacts} onDelete={handleDelete} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);