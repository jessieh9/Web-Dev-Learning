import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import { create } from "lodash";

function createCard(contact) {
  return <Card
    key={contact.id}  // needs to be unique across all cards
    name={contact.name}
    image={contact.imgURL}
    num={contact.phone}
    email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
