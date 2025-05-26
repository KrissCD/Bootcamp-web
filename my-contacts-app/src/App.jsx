import React from "react";
import Card from "../Components/Card";
import contacts from "../Components/Contacts";

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
