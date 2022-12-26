import { useRouter } from "next/router";
import React from "react";

export default function Contact() {
    const router = useRouter();
    const {}= router.query;
    const contact = 
  return <div>Contact</div>;
}


// const router = useRouter();
//   const { name } = router.query;
//   const topic = topics.find((topic) => topic.id === name);
//   return <div>Learn {topic.id} </div>;