import React from "react";

export default function Contact({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((c, i) => (
        <li key={i}>
          {c}
          <button onClick={() => onDelete(i)} style={{ marginLeft: 8 }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}