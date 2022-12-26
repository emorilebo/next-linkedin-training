import { useRouter } from "next/router";
import React from "react";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { name } = router.query;
  const contact = contacts.find((contact) => contact.id === name);
  console.log(contact.);
  return <div>Contact {contact}</div>;
}

// const router = useRouter();
//   const { name } = router.query;
//   const topic = topics.find((topic) => topic.id === name);
//   return <div>Learn {topic.id} </div>;
