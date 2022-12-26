import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactID } = router.query;
  const contact = contacts.find((contact) => contact.id === contactID);
  
  const [lastName, firstName] = contact?.name.split(" ")
  return (
    <>
    <Link href="/contacts">Back</Link>
      <p>Contact: {lastName.toUpperCase()}, {firstName}</p>
    </>
  );
}
