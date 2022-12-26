import Link from "next/link";
import React from "react";
import contacts from "../api/contacts";

export default function ContactsList() {
  return (
    <div>
      <h1>Welcome to contacts list</h1>
      <ul>
        {contacts.map((contact) => (
          <li>
            <Link href={`contact/${contact.id}`}>
              <a>{contact.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
