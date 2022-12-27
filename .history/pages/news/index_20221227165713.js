import React from "react";

export default function News({ results }) {
  return <>
  <
  
  </>;
}

const API_KEY = "XqCjeBovgaAskcg8E2nTjxcxN325yZxk";
export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data.results);
  return {
    props: {
      results: data.results,
    },
  };
}
