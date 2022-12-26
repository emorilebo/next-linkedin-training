import React from "react";
import contacts from "../api/contacts";

export default function ContactsList() {
    
  return <div>
    <h1>Welcome to contacts list</h1>
    <div>{contacts.map(contact =>())}</div>
  </div>;
}
