import { useRouter } from "next/router";
import React from "react";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactID } = router.query;
  const contact = contacts.find((contact) => contact.id === contactID);
  console.log(contact);
  const [lastName, firstName] = contact?.name.split(" ")
  return (
    <div>
      Contact: {lastName.toUpperCase()}, {firstName}
    </div>
  );
}
