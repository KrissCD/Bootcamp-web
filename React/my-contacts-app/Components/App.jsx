// App.jsx
import React from "react";
import Card from "./Card";
import contacts from "./Cards/Contacts"; 
import styles from "./Styles.css"; 

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(contact => (
        <Card
          key={contact.id}
          name={contact.name}
          img={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;

