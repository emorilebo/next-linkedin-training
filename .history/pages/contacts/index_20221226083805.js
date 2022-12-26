import Link from "next/link";
import React from "react";
import contacts from "../api/contacts";

export default function ContactsList() {
  return (
    <div>
      <h1>Welcome to contacts list</h1>
      <Link href=""></Link>
      <ul>
        {contacts.map((contact) => (
          <li>
            <Link href={`contacts/${contact.id}`}>
              <p>{contact.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
