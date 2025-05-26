import Card from "./Card.jsx";
import contacts from "../contacts.js"


function App() {

  console.log(contacts);

  var allContacts = contacts.map(function(contact){
    return(
      <Card 
        name = {contact.name} 
        url = {contact.imgURL} 
        tel = {contact.phone} 
        email = {contact.email} />
    )
  })

  return(
    <div>
       {allContacts}
    </div>
  )
}

export default App