import { useRouter } from "next/router";
import React from "react";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactId } = router.query;
  const contact = contacts.find((contact) => contact.id === name);
  console.log(contacts.name);
  return <div>Contact {contact}</div>;
}
