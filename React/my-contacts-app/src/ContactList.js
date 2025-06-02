import React, { useState } from "react";
import contactsData from "./contacts";

function ContactList() {
  // State to manage the list of contacts
  const [contacts, setContacts] = useState(contactsData);

  // Handler to delete a contact by index
  const handleDelete = (indexToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((_, idx) => idx !== indexToDelete)
    );
  };

  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map((contact, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "300px",
          }}
        >
          <img
            src={contact.imgURL}
            alt={contact.name}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{contact.name}</h2>
          <p>📞 {contact.phone}</p>
          <p>✉️ {contact.email}</p>
          <button onClick={() => handleDelete(idx)}>Delete</button>
        </div>
      ))}
      {contacts.length === 0 && <p>No contacts left.</p>}
    </div>
  );
}

export default ContactList;